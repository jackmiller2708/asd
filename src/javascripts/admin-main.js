// STYLESHEETS ==========================
import '../stylesheets/admin.scss'; // Main stylesheet
import '../../utils/toast/main.scss'; // Toastify Stylesheet
// Font-Awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// LIBRARIES ============================

// JQuery
import $ from 'jquery';

// Bootstrap
import{ Modal } from 'bootstrap';

// Toastify
import '../../utils/toast/Toastify';

// Socket.io
const socket = io('/Admins'); // Connects to Admins namespace

// CONSTANTS ============================
const toast = document.querySelector("el-toast");
const adminRooms = ['admin1', 'admin2', 'admin3',];

// VARIABLES ============================
let user_cells = $('.msg');
let modal_body = $('.modal-body');
let selected_client;
let selected_forward_client;
let localRoomList = new Map();
let localAdmin;
let localClients;

// FUNCTIONS ============================
/**
 * Handles the document loaded event.
 */
const onLoad = () => {

    // List of events
    socket.on('clientUpdate', onClientUpdate);

    socket.on('adminUpdate', onAdminUpdate);

    socket.on('chatLogUpdate', onChatLogUpdate);

    socket.on('requestReceived', onRequestReceived);

    socket.on('requestAccepted', onRequestAccepted);

    socket.on('requestDeclined', onRequestDeclined);

    socket.on('message', onMessage);

    socket.on('clientDisconnect', onClientDisconnect);

    // =================================================================================================================

    // Sets active once a user cell is clicked
    user_cells.each(el => el.on('click', userCellClicked));

    $('.chat-area-footer form').on('submit', onFormSubmit);

    if (selected_client === undefined) {
        $('.user-settings').hide();
    }

    // Get admin data from session
    $.get('/session/get/admin',

    /**
     * Handles the data returns by the session.
     * @param {String} data the admin login information
     */
    data => {
        socket.emit('adminLoggedOn', data);

        let adminData = parse(data, reviver);

        setTimeout(() =>{
            if (adminData.clients !== undefined) adminData.clients.forEach(clientEmail => {
                let client = localClients.get(clientEmail);
                newUserCell(client.username, client.email);
            });
        }, 500);
    }).fail(
        /**
         * Handles if the data returns an error.
         */
        () => {

        let loginModal = new Modal(document.getElementById('loginStaticBackdrop'), {backdrop: 'static'});

        loginModal.show();

        $('#login-form').on('submit',
            /**
             * Handles the login form submit event.
             *
             * this functions will prevent the default sumbit behaviour
             * of the form and save the login information to session. Lastly,
             * publish a toast notification and fire the adminLoggedOn function.
             *
             * * NOTE: this is just a simple example of how the login function would behave
             * DO NOT use this in production mode!
             */
            e => {
                e.preventDefault();

                loginModal.hide();

                const loggedInAdmin = stringify({
                    email: $('#emailInput').val(),
                    username: $('#usernameInput').val(),
                    position: $('#roomSelect').val(),
                });

                toast.publish({
                    type: "success",
                    description: `Welcome ${$('#usernameInput').val()}!`,
                    timeout: 8000
                });

                socket.emit('adminLoggedOn', loggedInAdmin);
            }
        );
    });

    checkUsers();
}

// EVENT HANDLERS
/**
 * Handles the clientUpdate event.
 *
 * This function will take in a stringified JSON clientList the parses it,
 * resets the modal body then create two buttons bound with a click event
 * and an event handler for each button per pending client.
 * @param {String} clientList
 */
const onClientUpdate = clientList => {

    let parsedClientList = parse(clientList, reviver);

    localClients = parsedClientList;

    // Selects the client list container
    let modal1_body = $('#exampleModal').find('.modal-body');

    // Resets it
    modal1_body.html('');

    if (parsedClientList.size !== 0) {

        let parsedClientListIds = Array.from(parsedClientList.keys()); // [email1, email2, email3,...]

        parsedClientListIds.forEach(
            /**
             * Creates interactable items on the DOM for each client.
             * @param {String} id an email acts as an id.
             */
            id => {
                let client = parsedClientList.get(id);

                if (client.state === 'waiting') {
                    modal1_body.prepend(
                        $(`<div class="d-flex">
                                <button
                                    class="btn btn-outline-success w-100 client-select"
                                    id="${slugify(client.email)}">
                                        ${client.username} - ${client.email}
                                </button>
                                <button
                                    class="btn btn-outline-success flex-shrink-1 client-forward"
                                    client-id="${client.email}"
                                    title="Forward to another admin">
                                        <i class="fas fa-forward"></i>
                                </button>
                            </div>`
                        ).on('click',
                            /**
                             * Handles the button click event.
                             *
                             * Based on the button clicked, if the button is the select button
                             * it will create new usercell with the provided information or if it's the
                             * forwaard button, it will trigger the onforwardBtnClicked event handler
                             */
                            e => { // Handles the client select button click event
                                const target = $(e.target);

                                if (target.hasClass('client-select')) {

                                    target.remove();

                                    checkUsers();

                                    newUserCell(client.username, client.email);
                                }
                                else onForwardBtnClicked(e);
                            }
                        )
                    );
                }
            }
        )
    }

    checkUsers();
}


