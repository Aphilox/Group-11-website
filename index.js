// Media control to prevent simultaneous playback
function setupMediaControls() {
  const mediaElements = document.querySelectorAll('video, audio');
  
  mediaElements.forEach(media => {
    media.addEventListener('play', () => {
      mediaElements.forEach(otherMedia => {
        if (otherMedia !== media && !otherMedia.paused) {
          otherMedia.pause();
        }
      });
    });
  });
}

// Fade in sections when scrolling
document.addEventListener('DOMContentLoaded', function() {
  // Initialize media controls
  setupMediaControls();

  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  // Form submission handling
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
