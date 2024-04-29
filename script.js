document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    const buttons = [
        { id: 'startButton', url: 'game.html' },
        { id: 'learnMoreButton', url: 'about.html' },
        { id: 'riseButton', url: 'game2.html' },
        { id: 'fakeButton', url: 'gameover.html' },
        { id: 'breakfastButton', url: 'game3.html' },
        { id: 'diversionButton', url: 'gameover.html' }
    ];

    buttons.forEach(button => {
        const element = document.getElementById(button.id);
        if (element) {
            console.log(`Adding listener to ${button.id}`);
            element.addEventListener('click', function() {
                console.log(`Redirecting to ${button.url}`);
                window.location.href = button.url;
            });
        } else {
            console.log(`${button.id} not found on this page.`);
        }
    });
});
