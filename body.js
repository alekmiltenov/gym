var oblique = document.getElementById('obliques');

oblique.addEventListener('mouseenter', () => {
  oblique.style.fill = 'red';
});

oblique.addEventListener('mouseleave', () => {
  oblique.style.fill = 'blue';
});