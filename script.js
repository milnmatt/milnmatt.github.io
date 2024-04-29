// Wait for the entire DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the 'Start Your Adventure' button using its ID
    const startButton = document.getElementById('startButton');
    // Retrieve the 'Learn More' button using its ID
    const learnMoreButton = document.getElementById('learnMoreButton');

    // Add a click event listener to the 'Start Your Adventure' button
    startButton.addEventListener('click', function() {
        // Redirect the user to the game page when the button is clicked
        window.location.href = 'game.html';
    });

    // Add a click event listener to the 'Learn More' button
    learnMoreButton.addEventListener('click', function() {
        // Redirect the user to the about page when the button is clicked
        window.location.href = 'about.html';
    });
});
