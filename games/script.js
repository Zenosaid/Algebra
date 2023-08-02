// Sample data for game icons
const featuredGames = [
  { name: "Game 1", imgSrc: "game1.jpg", link: "https://game1.com" },
  { name: "Game 2", imgSrc: "game2.jpg", link: "https://game2.com" },
  // Add more featured games here
];

const actionGames = [
  { name: "Action Game 1", imgSrc: "action_game1.jpg", link: "https://actiongame1.com" },
  { name: "Action Game 2", imgSrc: "action_game2.jpg", link: "https://actiongame2.com" },
  // Add more action games here
];

const casualGames = [
  { name: "Casual Game 1", imgSrc: "casual_game1.jpg", link: "https://casualgame1.com" },
  { name: "Casual Game 2", imgSrc: "casual_game2.jpg", link: "https://casualgame2.com" },
  // Add more casual games here
];

// Function to add game icons to a container
function addGameIcons(container, games) {
  games.forEach((game) => {
    const gameIcon = document.createElement("div");
    gameIcon.classList.add("game-icon");
    gameIcon.innerHTML = `
      <a href="${game.link}" target="_blank">
        <img src="${game.imgSrc}" alt="${game.name}">
      </a>
      <div class="game-name">${game.name}</div>
    `;
    container.appendChild(gameIcon);
  });
}

// Add featured games to the featured-games-container
const featuredContainer = document.querySelector(".featured-games-container");
addGameIcons(featuredContainer, featuredGames);

// Add action games to the action-games-container
const actionContainer = document.querySelector(".genre-games-container:nth-of-type(1)");
addGameIcons(actionContainer, actionGames);

// Add casual games to the casual-games-container
const casualContainer = document.querySelector(".genre-games-container:nth-of-type(2)");
addGameIcons(casualContainer, casualGames);

// You can add other genres in a similar way

