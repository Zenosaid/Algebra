// Define the gamesContainer variable at the beginning of your script
const gamesContainer = document.querySelector('.games');
const gameContainer = document.querySelector('.game-container');
// Function to create a game icon based on the game data
function createGameIcon(game) {
  const gameIcon = document.createElement('div');
  gameIcon.className = 'game-container';
  cdn = 'https://gitloaf.com/cdn'
  gameIcon.innerHTML = `
    <img src="${cdn}/Zenosaid/projects/main/${game.root}/${game.img}" onerror="this.src='./assets/globe.svg'"/>
    <p>${game.name}</p>
  `;

  // Add a click event listener to open the game when clicked
  gameIcon.addEventListener('click', () => {
    // Construct the URL for the game using htmlpreview.github.io
    const gameUrl = `http://htmlpreview.github.io/?https://github.com/Zenosaid/projects/blob/main/${game.root}/index.html`;

    // Open the game URL in a new tab/window
    window.open(gameUrl, '_blank');
  });

  return gameIcon;
}


// Fetch the games data from a JSON file
fetch('./Assets/json/games.json')
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
