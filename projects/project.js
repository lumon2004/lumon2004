// Shared behaviour for the project pages: screenshot lightbox.
// The year and the Lucide icons are handled by ../script.js.

const lightbox = document.getElementById('lightbox');

if (lightbox && typeof lightbox.showModal === 'function') {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('[data-lightbox-caption]');

  document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const source = trigger.querySelector('img');
      image.src = trigger.getAttribute('href');
      image.alt = source ? source.alt : '';
      caption.textContent = trigger.dataset.lightbox || '';
      lightbox.showModal();
    });
  });

  // Close on a click outside the image, or with the close button / Esc (native).
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.closest('[data-lightbox-close]')) {
      lightbox.close();
    }
  });

  lightbox.addEventListener('close', () => {
    image.removeAttribute('src');
  });
}
