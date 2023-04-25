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
  const buttons = document.querySelectorAll('.frame1 button');
  buttons.forEach(button => button.classList.remove('selected'));
  this.classList.toggle('selected');
}

function gridHandler () {
  const a = document.querySelector('input[type="range"]');
  const oldDivs = document.querySelectorAll('.canvas div');
  oldDivs.forEach(div => div.remove());

  const canvas = document.querySelector('.frame2 .canvas');

  const maxWidth = canvas.offsetWidth;
  const maxHeight = canvas.offsetHeight;
  const newWidth = maxWidth / a.value ;
  const newHeight = maxHeight / a.value;
  const gridSize = a.value * a.value;

  canvas.setAttribute('style', `width: ${maxWidth}px; height: ${maxHeight}px;`);
  /*console.log(`${maxWidth}, ${maxHeight}, ${newWidth}, ${newHeight}`);*/

  for (let i = 0; i < gridSize; i++) {
    let newDiv = document.createElement('div');
    canvas.appendChild(newDiv);
    newDiv.setAttribute('style', `width: ${newWidth}px; height: ${newHeight}px;`);
  }
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
rangeInput.addEventListener('change',gridHandler);

gridHandler();