/**
 * Handles the adminUpdate event.
 *
 *
 * @param {String} adminList the stringified JSON admin list.
 */
const onAdminUpdate = adminList => {
    const parsedAdminList = parse(adminList, reviver);

    // Selects the admin list container
    let modal2_body = $('#staticBackdrop').find('.modal-body');
    let modal3_body = $('#adminStaticBackdrop').find('.modal-body');

    // Resets it
    modal2_body.html('');
    modal3_body.html('');

    const accordionContainer =  $(`
        <div
            class="accordion"
            id="adminAccordion">
        </div>`);

    const adminForwardAccordionContainer =  $(`
        <div
            class="accordion"
            id="adminForwardAccordion">
        </div>`);

    getAdminAccordionItems(accordionContainer, parsedAdminList, "A");
    getAdminAccordionItems(adminForwardAccordionContainer, parsedAdminList, "F");

    modal2_body.prepend(accordionContainer);
    modal3_body.prepend(adminForwardAccordionContainer);
}

/**
 *
 * @param {JQuery} accordionContainer the jquery element of the accordion container.
 * @param {JSON} parsedAdminList the JSON parsed admin list.
 * @param {String} mode A or F, where F is forward and A is invite.
 */
const getAdminAccordionItems = (accordionContainer, parsedAdminList, mode) => {

    adminRooms.forEach(id => {

        const accordionItem = $(`<div class="accordion-item"></div>`);

        let modeId = mode === "A" ? id : id + '-f';

        const accordionItemHeader = $(`
            <h2 class="accordion-header" id="${modeId}-Header">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#${modeId}"
                    aria-expanded="false" aria-controls="${id}">
                        Room ${id}
                </button>
            </h2>
        `);

        const accordionItemBodyContainer = $(`
            <div
                id="${modeId}"
                class="accordion-collapse collapse"
                aria-labelledby="${modeId}-Header"
                data-bs-parent="#adminAccordion">
            </div>`);

        const accordionItemBody = $(`<div class="accordion-body"></div>`);

        accordionItem.appendTo(accordionContainer);
        accordionItemHeader.appendTo(accordionItem);
        accordionItemBodyContainer.appendTo(accordionItem);
        accordionItemBody.appendTo(accordionItemBodyContainer);

        parsedAdminList.forEach(admin => {
            if (admin.state === 'online') {

                let adminSocketId = admin.socketIds[0];

                if (adminRooms[admin.position] === id) {
                    let room = localRoomList.get(id);

                    if (room !== undefined)  room.push(admin.email);
                    else localRoomList.set(id, [admin.email]);

                    if (!admin.socketIds.includes(socket.id)) {
                        accordionItemBody.prepend(
                            $(`
                                <div>
                                    <button class="btn btn-outline-success w-100" id="${mode === "A" ? adminSocketId : adminSocketId + '-f'}">${admin.username}</button>
                                </div>`).on('click', () => {
                                    if (mode === "A")
                                        socket.emit('requestSent', {to: adminSocketId, clientEmail: selected_client, type: "invite"});
                                    else
                                        socket.emit('requestSent', {to: adminSocketId, clientEmail: selected_forward_client, type: "forward"});
                            })
                        );
                    }

                    else {
                        if (mode === "A") {

                            localAdmin = admin;

                            $.post('/session/set/admin', {data: stringify(localAdmin)});
                        }
                    }
                }
            }
        });

        if (accordionItemBody.find('button').length === 0) accordionItem.remove();
    });
}

/**
 * Handles the forward button click event.
 *
 * This function will select the client as selected forward client
 * then hides the pending client modal and shows the admin select modal.
 * @param {Event} e the event object.
 */
const onForwardBtnClicked = e => {

    const waitListEl = document.getElementById('exampleModal');
    const adminForwardListEl = document.getElementById('adminStaticBackdrop');
    const adminForwardListModal = Modal.getInstance(adminForwardListEl) || new Modal(adminForwardListEl, {backdrop: 'static'});

    if ($(e.target).hasClass('btn')) selected_forward_client = $(e.target).attr('client-id');

    else selected_forward_client = $(e.target).parent('.btn').attr('client-id',);

    Modal.getInstance(waitListEl).hide();

    adminForwardListModal.show();
}

