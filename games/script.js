// Horizontal scrolling for featured game icons
const featuredSection = document.querySelector('.featured');

function scrollFeatured() {
    featuredSection.scrollLeft += 2; // Increase the value to control the speed of scrolling
}

setInterval(scrollFeatured, 30); // Adjust the interval for smoother/faster scrolling

// You can add event listeners and implement other functionalities as needed
