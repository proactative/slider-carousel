const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const sliderRow = document.querySelector('.slider__row');
let offset = 0; //смещеие от левого края

function movingForward(){
    offset = offset + 854;
    sliderRow.style.translate = offset + 'px';
}

function movingBackward(){
    offset = offset - 854;
    sliderRow.style.translate = offset + 'px';
}

buttonLeft.addEventListener("click", movingForward);
buttonRight.addEventListener("click", movingBackward);


