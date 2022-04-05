import { getUser, sendMessage, checkAuth, getProfile, incrementRating, decrementRating } from '../fetch-utils.js';

import { renderMessages, renderRating } from '../render-utils.js';

checkAuth();
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const upButton = document.querySelector('.up-vote');
const downButton = document.querySelector('.down-vote');
const ratingContainer = document.querySelector('.rating-container');
const ratingH3 = document.querySelector('.rating');
const voteUpButton = document.querySelector('.up-vote');
const voteDownButton = document.querySelector('.down-vote');
const messagesHeader = document.querySelector('.messages-header');
const messagesDiv = document.querySelector('.messages');
const sendMessageH3 = document.querySelector('.send-message');
const return2ProfilesButton = document.getElementById('back-to-profiles');

const messageContainer = document.querySelector('.message-container');
const profileContainer = document.querySelector('.profile-container');
const usernameHeader = document.querySelector('.username-header');
const usernameEl = document.querySelector('.username');
const form = document.querySelector('form');

window.addEventListener('load', async ()=>{

    await fetchAndDisplay(); //write this!

});

return2ProfilesButton.addEventListener('click', ()=>{
    window.location.href = '../employees';
});

upButton.addEventListener('click', async ()=>{
    const profile = await incrementRating(profile.id);
    await fetchAndDisplay(profile);

});

downButton.addEventListener('click', async ()=>{
    const profile = await decrementRating(profile.id);
    await fetchAndDisplay(profile);
});

export async function fetchAndDisplay(){
    profileContainer.textContent = '';

    const profile = await getProfile(id);
    usernameHeader.textContent = profile.email;
    usernameEl.textContent = profile.email;

    const profileRatingEl = renderRating(profile);
    const messagesEl = renderMessages(profile);

    profileContainer.append(messagesEl, profileRatingEl);

}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const fromUser = await getUser();

    await sendMessage({
        text: data.get('text'),
        from_email: fromUser.email,
        recipient_id: id,

    });

    form.reset();

    await fetchAndDisplay();

});