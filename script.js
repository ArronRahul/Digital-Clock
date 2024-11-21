// Helper function to simplify element selection
const $ = (selector) => {
    return document.querySelector(selector);
};

// Get references to the DOM elements
const hour = $('.hour');
const min = $('.min');
const sec = $('.sec');
const dots = document.querySelectorAll('.dot'); // All dots
const week = $('.week');

let showDot = true;

// Function to update the clock
function update() {
    showDot = !showDot; // Toggle the visibility of the dots
    const now = new Date(); // Get the current time

    // Toggle the visibility of the dots
    dots.forEach((dot) => {
        if (showDot) {
            dot.classList.add('invsible');
        } else {
            dot.classList.remove('invsible');
        }
    });

    // Update the hour, minute, and second display
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    // Highlight the active day of the week
    Array.from(week.children).forEach((ele) => ele.classList.remove('active'));
    week.children[now.getDay()].classList.add('active');
}

// Call update initially to display the current time immediately
update();

// Update the clock every 500ms
setInterval(update, 500);
