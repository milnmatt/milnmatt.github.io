// Wait for the entire DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the 'Start Your Adventure' button using its ID
    const startButton = document.getElementById('startButton');
    // Retrieve the 'Learn More' button using its ID
    const learnMoreButton = document.getElementById('learnMoreButton');
    // Retrieve the 'Rise' button using its ID
    const riseButton = document.getElementById('riseButton');
    // Retrieve the 'fake' button using its ID
    const fakeButton = document.getElementById('fakeButton');
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
    // Add a click event listener to the 'rise' button
    riseButton.addEventListener('click', function() {
        // Redirect the user to the about page when the button is clicked
        window.location.href = 'game2.html';
    });
    // Add a click event listener to the 'fake' button
    fakeButton.addEventListener('click', function() {
        // Redirect the user to the about page when the button is clicked
        window.location.href = 'gameover.html';
    });
});
