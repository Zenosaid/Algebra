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
const gameList = document.querySelector('.game-list');

// Select all the game elements
const games = gameList.querySelectorAll('.game');

// Convert the game elements to an array
const gamesArray = Array.from(games);

// Sort the game elements alphabetically by title
gamesArray.sort((a, b) => {
  const aTitle = a.querySelector('.game-title').textContent.trim().toLowerCase();
  const bTitle = b.querySelector('.game-title').textContent.trim().toLowerCase();
  return aTitle.localeCompare(bTitle);
});

// Remove the game elements from the list
games.forEach(game => game.remove());

// Append the sorted game elements to the list
gamesArray.forEach(game => gameList.appendChild(game));
