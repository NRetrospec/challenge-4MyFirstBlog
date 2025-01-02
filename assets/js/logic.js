document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.classList.add(savedTheme);
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
      if (body.classList.contains('dark-theme')) {
          body.classList.remove('dark-theme');
          localStorage.setItem('theme', '');
          themeToggle.textContent = '☀️'; // Sun symbol for light theme
      } else {
          body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark-theme');
          themeToggle.textContent = '🌙'; // Moon symbol for dark theme
      }
  });
});