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
import 'bootstrap';

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


// FUNCTIONS ============================
/**
 * Handles the document loaded event.
 */
const onLoad = () => {

    let rand = getRandomInt(2);

    socket.emit('adminLoggedOn', adminRooms[rand]);

    console.log('Joined Room', adminRooms[rand]);

    socket.on('roomListUpdate', roomList => {
        const parsedRoomList = JSONParseMap(roomList);

        adminRooms.forEach(id => {
           let admins = parsedRoomList.get(id);
           if (admins !== undefined) console.log(id, admins);
        });
    });

    // List of events
    socket.on('clientUpdate', onClientUpdate);

    socket.on('adminUpdate', onAdminUpdate);

    socket.on('chatLogUpdate', onChatLogUpdate);

    socket.on('inviteReceived', onInviteReceived);

    socket.on('inviteAccepted', onInviteAccepted);

    socket.on('inviteDeclined', onInviteDeclined);

    socket.on('message', onMessage);

    socket.on('clientDisconnect', onClientDisconnect);

    // =================================================================================================================

    // Sets active once a user cell is clicked
    user_cells.click(userCellClicked);

    $('.chat-area-footer form').submit(onFormSubmit)

    checkUsers();
}

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
    if (parsedClientList.size !== 0) {
        let parsedClientListIds = Array.from(parsedClientList.keys());

        // Selects the client list container
        let modal1_body = $('#exampleModal').find('.modal-body');

        // Resets it
        modal1_body.html('');

        parsedClientListIds.forEach(id => {
            let client = parsedClientList.get(id);

            if (client.state === 'waiting') {
                modal1_body.prepend(
                    $(`<div>
                            <button class="btn btn-outline-success w-80" id="${id}">Client-${id}</button>
                            <button class="btn btn-outline-success w-20" id="${id}"><i class="fas fa-forward"></i></button>
                        </div>`)

                        // Handles the client select button click event
                        .click(e => {
                            $(e.target).remove();
                            checkUsers();
                            newUserCell(id);
                        })
                );
            }
        })
    }

    checkUsers();
}

/**
 *
 * @param adminList
 */
const onAdminUpdate = adminList => {
    // Selects the admin list container
    let modal2_body = $('#staticBackdrop').find('.modal-body');

    // Resets it
    modal2_body.html('');

    // For each admin in the list create a field contains a button
    //  - Fills the button with admin id
    //  - Sets the button's click event with a function that sends an invitation to the admin
    adminList.forEach(admin => {
        if (admin !== socket.id) {
            modal2_body.prepend(
                $(`<div>
                        <button class="btn btn-outline-success w-100" id="${admin}">Admin-${admin}</button>
                    </div>`).click(() => {
                    socket.emit('inviteSent', {from: socket.id, to: admin, clientId: selected_client});
                })
            );
        }
    })
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
const onInviteReceived = ({from, clientId}) => {
    // Publish a toast notification
    let idtoast = toast.publish({
        type: "info",
        description: `Admin-${from} invited you to a conversation`,
        timeout: 0,
        actions: [
            {
                title: "ACCEPT",
                onClick: () => {
                    // Removes the toast notification
                    // Sends the confirmation
                    // Creates a new user cell
                    toast.remove(idtoast);
                    socket.emit('inviteAccepted', {to: from, clientId: clientId});
                    newUserCell(clientId);
                }
            },
            {
                title: "DECLINE",
                onClick: () => {
                    // Removes the toast notification
                    // Sends the invitation decline
                    toast.remove(idtoast);
                    socket.emit('inviteDeclined', {to: from, clientId: clientId});
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
const onInviteAccepted = message => processInviteResponse(message, "info");

/**
 *
 * @param message
 * @returns {*}
 */
const onInviteDeclined = message => processInviteResponse(message, "danger");

/**
 *
 * @param sender
 * @param message
 * @param roomId
 */
const onMessage = ({sender, message, roomId}) => {
    if (roomId === selected_client) {
        if (sender === socket.id) createChatBubble(message, 'sender');
        else createChatBubble(message, 'receiver');
    }
}

/**
 *
 * @param id
 */
const onClientDisconnect = id => {
    toast.publish({
        type: "info",
        description: `Client-${id} has disconnected!`,
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
        selected_client = e.target.id;
    }
    else {
        event_target = user_cells.has($(e.target))
        event_target.addClass('active');
        chat_title = event_target.find('.msg-username').html();
        selected_client = event_target.prop('id');
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
const processInviteResponse = (message, type) => toast.publish({
    type: type,
    description: message,
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
 * @param client_id The id of the selected client.
 */
const newUserCell = client_id => {
    const new_user_cell =
        $(`<div class="msg online" id="${client_id}">
                                        <img class="msg-profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="">
                                        <div class="msg-detail">
                                            <div class="msg-username">Client-${client_id}</div>
                                            <div class="msg-content">
                                                <span class="msg-message">What time was our meet</span>
                                                <span class="msg-date">20m</span>
                                            </div>
                                        </div>
                                    </div>`)

    socket.emit('clientSelected', client_id);

    $('.conversation-area').prepend(new_user_cell);

    selected_client = client_id;

    user_cells = $('.msg');

    user_cells.off('click');

    user_cells.click(e => userCellClicked(e));

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
                    <img class="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="">
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
                    <img class="chat-msg-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png" alt="">
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


$(document).ready(onLoad);