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

function inputChangeHandler () {
  const selection = document.querySelector('.sliderContainer .text');
  selection.textContent = `${this.value} x ${this.value}`;
}

const buttons = document.querySelectorAll('.frame1 button');
buttons.forEach( (button) => button.addEventListener('mouseover', hoverIn) );
buttons.forEach( (button) => button.addEventListener('click', buttonClick) );

const rangeInput = document.querySelector('input[type="range"]');
rangeInput.addEventListener('input',inputChangeHandler);