// Select the elements
const gamesContainer = document.querySelector('.games');
const searchBar = document.querySelector('.searchbar');
const gameContainer = document.querySelector('.gamecontainer');
const gameFrame = gameContainer.querySelector('.frame');
const gameNav = gameContainer.querySelector('.nav');

// Define your GitHub username and repo base URL
const githubUsername = 'Zenosaid'; // Replace with your GitHub username
const githubRepoBaseUrl = 'https://github.com/' + githubUsername + '/projects/blob/main/'; // Replace 'yourrepo' with your repository name

// Function to create a game icon based on the game data
function createGameIcon(game) {
  const gameIcon = document.createElement('div');
  gameIcon.className = 'game-container';
  gameIcon.innerHTML = `
    <img src="${cdn}/Zenosaid/projects/${game.root}/${game.img}" onerror="this.src='./assets/globe.svg'"/>
    <p>${game.name}</p>
  `;
  
  // Add a click event listener to open the game when clicked
  gameIcon.addEventListener('click', () => {
    gamesContainer.classList.add('hidden');
    searchBar.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    document.querySelector('.saveItems').classList.add('hidden');
    document.querySelector('.navbar').classList.add('noshadow');

    // Construct the GitHub preview URL for the game's index.html
    const githubPreviewBaseUrl = 'http://htmlpreview.github.io/?';
    const gameRoot = game.root;
    const githubPreviewUrl = `${githubPreviewBaseUrl}${githubRepoBaseUrl}/${gameRoot}/index.html`;

    // Set the src attribute of the iframe to the GitHub preview URL
    gameFrame.querySelector('iframe').src = githubPreviewUrl;

    gameNav.querySelector('span').textContent = game.name;
  });

  return gameIcon;
}

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

// Rest of your existing code for search and other functionality...
