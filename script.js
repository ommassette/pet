
  const slides = document.querySelectorAll('.testimonial-slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  document.getElementById('prevTestimonial').addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  document.getElementById('nextTestimonial').addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });
