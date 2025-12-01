const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearSpan = document.getElementById('year');
const contactForm = document.getElementById('contact-form');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', (!expanded).toString());
    navLinks.classList.toggle('show');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = contactForm.name.value.trim();
    alert(`Thank you, ${name || 'friend'}! We will reach out shortly.`);
    contactForm.reset();
  });
}

// Replace placeholder images in assets/ with real salon and training photos to personalize the gallery and hero.
// Adjust colors in :root of styles.css to match the Funarya Beauté brand palette.
// Update service prices and course descriptions to reflect current offers and accreditation details.
