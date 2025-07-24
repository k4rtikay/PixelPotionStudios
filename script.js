import { bugData, spotlights } from "./util.js";

let currentSpotlightIndex = 0;


const spotlightImage = document.getElementById('spotlightImage');
const spotlightCaption = document.getElementById('spotlightCaption');
const spotlightDescription = document.getElementById('spotlightDescription');
const prevButton = document.getElementById('prevSpotlight');
const nextButton = document.getElementById('nextSpotlight');

function updateSpotlight() {
  const currentSpotlight = spotlights[currentSpotlightIndex];
  spotlightImage.src = currentSpotlight.image;
  spotlightCaption.textContent = currentSpotlight.caption;
  spotlightDescription.textContent = currentSpotlight.description;
}

nextButton.addEventListener('click', () => {
  currentSpotlightIndex = (currentSpotlightIndex + 1) % spotlights.length; // Loop to the start
  updateSpotlight();
});

prevButton.addEventListener('click', () => {
  currentSpotlightIndex = (currentSpotlightIndex - 1 + spotlights.length) % spotlights.length; // Loop to the end
  updateSpotlight();
});

// Initialize the first spotlight
updateSpotlight();