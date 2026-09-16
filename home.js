// Initialize current year dynamically
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Clean up any previously stored manual theme preference
try {
  localStorage.removeItem('theme');
} catch (e) {
  // Ignore in environments where localStorage is not accessible
}

// Initialize Lucide Icons
if (window.lucide) {
  lucide.createIcons();
}
