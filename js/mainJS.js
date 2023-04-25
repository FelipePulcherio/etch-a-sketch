function hoverIn () {
  const buttons = document.querySelectorAll('.frame1 button');
  buttons.forEach( (button) => button.addEventListener('mouseout', hoverOut) );

  this.classList.add('hover');
}

function hoverOut () {
  this.classList.remove('hover');
}

function buttonClick () {
  if (this.textContent === "Clear canvas") {
    const canvasDivs = document.querySelectorAll('.canvas > div');
    canvasDivs.forEach((div) => div.style['background-color'] = "#CCCCCC");
    return;
  }
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
    newDiv.addEventListener('mousedown', painter);
  }
}

function inputChangeHandler () {
  const selection = document.querySelector('.sliderContainer .text');
  selection.textContent = `${this.value} x ${this.value}`;
}

function advancedColor (rgbString) {
  let newString = rgbString.substr(4).replace(")","").replaceAll(" ","").split(",");
  newString[0] = Number(newString[0]) - 30;
  newString[1] = Number(newString[1]) - 30;
  newString[2] = Number(newString[2]) - 30;
  return `rgb(${newString[0]}, ${newString[1]}, ${newString[2]})`;
}

function painter () {
  const buttons = document.querySelectorAll('.frame1 button');

  switch (true) {
    case buttons[0].classList.value == "selected": /*Classic*/
      this.style['background-color'] = document.querySelector('.color-picker').value;
      break;
    case buttons[1].classList.value == "selected": /*Advanced*/
      let oldBgColor = getComputedStyle(this).backgroundColor;
      let newBgColor = advancedColor(oldBgColor);
      this.style['background-color'] = newBgColor;
      break;
    case buttons[2].classList.value == "selected": /*Rainbow*/
      let randomR = parseInt(Math.random()*256);
      let randomG = parseInt(Math.random()*256);
      let randomB = parseInt(Math.random()*256);
      this.style['background-color'] = `rgb(${randomR}, ${randomG}, ${randomB})`;
      break;
    case buttons[3].classList.value == "selected": /*Eraser*/
      this.style['background-color'] = "#CCCCCC";
      break;
    case buttons[4].classList.value == "selected": /*Clear*/
      break; /* Described in buttonClick() */
  }
}

const buttons = document.querySelectorAll('.frame1 button');
buttons.forEach( (button) => button.addEventListener('mouseover', hoverIn) );
buttons.forEach( (button) => button.addEventListener('click', buttonClick) );

const rangeInput = document.querySelector('input[type="range"]');
rangeInput.addEventListener('input',inputChangeHandler);
rangeInput.addEventListener('change',gridHandler);

const canvasDivs = document.querySelectorAll('.canvas > div');
canvasDivs.forEach((div) => div.addEventListener('mousedown', painter));
canvasDivs.forEach((div) => div.addEventListener('mouseover', painter));

gridHandler();