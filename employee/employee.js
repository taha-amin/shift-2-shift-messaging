import { createMessage, getMessagesByRecipient, sendMessage, checkAuth, getProfile, getMyProfile, incrementRating, decrementRating } from '../fetch-utils.js';

import { renderMessages } from '../fetch-utils.js';

const upButton = document.querySelector('.up-vote');
const downButton = document.querySelector('.down-vote');



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