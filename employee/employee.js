import { createMessage, getMessagesByRecipient, sendMessage, checkAuth, getProfile, getMyProfile, incrementRating, decrementRating } from '../fetch-utils.js';

import { renderMessages } from '../fetch-utils.js';

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
    
}