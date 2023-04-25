function hoverIn () {
  const buttons = document.querySelectorAll('.frame1 button');
  buttons.forEach( (button) => button.addEventListener('mouseout', hoverOut) );

  this.classList.add('hover');
}

function hoverOut () {
  this.classList.remove('hover');
}

function buttonClick () {
  if (this.textContent === "Clear canvas") return;
  this.classList.toggle('selected');
}

const buttons = document.querySelectorAll('.frame1 button');
buttons.forEach( (button) => button.addEventListener('mouseover', hoverIn) );
buttons.forEach( (button) => button.addEventListener('click', buttonClick) );