document.querySelectorAll('div.category').forEach(categoryDiv => {
  categoryDiv.addEventListener('mouseover', function(event) {
      let gameTitle = this.getAttribute('data-game-title'); // assuming you have data-game-title attribute specifying the name of the game
      alert(`You are hovering over: ${gameTitle}`);})})
let games = document.querySelectorAll('.game');

games.forEach(game => {
    game.addEventListener('mouseenter', e => {
        let title = game.querySelector('.game-title');
        title.style.display = 'block';
    });
    game.addEventListener('mouseleave', e => {
        let title = game.querySelector('.game-title');
        title.style.display = 'none';
    });
}); 