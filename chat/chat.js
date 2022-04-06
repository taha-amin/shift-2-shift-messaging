import {
    checkAuth,
    sendChat,
    client,
    getUser,
} from '../fetch-utils.js';

checkAuth();

const allChatsEl = document.getElementById('all-chats');
const formEl = document.querySelector('form');

const allEmployeesButton = document.getElementById('back-to-profiles');

allEmployeesButton.addEventListener('click', () => {
    window.location.href = '../employees';
});

formEl.addEventListener('submit', async e => {
    e.preventDefault();

    const data = new FormData(formEl);

    await sendChat({
        text: data.get('message'),
        sender_email: currentUser.email,
        user_id: currentUser.id
    });

    formEl.reset();
});

const currentUser = getUser();

window.addEventListener('load', async () => {
    await client
        .from('chats')
        .on('INSERT', payload => {
            const currentUser = getUser();

            const chatItemOuterEl = document.createElement('div');
            const chatMessageEl = document.createElement('p');
            const chatSenderEl = document.createElement('p');

            chatSenderEl.addEventListener('click', async () => {
                window.location.href = `../employee/?id=${getUser.id}`;
            });

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
        })
        .subscribe();
});