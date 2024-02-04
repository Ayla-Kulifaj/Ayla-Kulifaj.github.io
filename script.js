// anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// greeting based on time of day
const greetingDisplay = document.getElementById('greeting');
const date = new Date();
const hour = date.getHours();
let greeting;

if (hour < 12) {
    greeting = 'Good Morning';
} else if (hour < 18) {
    greeting = 'Good Afternoon';
} else {
    greeting = 'Good Evening';
}

if (greetingDisplay) {
    greetingDisplay.textContent = greeting;
}

// Typewriter effect on my name
const typewriterText = "Ayla Kulifaj";
let index = 0;
const interval = setInterval(() => {
    if (index < typewriterText.length) {
        document.getElementById("typewriter").innerHTML += typewriterText.charAt(index);
        index++;
    } else {
        clearInterval(interval);
    }
}, 770); // This adjust my speed

// Dark Mode Toggle
const checkbox = document.getElementById('checkbox');
document.addEventListener('DOMContentLoaded', () => {
    const darkMode = localStorage.getItem('darkMode'); 
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        checkbox.checked = true;
    }
});

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    let darkMode = localStorage.getItem('darkMode'); 
    if (darkMode !== 'enabled') {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', null);
    }
});
