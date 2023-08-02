const gameIconsContainer = document.querySelector(".featured-icons");

// Clone the first child of the gameIconsContainer
const cloneFirstChild = gameIconsContainer.firstElementChild.cloneNode(true);

// Append the cloned first child to the end of the container
gameIconsContainer.appendChild(cloneFirstChild);
