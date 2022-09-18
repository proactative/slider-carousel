const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const sliderRow = document.querySelector('.slider__row');
const template = document.querySelector('#template').content;



const arrayNumbers10 = [1,2,3,4,5,6,7,8,9,10];
const arrayNumbers5 = [1,2,3,4,5];
const arrayNumbers3 = [1,2,3];


function carusel(array) {

    function makeArray(array) {
    renderCard(createCard(array[array.length-1]));//рендер последнего

    array.forEach(element => {
        renderCard(createCard(element));
    });
    
    renderCard(createCard(array[0]));//рендер первого
}

function createCard(text) {
    const sliderItem = template.querySelector('.slider__element').cloneNode(true);
    sliderItem.textContent = text;
    return sliderItem;
}

function renderCard(element) {
    sliderRow.append(element);
}

makeArray(array);
const rowItems = document.querySelectorAll('.slider__element');
const rowItemWidth = rowItems[0].offsetWidth;

const offset = 174; 
const gap = 30;
const start = -rowItemWidth + offset - gap;//начальное положение: ширина карточки + смешение блока - 
const finish = - (rowItemWidth+gap)*array.length + offset;//конечное положение
console.log(start, '##', finish);
let index = 0; 
let allowShift = true;
let posInitial;
buttonLeft.addEventListener("click", ()=>{
    movingClide(-1);
});//лево
buttonRight.addEventListener("click", ()=>{
    movingClide(1);
});//право

sliderRow.addEventListener('transitionend', checkIndex);

sliderRow.addEventListener('wheel', movingByWheel);


function movingByWheel(e) {
    e.preventDefault();

    if(e.deltaY<0) {
        movingClide(-1);
    } else if(e.deltaY>0) movingClide(1);
}

function movingClide(dir){
    sliderRow.classList.add('moving');

    if (allowShift) {
        if(dir===-1) {//налево
            posInitial = sliderRow.offsetLeft;
            sliderRow.style.left = posInitial - (rowItemWidth + gap) + 'px';
            index++;
            
        } else if(dir===1) {//направо
            posInitial = sliderRow.offsetLeft;
            sliderRow.style.left = posInitial + (rowItemWidth + gap) + 'px';
            index--;
            
        }
        
        allowShift = false;
    }
}



function checkIndex(e) {
    if(e.target===sliderRow) {
        sliderRow.classList.remove('moving');
    if(index===-1){
        sliderRow.style.left = finish + 'px';
        index = array.length-1;
    } else if(index===array.length){
        sliderRow.style.left = start+ 'px';
        index = 0;
    }
    allowShift = true;
}}

}


carusel(arrayNumbers10);
