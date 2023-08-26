// Get the element that you want to apply the glitch animation to
const playySocialText = document.querySelector('.hero.glitch');

// Add event listener for mouseenter
playySocialText.addEventListener('mouseenter', () => {
  playySocialText.classList.add('glitch-animation');
});

// Add event listener for mouseleave
playySocialText.addEventListener('mouseleave', () => {
  playySocialText.classList.remove('glitch-animation');
});
