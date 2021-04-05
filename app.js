const btnForTheme = document.getElementById('lightbtn');

// console.log(defaultBtn, defaultBackground);

btnForTheme.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
});
