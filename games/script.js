// Select the elements
const gamesContainer = document.querySelector('.games');
const searchBar = document.querySelector('.search-bar');
const gameDetailContainer = document.querySelector('.game-detail');

const cdn = 'https://gitloaf.com/cdn'; // Your CDN URL

// Function to create a game container based on game data
function createGameContainer(game) {
    const gameContainer = document.createElement('div');
    gameContainer.className = 'game-container';
    
    // Create the game content
    const gameContent = document.createElement('div');
    gameContent.innerHTML = `
        <img src="${cdn}/${game.root}/${game.img}" onerror="this.src='./assets/globe.svg'"/>
        <p>${game.name}</p>
    `;

    // Add a click event listener to open the game details when clicked
    gameContainer.addEventListener('click', () => {
        // Clear existing game details
        gameDetailContainer.innerHTML = '';

        // Create an iframe for the game
        const gameIframe = document.createElement('iframe');
        gameIframe.src = `./assets/game?game=${game.root}`;

        // Add the iframe to the game detail container
        gameDetailContainer.appendChild(gameIframe);

        // Show the game detail container
        gameDetailContainer.style.display = 'block';
    });

    // Add the game content to the game container
    gameContainer.appendChild(gameContent);

    return gameContainer;
}

// Fetch the games data from the JSON file
fetch('./Assets/json/games.json')
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
