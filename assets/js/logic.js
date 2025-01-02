document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

 
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      body.classList.add(savedTheme);
  }

 
  themeToggle.addEventListener('click', function() {
      if (body.classList.contains('dark-theme')) {
          body.classList.remove('dark-theme');
          localStorage.setItem('theme', '');
          themeToggle.textContent = '☀️'; 
      } else {
          body.classList.add('dark-theme');
          localStorage.setItem('theme', 'dark-theme');
          themeToggle.textContent = '🌙'; 
      }
  });
});