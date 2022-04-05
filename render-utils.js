import { formatDate } from "./date-utils.js";

export function renderMessages(profiles) {
    const messagesEl = document.createElement('div');
    const messagesHeader = document.createElement('h3');

    messagesHeader.textContent = `Jobs done by ${profiles.email}`;
    messagesEl.classList.add('messages');
    messagesEl.append(messagesHeader);

    for (let message of profiles.messages) {
        const messageEl = document.createElement('p');
        const fromContainer = document.createElement('p');
        const fromEl = document.createElement('p');
        const atEl = document.createElement('p');
        const textEl = document.createElement('p');

        fromEl.textContent = `${message.from_email}`;
        atEl.textContent = formatDate(message.created_at);
        textEl.textContent = message.text;
        
        fromEl.classList.add('from');
        textEl.classList.add('text');
        atEl.classList.add('at');
        messageEl.classList.add('message');

        fromContainer.append(fromEl, atEl);
        messageEl.append(fromContainer, textEl);
        messagesEl.append(messageEl);
    }
    return messagesEl;
}