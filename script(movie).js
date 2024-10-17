const movies = [ 
    { title: 'Batman Begins', releaseDate: 2005, image: '../P/Batman Begins.jpg', link: 'movieruls(movie).html' }, 
    { title: 'The Dark Knight', releaseDate: 2008, image: '../P/The Dark Knight.jpg', link: '../Dc2/movieruls(movie).html' },
    { title: 'Green Lantern', releaseDate: 2012, image: '../P/Green Lantern.jpeg', link: '../Dc3/movieruls(movie).html' },
    { title: 'The Dark Knight Rises', releaseDate: 2011, image: '../P/The Dark Knight Rises.jpeg', link: '../Dc4/movieruls(movie).html' },
    { title: 'Man of Steel', releaseDate: 2013, image: '../P/Man of Steel.jpg', link: '../Dc5/movieruls(movie).html' }, 
    { title: 'Batman v Superman: Dawn of Justice', releaseDate: 2016, image: '../P/BVS.jpg', link: '../Dc6/movieruls(movie).html' }, 
    { title: 'Suicide Squad', releaseDate: 2016, image: '../P/Suicide squad.jpg', link: '../Dc7/movieruls(movie).html' }, 
    { title: 'Wonder Woman', releaseDate: 2017, image: '../P/Wonder Woman.jpg', link: '../Dc8/movieruls(movie).html' }, 
    { title: 'Justice League', releaseDate: 2017, image: '../P/Justice League.jpg', link: '../Dc9/movieruls(movie).html' }, 
    { title: 'Aquaman', releaseDate: 2018, image: '../P/Aquaman.jpg', link: '../Dc10/movieruls(movie).html' }, 
    { title: 'Shazam!', releaseDate: 2019, image: '../P/Shazam!.jpg', link: '../Dc11/movieruls(movie).html' }, 
    { title: 'Joker', releaseDate: 2019, image: '../P/joker.jpg', link: '../Dc12/movieruls(movie).html' }, 
    { title: 'Birds of Prey', releaseDate: 2020, image: '../P/Birds of Prey.webp', link: '../Dc13/movieruls(movie).html' }, 
    { title: 'Wonder Woman 1984', releaseDate: 2020, image: '../P/Wonder Woman2.jpg', link: '../Dc14/movieruls(movie).html' }, 
    { title: 'Zack Snyder\'s Justice League', releaseDate: 2021, image: '../P/Justice League1.jpg', link: '../Dc15/movieruls(movie).html' }, 
    { title: 'The Suicide Squad', releaseDate: 2021, image: '../P/Suicide squad.jpg', link: '../Dc16/movieruls(movie).html' }, 
    { title: 'The Batman', releaseDate: 2022, image: '../P/The Batman.jpg', link: '../Dc17/movieruls(movie).html' }, 
    { title: 'Black Adam', releaseDate: 2022, image: '../P/Black Adam.jpg', link: '../Dc18/movieruls(movie).html' },
    { title: 'Shazam! Fury of the Gods', releaseDate: 2023, image: '../P/Shazam!2.jpg', link: '../Dc19/movieruls(movie).html' },
    { title: 'The Flash', releaseDate: 2023, image: '../P/The flash.jpg', link: '../Dc20/movieruls(movie).html' },
    { title: 'Blue Beetle', releaseDate: 2023, image: '../P/blue Beetle.jpg', link: '../Dc21/movieruls(movie).html' },
    { title: 'Aquaman and the Lost Kingdom', releaseDate: 2023, image: '../P/Aquaman2.jpg', link: '../Dc22/movieruls(movie).html' },
];




const colors = ['white']; // Different colors for movie titles

let currentPage = 1;
const moviesPerPage = 24;

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        displayMovies(); // Display the existing featured movies
        displayTopRatedMovies(); // Display the top-rated movies in the first section
        displayTopRatedMovies2(); // Display the top-rated movies in the second section
        
    }, 2000); // Simulates 2 seconds of loading time
};

function displayMovies() {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear the grid
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const currentMovies = movies.slice(startIndex, endIndex);

    currentMovies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3 style="color: ${colors[index % colors.length]}">${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        movieGrid.appendChild(movieCard);
    });
    updateHorizontalScroll('movieGrid');
}


