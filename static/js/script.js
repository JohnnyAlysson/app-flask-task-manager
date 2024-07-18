document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggleBtn = document.getElementById('dark-mode-toggle-btn');
  const body = document.body;

  darkModeToggleBtn.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled'); // Save dark mode preference to local storage
      } else {
          localStorage.setItem('darkMode', 'disabled'); // Save light mode preference to local storage
      }
  });

  // Check dark mode preference from local storage on page load
  if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
  }
});
