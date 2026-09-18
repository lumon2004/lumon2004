// Initialize current year dynamically
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Initialize dynamic age (Birthdate: January 1, 2004)
const ageElement = document.getElementById('age');
if (ageElement) {
  const birthDate = new Date(2004, 0, 1);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  ageElement.textContent = age;
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
