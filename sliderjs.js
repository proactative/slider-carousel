const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const sliderRow = document.querySelector('.slider__row');
const sliderItem = document.querySelector('.slider__element')
let offset = 0; //смещеие от левого края

console.log(sliderItem.offsetWidth);

function movingForward(){
    offset = offset + 854;
    sliderRow.style.transform = `translateX(${offset}px)`;
}

function movingBackward(){
    offset = offset - 854;
    sliderRow.style.transform = `translateX(${offset}px)`;
}

buttonLeft.addEventListener("click", movingForward);
buttonRight.addEventListener("click", movingBackward);

//для зацикливания
const slides = Array.from(document.querySelectorAll('.slider__element'));

const firstClone = slides[0].cloneNode(true);  //клонируем первый елемент, чтобы он шел после последнего
const lastClone = slides[slides.length - 1].cloneNode(true); //клонируем последний чтобы он шел перед первым

//slides.append(firstClone);
//slides.prepend(lastClone);





