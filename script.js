// Theme Management (Dark / Light)
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Helper to determine the effective theme
function getEffectiveTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return colorSchemeQuery.matches ? 'dark' : 'light';
}

// Function to apply the theme
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
}

// Initialize theme on load
applyTheme(getEffectiveTheme());

// Listen for system theme changes in real-time
colorSchemeQuery.addEventListener('change', (e) => {
  // If the user hasn't explicitly overridden the theme, update automatically with system change
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

// Manual theme toggle button
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});

// Dynamic current year
document.getElementById('year').textContent = new Date().getFullYear();

// Form Handling with AJAX/Fetch
const notifyForm = document.getElementById('notify-form');
const formMsg = document.getElementById('form-msg');
const formError = document.getElementById('form-error');

notifyForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = notifyForm.querySelector('button');
  const endpoint = notifyForm.getAttribute('action');

  // Reset errors
  if (formError) formError.style.display = 'none';

  submitBtn.disabled = true;
  submitBtn.textContent = 'Saving...';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(notifyForm),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      notifyForm.style.display = 'none';
      formMsg.style.display = 'block';
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    if (formError) {
      formError.style.display = 'block';
    }
    submitBtn.disabled = false;
    submitBtn.textContent = 'Notify Me';
  }
});