/**
 * Handles the chatLogUpdate event.
 *
 * this function will clear the chat area and populate it with
 * the meessages fron the chat log.
 * @param {Array<object>} chatLog the array contains the messages of the selected room.
 */
const onChatLogUpdate = chatLog => {

    $('.chat-area-main').html('');

    chatLog.forEach(
        /**
         * Triggers the message event handler for each message.
         * @param {object} message the message object
         */
        message => onMessage({
            sender:  message.from,
            message: message.message,
            roomId:  selected_client
        })
    );
}

/**
 * Handles the onRequestReceieved function.
 *
 * This function will process to request, it will first check
 * for the type then publish a toast notification with the content
 * based on the type.
 * @param {object} object
 */
const onRequestReceived = ({from, client, type}) => {

    from = parse(from, reviver);
    client = parse(client, reviver);

    let description = type === 'invite' ?
        `Admin ${from.username} invited you to a conversation.` :
        `Admin ${from.username} forwarded a client to you.`;

    // Publish a toast notification
    let idtoast = toast.publish({
        type: "info",
        description: description,
        timeout: 0,
        actions: [
            {
                title: "ACCEPT",
                onClick: () => {
                    // Removes the toast notification
                    // Sends the confirmation
                    // Creates a new user cell
                    toast.remove(idtoast);
                    socket.emit('requestAccepted', {to: from.socketIds[0], clientEmail: client.email, type: type});

                    if (type === 'forward') $(`[client-id="${client.email}"]`).remove();
                    newUserCell(client.username, client.email);
                }
            },
            {
                title: "DECLINE",
                onClick: () => {
                    // Removes the toast notification
                    // Sends the invitation decline
                    toast.remove(idtoast);
                    socket.emit('requestDeclined', {to: from.socketIds[0], clientEmail: client.email, type: type});
                }
            }
        ]
    });
}

/**
 * Handles the onRequestAccepted event.
 *
 * The function will first process the response message
 * then it will whether the response type is forward or invite.
 * if forword then remove that user cell and the coressponding chat log
 * then select the nextdoor usercell, if not then populate the view with default values.
 * @param {object} object an object contains the message information.
 */
const onRequestAccepted = ({type, message}) => {

    processRequestResponse(message, "info");

    if (type === "forward"){
        if (selected_forward_client === selected_client) {

            // Removes the usercell
            $(`[client-id="${selected_forward_client}"]`).remove();

            // Looks for the next usercell.
            let selectedClients = $('.conversation-area').find('.msg');

            // If there's one
            if (selectedClients.length !== 0) {
                $(selectedClients[0]).trigger('click');
            }
            else { // If not

                // Set default values.
                $('.chat-area-main').html('');

                $(`
                    <div class="not-selected">
                        <h1>Please select a client to start converse</h1>
                    </div>`).appendTo($('.chat-area-main'));

                $('.chat-area-title').html('(Not Selected)');

                selected_client = undefined;
                selected_forward_client = undefined;

                $('.user-settings').hide();
            }

        }
    }
};

/**
 * Handles the requestDeclined event
 * @param {object} object
 */
const onRequestDeclined = ({message}) => processRequestResponse(message, "danger");

/**
 * Handles the message event.
 *
 * This function will first check whether the message is comming from
 * the selected client room, if true then create chat bubble based on the sender.
 * @param {String} sender the sender id.
 * @param {object} message the message object.
 * @param {String} roomId the room id.
 */
const onMessage = ({sender, message, roomId}) => {

    if (roomId === selected_client) {

        if (sender === localAdmin.email) {
            createChatBubble(message, 'sender');
            sender = "You";
        }
        else createChatBubble(message, 'receiver');

    }
    if (selected_client !== undefined)
        $(`#${slugify(selected_client)}`).find('.msg-message').html(`${sender}: ${message.text}`);
}

/**
 * Handles clientConnected event.
 *
 * This function will publish a toast notification when a client disconnects.
 * @param {object} object an object contains the client information.
 */
const onClientDisconnect = ({id, email}) => {
    toast.publish({
        type: "info",
        description: `Client (${id}) has disconnected!`,
        timeout: 8000
    });

    $(`#${slugify(email)}`).removeClass('online');
}

/**
 * Handles the form submit event.
 *
 * This function will first prevent the default behaviour of the form
 * which is the submission, then it will get the value of the input form control
 * and send it as an event to the server. Lastly, trigger the form reset event.
 * @param {Event} e Event object.
 */
const onFormSubmit = e => {

    e.preventDefault();

    const input_text = $(e.target).find('input').val();

    socket.emit('message', {from: socket.id, to: selected_client, text: input_text});

    $(e.target).trigger('reset');
}

/**
 * Handles click event on user cell.
 *
 * This function will if the usercell or the content of the
 * usercell is clicked, it will then set the usercell is active
 * and set the selected client and the selected forward client to
 * the clicked user email, after that it will fire the clientSwitched event.
 * @param {Event} e Event object.
 */
