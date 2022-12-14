const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const sliderRow = document.querySelector('.slider__row');
const template = document.querySelector('#template').content;



const arrayNumbers10 = [1,2,3,4,5,6,7,8,9,10];
const arrayNumbers5 = [1,2,3,4,5];
const arrayNumbers3 = [1,2,3];
const arrayNumbers2 = [1,2];
const arrayNumbers1 = [1];



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

sliderRowWidth = sliderRow.offsetWidth
const rowItems = document.querySelectorAll('.slider__element');
const rowItemWidth = rowItems[0].offsetWidth;
rowItems[1].classList.add('scale');

const offset = 174;
const gap = 30;
const start = -rowItemWidth + offset - gap;//начальное положение: ширина карточки + смешение блока - 
const finish = - (rowItemWidth+gap)*array.length + offset;//конечное положение
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
        scaleElement(sliderRow.offsetLeft, dir);

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
 
function scaleElement(сoor,dir) {
    let i = findIndex(сoor);
    console.log(i);
    
    if (i===1&&dir===1) {//направо
        rowItems[1].classList.remove('scale');
        rowItems[0].classList.add('scale');
        rowItems[rowItems.length-2].classList.add('scale');
        setTimeout(()=>rowItems[0].classList.remove('scale'),500) 
    } else if(i===rowItems.length-2&&dir===-1) {//налево
        rowItems[rowItems.length-1].classList.add('scale');
        rowItems[rowItems.length-2].classList.remove('scale');
        rowItems[1].classList.add('scale');
        setTimeout(()=>rowItems[rowItems.length-1].classList.remove('scale'),500) 
    } else if(dir===-1){
        rowItems[i].classList.remove('scale');
        rowItems[i+1].classList.add('scale');
    } else if(dir===1) {
        rowItems[i].classList.remove('scale');
        rowItems[i-1].classList.add('scale');
    }
}

//функция опредления координаты наачала движения
function findIndex(сoor) {
    return -(сoor-offset)/(rowItemWidth + gap)
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
