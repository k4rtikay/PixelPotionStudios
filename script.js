import { bugData, spotlights } from "./util.js";

let currentSpotlightIndex = 0;
let dark=false;


const spotlightImage = document.getElementById('spotlightImage');
const spotlightCaption = document.getElementById('spotlightCaption');
const spotlightDescription = document.getElementById('spotlightDescription');
const prevButton = document.getElementById('prevSpotlight');
const nextButton = document.getElementById('nextSpotlight');

function updateSpotlight() {
    spotlightImage.style.opacity='0';
    spotlightImage.style.transform='scale(0.95)';


    setTimeout(() => {
        const currentSpotlight = spotlights[currentSpotlightIndex];
        spotlightImage.src = currentSpotlight.image;
        spotlightCaption.textContent = currentSpotlight.caption;
        spotlightDescription.textContent = currentSpotlight.description;

        spotlightImage.style.opacity = '1';
        spotlightImage.style.transform='scale(1)';
    }, 300);
}

nextButton.addEventListener('click', () => {
    currentSpotlightIndex = (currentSpotlightIndex + 1) % spotlights.length; // Loop to the start
    updateSpotlight();
});

prevButton.addEventListener('click', () => {
    spotlightImage.classList.add('slideOut')
    currentSpotlightIndex = (currentSpotlightIndex - 1 + spotlights.length) % spotlights.length; // Loop to the end
    updateSpotlight();
});

// Initialize the first spotlight
updateSpotlight();

//update bug tracker

const totalBugs = bugData.open + bugData.inProgress + bugData.closed;

function updateBugTracker() {
  // Update Open bugs
    setTimeout(()=>{
        document.getElementById('openCount').textContent = bugData.open;
        const openPercent = (bugData.open / totalBugs) * 100;
        document.querySelector('.open').style.width = openPercent + '%';

        // Update In Progress bugs
        document.getElementById('inProgressCount').textContent = bugData.inProgress;
        const progressPercent = (bugData.inProgress / totalBugs) * 100;
        document.querySelector('.inProgress').style.width = progressPercent + '%';

        // Update Fixed bugs
        document.getElementById('closedCount').textContent = bugData.closed;
        const fixedPercent = (bugData.closed / totalBugs) * 100;
        document.querySelector('.closed').style.width = fixedPercent + '%';
    },500);

}

document.addEventListener('DOMContentLoaded', updateBugTracker); //display data when the page loads

//dark mode toggle
document.querySelector('#switchTheme').addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('dark');
    if(dark){
        document.querySelector('#switchTheme').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
        </svg>`
    }else{
        document.querySelector('#switchTheme').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>`
    }
    dark=!dark
});

//staggering slide in animation for the cards
document.addEventListener('DOMContentLoaded',()=>{
    const cards = document.querySelectorAll('.contentCard');
    cards.forEach((card,index)=>{
        card.style.setProperty('--i',index);
    })
})