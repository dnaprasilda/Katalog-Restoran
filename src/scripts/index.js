import 'regenerator-runtime';
import '../styles/main.css';

// Fetch data json
import('../public/data/DATA.json').then(({ default: jsonData }) => {
    const restaurantData = jsonData.restaurants;
    const restaurantListHTML = restaurantData.map(restaurant => `
        <div class="restaurant-item">
            <img class="restaurant-thumb" src="${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
            <div class="restaurant-location">${restaurant.city}</div>
            <div class="restaurant-info">
                <p class="restaurant-rating">
                    Rating: 
                    <a href="#" class="rating-value">${restaurant.rating}</a>
                </p>
                <h1 class="restaurant-name"><a href="#">${restaurant.name}</a></h1>
                <div class="restaurant-description">${restaurant.description.slice(0, 150)}...</div>
            </div>
        </div>
    `).join('');

    document.querySelector('#restaurantContainer').innerHTML = restaurantListHTML;
});

// Menu
const mobileNavToggle = document.querySelector('#mobileNavToggle');
const jumbotron = document.querySelector('.jumbotron');
const mainContent = document.querySelector('main');
const mobileDrawer = document.querySelector('#mobileDrawer');

mobileNavToggle.addEventListener('click', event => {
    mobileDrawer.classList.toggle('open');
    event.stopPropagation();
});

jumbotron.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
});

mainContent.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
});
