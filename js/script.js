// --- Mobile Navigation Toggle ---

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Select the navigation toggle button and the navigation menu itself
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav ul');

    // Check if both elements exist on the page to avoid errors
    if (navToggle && mainNav) {
        // Add a click event listener to the toggle button
        navToggle.addEventListener('click', function() {
            // Toggle the 'active' class on the menu to show/hide it
            mainNav.classList.toggle('active');
            // Toggle the 'active' class on the button for the hamburger animation
            navToggle.classList.toggle('active');
        });
    }

});
