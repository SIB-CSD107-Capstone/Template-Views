const skipBtn = document.querySelector('.skip-link');

skipBtn.addEventListener('click', () => {
  document.querySelector('#maincontent').focus();
});