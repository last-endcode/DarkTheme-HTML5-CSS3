const btnIcon = document.getElementById('lightbtn');
const defaultBackground = document.getElementById('hero');

// console.log(defaultBtn, defaultBackground);

btnIcon.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
});
