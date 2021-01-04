// STYLESHEETS ==========================
import '../stylesheets/index.scss'; // Main stylesheet.
// Font-Awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// LIBRARIES ============================
// JQuery
import $ from 'jquery'

// Socket.io
const socket = io('/Clients'); // Connects to client namespace

// CONSTANTS
const toggleChatBoxBtn = $('.js-chatbox-toggle');
const chatbox =  $('.js-chatbox');
const chatboxMsgDisplay = $('.js-chatbox-display');
const chatboxForm = $('.js-chatbox-form');

// VARIABLES
let chatInitiated = false;

// FUNCTIONS ============================
/**
 * Handles the document loaded event.
 */
const onLoad = () => {
    socket.on('adminConnected', onAdminConnected);

    socket.on('message', onMessage);

    // =================================================================================================================
    toggleChatBoxBtn.one("click", onToggleChatBoxBtnClick);

    toggleChatBoxBtn.on('click', onToggleChatBoxBtnToggled);

    chatboxForm.on('submit', onChatFormSubmit);
    // =================================================================================================================
}

/**
 *
 * @param input
 * @param role
 */
function createChatBubble(input, role) {
    let chat_area = document.querySelector('.js-chatbox-display.chatbox__display');

    $(`<div>
        <p class="chatbox__display-chat-${role === 'sender' ? 'sender' : 'receiver'}">
            ${input}
        </p>
    </div>`).appendTo(chatboxMsgDisplay);

    chat_area.scrollTop = chat_area.scrollHeight;
}

/**
 *
 * @param sender
 * @param message
 */
function onMessage({sender, message}) {
    if (sender === socket.id) createChatBubble(message.text, 'sender');
    else createChatBubble(message.text, 'receiver');
}

/**
 *
 * @param adminId
 */
function onAdminConnected(adminId) {
    socket.emit('adminConnected', adminId);
    let input = chatboxForm.find('input');
    let button = chatboxForm.find('button');

    if (!chatInitiated) {
        chatInitiated = !chatInitiated;

        input.prop('disabled', false);
        button.prop('disabled', false);

        chatboxMsgDisplay.find('p').remove();
    }
}

/**
 *
 */
function onToggleChatBoxBtnClick() {
    let input = chatboxForm.find('input');
    let button = chatboxForm.find('button');
    let clientEmail, clientUsername, clientProblem;

    if (getCookie('email') === "") {
        delay(() => createChatBubble('Chào bạn!'), 800)
            .delay(() => createChatBubble('Trước khi bắt đầu thì cho mình xin một ít thông tin nhé :D'), 1000)
            .delay(() => {
                createChatBubble('Đầu tiên cho mình xin tên của bạn đi.');
                createChatBubble('Vd: Huy, Linh...');

                input.prop('disabled', false);
                button.prop('disabled', false);

                input.trigger('focus');

                chatboxForm.on('submit', e => {
                    e.preventDefault();

                    clientUsername = input.val();
                    createChatBubble(clientUsername, 'sender');
                    setCookie('username', clientUsername, 1);

                    delay(() => createChatBubble(`Tiếp đến là email của ${clientUsername}.`), 800);

                    chatboxForm.trigger('reset');

                    input.attr('type', 'email');

                    chatboxForm.off('submit');

                    chatboxForm.on('submit', e => {
                        e.preventDefault();

                        clientEmail = input.val();
                        createChatBubble(clientEmail, 'sender');
                        setCookie('email', clientEmail, 1);

                        delay(() => createChatBubble(`Vậy hôm nay ${clientUsername} cần hỗ trợ về vấn đề nào?`), 800);

                        chatboxForm.trigger('reset');

                        input.attr('type', 'text');

                        chatboxForm.off('submit');

                        chatboxForm.on('submit', e => {
                            e.preventDefault();

                            clientProblem = input.val();
                            createChatBubble(clientProblem, 'sender');
                            setCookie('problem', clientProblem, 1);

                            input.prop('disabled', true);
                            button.prop('disabled', true);

                            chatboxForm.trigger('reset');

                            socket.emit('requestAssistance', {username: clientUsername, email: clientEmail});

                            delay(() => createChatBubble('Xin chờ một tí để mình kết nối với nhân viên...'), 800)
                                .delay(() => {
                                    chatboxMsgDisplay.html('');
                                    createChatBubble('Xin chờ một tí để mình kết nối với nhân viên...');
                                }, 2000);

                            chatboxForm.on('submit', onChatFormSubmit);
                        });
                    })
                });
            }, 800);
    }
    else {
        delay(() => createChatBubble(`${getCookie('username')} chờ một tí để mình kết nối lại với nhân viên nha :D`), 800)
        socket.emit('requestAssistance', {username: getCookie('username'), email: getCookie('email')});
    }


}

/**
 *
 */
function onToggleChatBoxBtnToggled() {
    chatbox.toggleClass('chatbox--is-visible');
    if(chatbox.hasClass('chatbox--is-visible')) {
        toggleChatBoxBtn.html('<i class="fas fa-chevron-down"></i>');
    } else {
        toggleChatBoxBtn.html('<i class="fas fa-chevron-up"></i>');
    }
}

/**
 *
 * @param e
 */
function onChatFormSubmit(e) {

    e.preventDefault();

    const chatInput = $('.js-chatbox-input').val();

    socket.emit('message', {from: socket.id, to: getCookie('email'), message: chatInput})

    chatboxForm.trigger('reset');
}

/**
 *
 * @param fn
 * @param t
 * @returns {*}
 */
function delay(fn, t) {
    // private instance variables
    let queue = [], self, timer;

    function schedule(fn, t) {
        timer = setTimeout(function() {
            timer = null;
            fn();
            if (queue.length) {
                let item = queue.shift();
                schedule(item.fn, item.t);
            }
        }, t);
    }
    self = {
        delay: function(fn, t) {
            // if already queuing things or running a timer,
            //   then just add to the queue
            if (queue.length || timer) {
                queue.push({fn: fn, t: t});
            } else {
                // no queue or timer yet, so schedule the timer
                schedule(fn, t);
            }
            return self;
        },
        cancel: function() {
            clearTimeout(timer);
            queue = [];
            return self;
        }
    };
    return self.delay(fn, t);
}

// EXTERNAL FUNCTIONS ====================
const { getCookie, setCookie } = require('../../utils/cookies');

$(function() {
    onLoad();
})