document.querySelector('form').addEventListener('submit', function(event) {
   n
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

   
    if (name && email && message) {
       
        this.submit();
    } else {
        alert('Please fill in all fields.');
    }
});











document.addEventListener("DOMContentLoaded", function() {
    // Fade-in body on load
    document.body.classList.add("loaded");

    // Animate sections when scrolling into view
    const sections = document.querySelectorAll('.section');
    const serviceCards = document.querySelectorAll('.service-card');
    const galleryImages = document.querySelectorAll('.gallery-section img');

    function revealElements() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (sectionTop < viewportHeight - 100) {
                section.classList.add('visible');
            }
        });

        serviceCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < window.innerHeight - 50) {
                card.classList.add('visible');
            }
        });

        galleryImages.forEach(image => {
            const imgTop = image.getBoundingClientRect().top;

            if (imgTop < window.innerHeight - 50) {
                image.classList.add('visible');
            }
        });
    }

    // Initial check on page load
    revealElements();

    // Check when scrolling
    window.addEventListener('scroll', revealElements);
});

