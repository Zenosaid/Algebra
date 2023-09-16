// Select the elements
const gamesContainer = document.querySelector('.games');
const searchBar = document.querySelector('#search');
const gameContainer = document.querySelector('.game-detail');
const gameFrame = gameContainer.querySelector('.frame');

// Define your CDN base URL
const cdn = 'https://gitloaf.com/cdn';

// Function to create a game container based on game data
function createGameContainer(game) {
  const gameContainer = document.createElement('div');
  gameContainer.className = 'game-container';
  gameContainer.innerHTML = `
    <img src="${cdn}/${game.root}/${game.img}" onerror="this.src='./assets/globe.svg'"/>
    <p>${game.name}</p>
  `;

  // Add a click event listener to open the game when clicked
  gameContainer.addEventListener('click', () => {
    gamesContainer.classList.add('hidden');
    searchBar.classList.add('hidden');
    gameFrame.querySelector('iframe').src = `./assets/game?game=${game.root}`;
  });

  return gameContainer;
}

// Fetch the games data from a JSON file
fetch('./assets/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game container for it
    games.forEach((game) => {
      const gameContainer = createGameContainer(game);
      gamesContainer.appendChild(gameContainer);
    });
  })
  .catch((e) => {
    alert('Could not load games');
    alert(e);
  });

// Rest of your existing code for search and other functionality...
