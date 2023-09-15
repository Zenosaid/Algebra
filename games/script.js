console.log("Zenosaid's game website - You can fork, just leave credit!");
var d = new Date (Date.now());
var month = d.getMonth();
var day = d.getDate();
if(month == 3 && day == 1){
  window.location.href = "/games/a68727ceae02c159bef14f717f0eb5d6.mp4";
}

 window.onload = function() {
    const gameContainerList = document.querySelectorAll('.game-container');
    const gameContainerContainer = document.querySelector('.game-container-container');
    const searchInput = document.querySelector('#search-input');

    function updateResults() {
      const searchTerm = searchInput.value.toLowerCase();
      let totalWidth = 0;
      gameContainerList.forEach(container => {
        const gameName = container.querySelector('p').textContent.toLowerCase();
        if (gameName.includes(searchTerm)) {
          container.style.display = 'inline-block';
          totalWidth += container.offsetWidth;
        } else {
          container.style.display = 'none';
        }
      });
     
      if (gameContainerContainer) {
  gameContainerContainer.style.width = totalWidth + 'px';
}
    }
    searchInput.addEventListener('input', updateResults);
  };
// Get all the game containers
const gameContainers = document.querySelectorAll('.game-container');

// Convert to array and sort alphabetically
const sortedContainers = Array.from(gameContainers).sort((a, b) => {
  const gameA = a.querySelector('p').textContent;
  const gameB = b.querySelector('p').textContent;
  return gameA.localeCompare(gameB);
});

// Clear out current game containers
const main = document.querySelector('main');
main.innerHTML = '';

// Append sorted game containers to the main element
sortedContainers.forEach(container => main.appendChild(container));

// Get a reference to the iframe element
const gameIframe = document.getElementById('game-iframe');

// Function to open a game in the iframe
function openGame(gameURL) {
    // Set the iframe's src to the selected game's URL
    gameIframe.src = gameURL;

    // Show the iframe
    gameIframe.style.display = 'block';

    // Scroll to the top of the iframe for better user experience
    window.scrollTo(0, gameIframe.offsetTop);
}

// Function to close the iframe
function closeGame() {
    // Clear the iframe's src
    gameIframe.src = 'about:blank';

    // Hide the iframe
    gameIframe.style.display = 'none';
}