const userCellClicked = e => {
    const active_user_cell = $('.msg.active');
    active_user_cell.removeClass('active');
    let chat_title;
    let event_target;

    if($(e.target).hasClass('msg')) {
        event_target =  $(e.target);
        event_target.addClass('active');
        chat_title = event_target.find('.msg-username').html();
        selected_client = $(e.target).attr('client-id');
    }
    else {
        event_target = user_cells.has($(e.target))
        event_target.addClass('active');
        chat_title = event_target.find('.msg-username').html();
        selected_client = event_target.attr('client-id');
    }

    selected_forward_client = selected_client;

    $('.user-settings').show();

    socket.emit('clientSwitched', selected_client);

    $('.chat-area-main').html('');
    $('.chat-area-title').html(chat_title);
}

/**
 *
 * @param {String} message
 * @param {String} type
 */
const processRequestResponse = (message, type) => toast.publish({
    type: type,
    description: message,
    timeout: 8000
});

/**
 * Checks if there are clients on the waiting list
 */
const checkUsers = () => {
    modal_body.each(function() {
        if($(this).find('button').length === 0) $(this).html(
            `<div class="alert alert-primary" role="alert">
            NO USERS
        </div>`)
        else {
            $(this).find('.alert').remove();
        }
    });
}

/**
 * Creates a new user cell and initiates the conversation.
 *
 * This function creates a new usercell then fire the clientSelected event,
 * set the selected client to the usercell owner.
 * @param {String} username the username of the selected client.
 * @param {String} client_email The id of the selected client.
 */
const newUserCell = (username, client_email) => {
    const new_user_cell =
        $(`
            <div class="msg online" id="${slugify(client_email)}" client-id="${client_email}">
                <img
                    class="msg-profile"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="">
                <div class="msg-detail">
                    <div class="msg-username">${username} - ${client_email}</div>
                    <div class="msg-content">
                        <span class="msg-message">What time was our meet</span>
                        <span class="msg-date">20m</span>
                    </div>
                </div>
            </div>
        `);

    socket.emit('clientSelected', client_email);

    // append the user cell
    $('.conversation-area').prepend(new_user_cell);

    // Sets the selected client.
    selected_client = client_email;

    // Selects all user cells.
    user_cells = $('.msg');

    // Removse the click event listener.
    user_cells.off('click');

    // Binds the click event with the event handler.
    user_cells.on('click',
        /**
         * Triggers the usercell function.
         */
        e => userCellClicked(e));

    // triggers the event.
    new_user_cell.trigger('click');
}

/**
 * Creates a chat bubble.
 *
 * This function creates chat bubble and append it to the chat area
 * based on the sender.
 * @param {String} input Text message.
 * @param {String} role receiver or sender?
 */
const createChatBubble = (input, role) => {
    const chat_area = document.querySelector('.chat-area');
    const chat_area_main = $('.chat-area-main');

    let all_message_containers = chat_area_main.find('.chat-msg');
    let last_message = all_message_containers[all_message_containers.length - 1];

    if (role === 'sender') {
        if ($(last_message).hasClass('owner')) {
            $(`<div class="chat-msg-text">${input.text}</div>`).appendTo($(last_message).find('.chat-msg-content'));
        } else {
            $(`<div class="chat-msg owner">
                <div class="chat-msg-profile">
                    <img
                        class="chat-msg-img"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="">
                    <div class="chat-msg-date">Message sent ${input.time}</div>
                </div>
                <div class="chat-msg-content">
                    <div class="chat-msg-text">${input.text}</div>
                </div>
            </div>`).appendTo(chat_area_main);
        }
    } else {
        if ($(last_message).hasClass('owner') || last_message === undefined) {
            $(`<div class="chat-msg">
                <div class="chat-msg-profile">
                    <img
                        class="chat-msg-img"
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="">
                    <div class="chat-msg-date">Message sent ${input.time}</div>
                </div>
                <div class="chat-msg-content">
                    <div class="chat-msg-text">${input.text}</div>
                </div>
            </div>`).appendTo(chat_area_main);
        } else {
            $(`<div class="chat-msg-text">${input.text}</div>`).appendTo($(last_message).find('.chat-msg-content'));
        }
    }

    // Keep the chat area showing the latest chat message.
    chat_area.scrollTop = chat_area.scrollHeight;
}


// EXTERNAL FUNCTIONS ====================
const { reviver } = require('../../utils/mapUtitls');

const {parse, stringify} = require('flatted');

/**
 * Slugifies a string.
 * @param {String} str a string to slugify.
 */
function slugify(str)
{
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '')
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-')
    // Collapse dashes
    .replace(/-+/g, '-');

    return str;
}

$(function() { onLoad(); });