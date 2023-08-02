const featuredGamesContainer = document.querySelector('.featured-games-container');
const genresContainer = document.querySelector('.genres-container');

// Replace these game icons and names with your actual data
const featuredGames = [
    { name: 'Game 1', iconUrl: 'path_to_game_icon_1.png' },
    { name: 'Game 2', iconUrl: 'path_to_game_icon_2.png' },
    // Add more featured games here
];

const genres = [
    { genre: 'Action', games: [
        { name: 'Action Game 1', iconUrl: 'path_to_action_game_icon_1.png' },
        { name: 'Action Game 2', iconUrl: 'path_to_action_game_icon_2.png' },
        // Add more action games here
    ]},
    // Add more genres and games here
];

// Function to create a game icon
function createGameIcon(game) {
    const gameIcon = document.createElement('div');
    gameIcon.classList.add('game-icon');
    gameIcon.innerHTML = `
        <img src="${game.iconUrl}" alt="${game.name}">
        <span>${game.name}</span>
    `;
    return gameIcon;
}

// Function to create genre row with game icons
function createGenreRow(genreData) {
    const genreRow = document.createElement('div');
    genreRow.classList.add('genre-row');

    genreData.games.forEach((game) => {
        const gameIcon = createGameIcon(game);
        genreRow.appendChild(gameIcon);
    });

    if (genreData.games.length > 4) {
        const viewMoreButton = document.createElement('div');
        viewMoreButton.classList.add('view-more');
        viewMoreButton.innerText = 'View More';
        viewMoreButton.addEventListener('click', () => {
            // Handle "View More" button click to show all game icons in the genre
            alert('View more games of genre: ' + genreData.genre);
        });

        genreRow.appendChild(viewMoreButton);
    }

    return genreRow;
}

// Populate featured games
featuredGames.forEach((game) => {
    const gameIcon = createGameIcon(game);
    featuredGamesContainer.appendChild(gameIcon);
});

// Populate genres
genres.forEach((genreData) => {
    const genreRow = createGenreRow(genreData);
    genresContainer.appendChild(genreRow);
});

// Automatically scroll featured games horizontally
const scrollAmount = 1; // Adjust the scrolling speed as needed
let scrollPosition = 0;

function scrollFeaturedGames() {
    scrollPosition += scrollAmount;
    featuredGamesContainer.scrollLeft = scrollPosition;

    if (scrollPosition >= featuredGamesContainer.scrollWidth) {
        scrollPosition = 0;
    }
}

setInterval(scrollFeaturedGames, 50); // Adjust the scrolling interval as needed
