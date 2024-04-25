

// Function to change background color on hover
function changeBackgroundOnHover(element, color) {
    element.addEventListener('mouseover', () => element.style.backgroundColor = color);
    element.addEventListener('mouseout', () => element.style.backgroundColor = '');
}

// Apply the function to all list items
document.querySelectorAll('.peril li').forEach(li => {
    changeBackgroundOnHover(li, 'rgba(231, 76, 60, 0.2)'); // Light red background for peril items
});

document.querySelectorAll('.potential li').forEach(li => {
    changeBackgroundOnHover(li, 'rgba(52, 152, 219, 0.2)'); // Light blue background for potential items
});


document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.plan-steps li');

    // Add a hover effect to the steps
    steps.forEach(function(step) {
        step.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'rgba(76, 209, 55, 0.1)'; // Light green background on hover
        });
        step.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Revert on mouse out
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Fade-in effect for the hero image https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/
    const heroImage = document.querySelector('.hero-image');
    const heroDescription = document.querySelector('.hero-description');

    // Function to add the fade-in effect
    function fadeIn(element) {
        setTimeout(() => {
            element.style.opacity = 1;
        }, 500); // Delay to ensure the page loads
    }

    fadeIn(heroImage);
    fadeIn(heroDescription);
});

document.addEventListener('DOMContentLoaded', function() {
    // Create canvas element https://www.w3schools.com/html/html5_canvas.asp
    const canvas = document.createElement('canvas');
    document.body.insertBefore(canvas, document.body.firstChild);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';

    const ctx = canvas.getContext('2d');
    const particles = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 1,
            color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`
        });
    }

    // Function to update and draw particles https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
    //idea that a friend taught me in I think it's pretty cool!
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.x += Math.random() - 0.5;
            particle.y += Math.random() - 0.5;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });
        requestAnimationFrame(updateParticles);
    }

    // Initial call to start animation
    updateParticles();
});
