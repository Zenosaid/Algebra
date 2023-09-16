// Select the elements
const gamesContainer = document.querySelector('.games');
const searchBar = document.querySelector('.searchbar');
const gameContainer = document.querySelector('.gamecontainer');
const gameFrame = gameContainer.querySelector('.frame');
const gameNav = gameContainer.querySelector('.nav');

// Define the CDN base URL (if applicable)
const cdn = 'https://htmlpreview.github.io/?'; // Update with your CDN URL

// Function to create a game icon element
function createGameIcon(game) {
  const gameEl = document.createElement('div');
  gameEl.className = 'game-container';
  gameEl.innerHTML = `
    <img src="${cdn}${game.root}/${game.img}" onerror="this.src='./assets/globe.svg'"/>
    <p>${game.name}</p>
  `;
  gameEl.addEventListener('click', () => {
    playGame(game);
  });
  return gameEl;
}

// Function to play a game when a game icon is clicked
function playGame(game) {
  gamesContainer.classList.add('hidden');
  searchBar.classList.add('hidden');
  gameContainer.classList.remove('hidden');
  document.querySelector('.saveItems').classList.add('hidden');
  document.querySelector('.navbar').classList.add('noshadow');
  gameFrame.querySelector('iframe').src = `./assets/game?game=${game.root}`;
  gameNav.querySelector('span').textContent = game.name;
}

// Listen for input event on the search bar
searchBar.addEventListener('input', (e) => {
  const query = searchBar.value.trim().toLowerCase();

  // Loop through all the game icons and show/hide them based on the search query
  const gameIcons = document.querySelectorAll('.game-container');
  gameIcons.forEach((gameIcon) => {
    const gameName = gameIcon.querySelector('p').textContent.trim().toLowerCase();
    if (query) {
      if (gameName.includes(query)) {
        gameIcon.style.display = 'inline-block';
      } else {
        gameIcon.style.display = 'none';
      }
    } else {
      gameIcon.style.display = 'inline-block';
    }
  });

  // Show/hide the "No games" message based on whether any games match the search query
  const noGamesMessage = document.querySelector('.nogames');
  if (document.querySelectorAll('.game-container[style="display: inline-block;"]').length === 0) {
    noGamesMessage.style.display = 'initial';
  } else {
    noGamesMessage.style.display = 'none';
  }
});

// Fetch the games data from a JSON file
// Fetch the games data from a JSON file
fetch('./assets/json/games.json')
  .then((res) => res.json())
  .then((games) => {
    // Loop through each game and create a new game icon for it
    games.forEach((game) => {
      const gameIcon = createGameIcon(game);
      gamesContainer.appendChild(gameIcon);
    });
  })
  .catch((e) => {
    alert('Could not load games');
    alert(e);
  });


// Hide the spinner element after the page is loaded
document.querySelector('.spinner').style.display = 'none';

// Rest of your code for saving/loading user data, key sequence handling, etc.
