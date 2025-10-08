// Toggle mobile menu
// Mobile menu toggle only active on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  if (window.innerWidth <= 768) {  // only trigger on mobile
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
  }
});

// Optional: close menu when clicking a nav link (mobile only)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('active');
      menuToggle.querySelector('i').classList.add('fa-bars');
      menuToggle.querySelector('i').classList.remove('fa-times');
    }
  });
});