function updateHorizontalScroll(gridId) {
    const grid = document.getElementById(gridId);
    grid.style.display = 'flex';
    grid.style.overflowX = 'auto';
    grid.style.scrollSnapType = 'x mandatory';

    const cards = grid.querySelectorAll('.movie-card');
    cards.forEach(card => {
        card.style.flex = '0 0 auto';
        card.style.scrollSnapAlign = 'start';
    });
}


// Function to filter and display movies
// Function to filter and display movies
function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear the grid

    // Filtering movies based on search input
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));

    // Displaying filtered movies
    filteredMovies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3 style="color: ${colors[index % colors.length]}">${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        movieGrid.appendChild(movieCard);
    });

    // Optionally update horizontal scroll functionality if needed
    updateHorizontalScroll('movieGrid');
}

// Function to handle the Enter key event for search
document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchMovies(); // Trigger search when Enter is pressed
    }
});

/// Select the elements
const searchButton = document.querySelector('.search-container button');
const searchInput = document.querySelector('.search-container input');
const mainContent = document.querySelector('main'); // Or the main container for the website content

// Expand the search bar and blur background
searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('expanded');

    if (searchInput.classList.contains('expanded')) {
        mainContent.classList.add('blur-background'); // Add blur effect
    } else {
        mainContent.classList.remove('blur-background'); // Remove blur effect
    }
});

// Remove blur when clicking outside the search input
document.addEventListener('click', (e) => {
    if (!document.querySelector('.search-container').contains(e.target)) {
        searchInput.classList.remove('expanded');
        mainContent.classList.remove('blur-background');
    }
});

// Remove blur when pressing Enter in the search input
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchInput.classList.remove('expanded');
        mainContent.classList.remove('blur-background');
        // Add functionality to handle search action here if needed
    }
});




function toggleMenu() {
    const sideNav = document.getElementById("sideNav");
    const menuToggle = document.querySelector(".menu-toggle");

    if (sideNav.classList.contains("open")) {
        sideNav.classList.remove("open");
        menuToggle.classList.remove("hidden"); // Show the menu toggle button when sideNav is closed
    } else {
        sideNav.classList.add("open");
        menuToggle.classList.add("hidden"); // Hide the menu toggle button when sideNav is open
    }
}


// Scroll event for transparency effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const movieHeading = document.querySelector('.movieheading');

    if (window.scrollY > 1) { 
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        movieHeading.style.opacity = '0.5';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        movieHeading.style.opacity = '1';
    }
});

// Variables to store the previous scroll position and the navbar element
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Function to handle scroll events
const handleScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down
    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the navbar
        navbar.classList.add('hidden');
    } else {
        // Scrolling up, show the navbar
        navbar.classList.remove('hidden');
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

const sliderContainer = document.querySelector('.slider-container');
const dotsContainer = document.querySelector('.dots-container');
const slides = document.querySelectorAll('.movie-poster');
let currentIndex = 0;

// Create dots based on the number of slides
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

// Set initial dot
const setActiveDot = () => {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

// Go to a specific slide
const goToSlide = (index) => {
    if (index < 0 || index >= slides.length) return;
    sliderContainer.style.transform = `translateX(-${index * 100}vw)`;
    currentIndex = index;
    setActiveDot();
};

// Initialize slider
const initSlider = () => {
    setActiveDot();
};

// Call initialization
initSlider();

// Optional: Add automatic sliding if needed
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}, 5000); // Change slide every 5 seconds

// JavaScript to show/hide scroll-to-top button
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Scroll to top function
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
function toggleDownloadOptions() {
    var options = document.getElementById("download-options");
    var button = document.getElementById("dropdown-btn");
    
    // Toggle active class for dropdown options
    if (options.classList.contains("active")) {
        options.classList.remove("active");
        button.classList.remove("active"); // Also toggle the button class for arrow rotation
    } else {
        options.classList.add("active");
        button.classList.add("active"); // Activate the arrow rotation
    }
}
