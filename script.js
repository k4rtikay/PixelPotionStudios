import { bugData, spotlights } from "./util.js";

let currentSpotlightIndex = 0;


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
});

//staggering slide in animation for the cards
document.addEventListener('DOMContentLoaded',()=>{
    const cards = document.querySelectorAll('.contentCard');
    cards.forEach((card,index)=>{
        card.style.setProperty('--i',index);
    })
})