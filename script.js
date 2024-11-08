// Select all nav links and the indicator
const navLinks = document.querySelectorAll('.nav-link');
const indicator = document.querySelector('.indicator');

// Function to move the indicator to the active link
function moveIndicator(element) {
  const rect = element.getBoundingClientRect();
  indicator.style.width = `${rect.width + 10}px`;
  indicator.style.left = `${element.offsetLeft - 5}px`;
}

// Function to set active link and move indicator
function activateLink(link) {
  navLinks.forEach(link => link.classList.remove('active'));
  link.classList.add('active');
  moveIndicator(link);
}

// Add click event listeners to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    activateLink(this);
  });
});

// Initialize indicator position on load
document.addEventListener('DOMContentLoaded', () => {
  const activeLink = document.querySelector('.nav-link.active');
  if (activeLink) {
    moveIndicator(activeLink);
  }
});
