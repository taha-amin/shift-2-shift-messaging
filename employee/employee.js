import { createMessage, getMessagesByRecipient, sendMessage, checkAuth, getProfile, getMyProfile, incrementRating, decrementRating } from '../fetch-utils.js';

import { renderMessages, renderRating } from '../fetch-utils.js';

const upButton = document.querySelector('.up-vote');
const downButton = document.querySelector('.down-vote');
const ratingContainer = document.querySelector('.rating-container');
const ratingH3 = document.querySelector('.rating');
const voteUpButton = document.querySelector('.up-vote');
const voteDownButton = document.querySelector('.down-vote');
const messagesHeader = document.querySelector('.messages-header');
const messagesDiv = document.querySelector('.messages');
const sendMessageH3 = document.querySelector('.send-message');

const messageContainer = document.querySelector('.message-container');
const profileContainer = document.querySelector('.profile-container');
const usernameHeader = document.querySelector('.username-header');
const usernameEl = document.querySelector('.username');
const params = new URLSearchParams(window.location.search);
const id = params.get(id);


window.addEventListener('load', async ()=>{

    await fetchAndDisplay(); //write this!

});

upButton.addEventListener('click', async ()=>{
    const profile = await incrementRating(profile.id);
    await fetchAndDisplay(profile);

});

downButton.addEventListener('click', async ()=>{
    const profile = await decrementRating(profile.id);
    await fetchAndDisplay(profile);
});

async function fetchAndDisplay(){
    profileContainer.textContent = '';

    const profile = await getProfile(id);
    usernameHeader.textContent = profile.email;
    usernameEl.textContent = profile.email;

    const profileRatingEl = renderRating(profile);
    const messagesEl = renderMessages(profile);

    profileContainer.append(messagesEl, profileRatingEl);

}