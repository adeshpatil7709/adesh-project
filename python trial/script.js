// Implement smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle play/pause for advertisement video
function toggleVideo() {
    const video = document.querySelector('#advertisement video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Add click event listener to toggle video play/pause
document.querySelector('#advertisement video').addEventListener('click', toggleVideo);

// Search for products based on user input
function searchProducts() {
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const products = [
        { name: "Laptop", description: "High performance laptop" },
        { name: "Smartphone", description: "Latest smartphone model" },
        { name: "Tablet", description: "Portable and powerful tablet" }
    ];

    let results = products.filter(product => product.name.toLowerCase().includes(searchQuery));
    displayResults(results);
}

// Display search results
function displayResults(results) {
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = ''; // Clear existing results

    if (results.length > 0) {
        results.forEach(product => {
            let productDiv = document.createElement('div');
            productDiv.textContent = product.name + " - " + product.description;
            resultsDiv.appendChild(productDiv);
        });
    } else {
        resultsDiv.textContent = 'No products found.';
    }
}

// Function to simulate a product purchase
function buyProduct() {
    alert('Thank you for your purchase!');
}
