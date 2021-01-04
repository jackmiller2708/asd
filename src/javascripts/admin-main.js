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
import $ from 'jquery'

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


// FUNCTIONS ============================
/**
 * Handles the document loaded event.
 */
const onLoad = () => {

    let rand = getRandomInt(2);

    socket.emit('adminLoggedOn', adminRooms[rand]);

    console.log('Joined Room', adminRooms[rand]);

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

    checkUsers();
}

/**
 *
 * @param max
 * @returns {number}
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// EVENT HANDLERS
/**
 *
 * @param clientList
 */
const onClientUpdate = clientList => {
    let parsedClientList = JSONParseMap(clientList);

    // Selects the client list container
    let modal1_body = $('#exampleModal').find('.modal-body');

    // Resets it
    modal1_body.html('');

    if (parsedClientList.size !== 0) {
        let parsedClientListIds = Array.from(parsedClientList.keys());

        parsedClientListIds.forEach(id => {
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
                        </div>`)

                        // Handles the client select button click event
                        .on('click', e => {
                            const target = $(e.target);

                            if (target.hasClass('client-select')) {
                                target.remove();
                                checkUsers();
                                newUserCell(client.username, client.email);
                            }
                            else onForwardBtnClicked(e);
                        })
                );
            }
        })
    }

    checkUsers();
}

/**
 *
 * @param roomList
 */
const onAdminUpdate = roomList => {
    const parsedRoomList = JSONParseMap(roomList);

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

    getAdminAccordionItems(accordionContainer, parsedRoomList, "A");
    getAdminAccordionItems(adminForwardAccordionContainer, parsedRoomList, "F");

    modal2_body.prepend(accordionContainer);
    modal3_body.prepend(adminForwardAccordionContainer);
}

/**
 *
 * @param accordionContainer
 * @param parsedRoomList
 * @param mode
 */
const getAdminAccordionItems = (accordionContainer, parsedRoomList, mode) => {
    adminRooms.forEach(id => {
        let adminList = parsedRoomList.get(id);

        if (adminList !== undefined) {
            localRoomList.set(id, adminList);
            let modeId = mode === "A" ? id : id + '-f';

            const accordionItem = $(`<div class="accordion-item"></div>`);

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

            // For each admin in the list create a field contains a button
            //  - Fills the button with admin id
            //  - Sets the button's click event with a function that sends an invitation or forward request to the admin
            adminList.forEach(admin => {
                if (admin !== socket.id) {
                    accordionItemBody.prepend(
                        $(`
                            <div>
                                <button class="btn btn-outline-success w-100" id="${mode === "A" ? admin : admin + '-f'}">Admin-${admin}</button>
                            </div>`).on('click', () => {
                                if (mode === "A")
                                    socket.emit('requestSent', {to: admin, clientId: selected_client, type: "invite"});
                                else
                                    socket.emit('requestSent', {to: admin, clientId: selected_forward_client, type: "forward"});
                        })
                    );
                }
            });

            if (accordionItemBody.find('button').length === 0) accordionItem.remove();
        }
    });
}

/**
 *
 * @param e
 */
const onForwardBtnClicked = e => {
    const waitListEl = document.getElementById('exampleModal');
    const adminForwardListEl = document.getElementById('adminStaticBackdrop');
    const waitListModal = Modal.getInstance(waitListEl);
    const adminForwardListModal = Modal.getInstance(adminForwardListEl) || new Modal(adminForwardListEl, {backdrop: 'static'});
    if ($(e.target).hasClass('btn')) selected_forward_client = $(e.target).attr('client-id');
    else selected_forward_client = $(e.target).parent('.btn').attr('client-id',);
    waitListModal.hide();
    adminForwardListModal.show();
}

/**
 *
 * @param chatLog
 */
const onChatLogUpdate = chatLog => {
    const chatAreaMain = $('.chat-area-main');

    chatAreaMain.html('');

    chatLog.forEach(message => {
        if (message.from === socket.id) createChatBubble(message.message, 'sender');
        else createChatBubble(message.message, 'receiver');
    })
}

/**
 *
 * @param from
 * @param clientId
 */
const onRequestReceived = ({from, client, type}) => {
    client = JSON.parse(client);
    let description = type === 'invite' ?
        `Admin-${from} invited you to a conversation.` :
        `Admin-${from} forwarded a client to you.`;

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
                    socket.emit('requestAccepted', {to: from, clientId: client.email, type: type});
                    newUserCell(client.username, client.email);
                }
            },
            {
                title: "DECLINE",
                onClick: () => {
                    // Removes the toast notification
                    // Sends the invitation decline
                    toast.remove(idtoast);
                    socket.emit('requestDeclined', {to: from, clientId: client.email, type: type});
                }
            }
        ]
    });
}

/**
 *
 * @param message
 * @returns {*}
 */
const onRequestAccepted = message => processRequestResponse(message, "info");

/**
 *
 * @param message
 * @returns {*}
 */
const onRequestDeclined = message => processRequestResponse(message, "danger");

/**
 *
 * @param sender
 * @param message
 * @param roomId
 */
const onMessage = ({sender, message, roomId}) => {

    if (roomId === selected_client) {
        if (sender === socket.id) {
            createChatBubble(message, 'sender');
            sender = "You";
        }
        else createChatBubble(message, 'receiver');
    }

    $(`#${slugify(selected_client)}`).find('.msg-message').html(`${sender}: ${message.text}`);
}

/**
 *
 * @param id
 */
const onClientDisconnect = id => {
    toast.publish({
        type: "info",
        description: `Client (${id}) has disconnected!`,
        timeout: 8000
    });

    $(`#${id}`).removeClass('online');
}

/**
 *
 * @param e
 */
const onFormSubmit = e => {
    e.preventDefault();

    const input_text = $(e.target).find('input').val();

    socket.emit('message', {from: socket.id, to: selected_client, message: input_text});

    $(e.target).trigger('reset');
}

/**
 * Handles click event on user cell.
 * @param {Event} e Event object
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

    console.log(selected_client);

    socket.emit('clientSwitched', selected_client);

    $('.chat-area-main').html('');
    $('.chat-area-title').html(chat_title);
}

/**
 *
 * @param message
 * @param type
 * @returns {*}
 */
const processRequestResponse = (message, type) => toast.publish({
    type: type,
    description: message.message,
    timeout: 8000
});

/**
 * Checks if there are clients waiting
 */
const checkUsers = () => {
    modal_body.each(function(index) {
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
 * @param username
 * @param client_email The id of the selected client.
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
        </div>`)

    socket.emit('clientSelected', client_email);

    $('.conversation-area').prepend(new_user_cell);

    selected_client = client_email;

    user_cells = $('.msg');

    user_cells.off('click');

    user_cells.on('click', e => userCellClicked(e));

    new_user_cell.trigger('click');
}

/**
 * Creates a chat bubble.
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

    chat_area.scrollTop = chat_area.scrollHeight;
}


// EXTERNAL FUNCTIONS ====================
const { JSONParseMap } = require('../../utils/mapUtitls');

// Slugify a string
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

$(function() {
    onLoad();
})