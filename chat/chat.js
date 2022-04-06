import {
    checkAuth,
    sendChat,
    client,
    getProfile
} from '../fetch-utils.js';

checkAuth();

const allChatsEl = document.querySelector('.all-chats');
const formEl = document.querySelector('form');

formEl.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(formEl);

    await sendChat(data.get('message'));

    formEl.reset();
});

window.addEventListener('load', async () => {
    await client
        .from('chats')
        .on('INSERT', (payload) => {
            const currentUser = getProfile();

            const chatItemOuterEl = document.createElement('div');
            const chatMessageEl = document.createElement('p');
            const chatSenderEl = document.createElement('p');

            chatSenderEl.classList.add('sender');

            if (payload.new.sender_email === currentUser.email) {
                chatSenderEl.classList.add('is-me');
            }

            chatItemOuterEl.classList.add('chat-message');

            chatSenderEl.textContent = payload.new.sender_email;
            chatMessageEl.textContent = payload.new.text;

            //append to the DOM
            chatItemOuterEl.append(chatMessageEl, chatSenderEl);
            allChatsEl.append(chatItemOuterEl);
        });
});