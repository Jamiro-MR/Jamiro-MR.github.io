// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typed.js for typing effect in the hero section
const typed = new Typed('#typed', {
  strings: ["Web Developer", "Creative Coder", "Tech Enthusiast"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
  showCursor: true,               // Ensure Typed.js cursor is displayed
  cursorChar: '|',                // Customize the cursor character if desired
  autoInsertCss: true             // Ensure Typed.js inserts its own cursor CSS
});
