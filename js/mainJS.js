function hoverIn () {
  const buttons = document.querySelectorAll('.frame1 button');
  buttons.forEach( (button) => button.addEventListener('mouseout', hoverOut) );

  this.classList.add('hover');
}

function hoverOut () {
  this.classList.remove('hover');
}

const buttons = document.querySelectorAll('.frame1 button');
buttons.forEach( (button) => button.addEventListener('mouseover', hoverIn) );