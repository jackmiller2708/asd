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
const load = () => {
    socket.on('adminConnected', adminId => {
        socket.emit('adminConnected', adminId);

        if (!chatInitiated) {
            chatInitiated = !chatInitiated;

            chatboxMsgDisplay.find('p').remove();
            chatboxForm.find('input').prop('disabled', false);
            chatboxForm.find('button').prop('disabled', false);
        }
    })

    socket.on('message', ({sender, message}) => {
        if (sender === socket.id) createChatBubble(message.text, 'sender');
        else createChatBubble(message.text, 'receiver');
    })

    // =================================================================================================================
    toggleChatBoxBtn.one("click", () => {
        socket.emit('requestAssistance');

        setTimeout(() => {
            createChatBubble('Please wait a moment...', 'receiver');
        }, 800);
    });

    toggleChatBoxBtn.click(() => {
        chatbox.toggleClass('chatbox--is-visible');
        if(chatbox.hasClass('chatbox--is-visible')) {
            toggleChatBoxBtn.html('<i class="fas fa-chevron-down"></i>');
        } else {
            toggleChatBoxBtn.html('<i class="fas fa-chevron-up"></i>');
        }
    });

    chatboxForm.submit(e => {
        e.preventDefault();
        const chatInput = $('.js-chatbox-input').val();
        socket.emit('message', {from: socket.id, to: socket.id, message: chatInput})

        chatboxForm.trigger('reset');
    });
    // =================================================================================================================
}

const createChatBubble = (input, role) => {
    let chat_area = document.querySelector('.js-chatbox-display.chatbox__display');

    $(`<div>
        <p class="chatbox__display-chat-${role === 'sender' ? 'sender' : 'receiver'}">
            ${input}
        </p>   
    </div>`).appendTo(chatboxMsgDisplay);

    chat_area.scrollTop = chat_area.scrollHeight;
}



$(document).on('load', load());