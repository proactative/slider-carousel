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

const gap = 30;
const start = -rowItemWidth + 174 - gap;//начальное положение: ширина карточки + смешение блока - 
const finish = - (rowItemWidth+gap)*array.length + 174;//конечное положение
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



function checkIndex() {
    sliderRow.classList.remove('moving');
    if(index===-1){
        sliderRow.style.left = finish + 'px';
        index = array.length-1;
    } else if(index===array.length){
        sliderRow.style.left = start+ 'px';
        index = 0;
    }
    allowShift = true;
}

}


carusel(arrayNumbers10);



//слайдер передвижение
/*
sliderRow.addEventListener('transitionend', ()=> {
    if(count>=3) {
        console.log(count); 
    start = -3351;
    count=0;
    sliderRow.style.transition='none';
    sliderRow.style.left=-3351 + 'px';
    
    setTimeout(() => {
        sliderRow.style.transition = 'all 0.3s';
      })
    }
      });



//создаем карточку


function renderCardLeft(element) {
    sliderRow.prepend(element);
}



//функция зацикливания
function infiniteSlide(array, dir) {
    movingClide(dir);

/*
    if(dir===-1) {
        renderCardLeft(createCard(array));
        sliderRow.lastChild.remove();
    } else if(dir===1) {
        sliderRow.firstChild.remove();
    }
}

/*
//для зацикливания
const slides = Array.from(document.querySelectorAll('.slider__element'));

const firstClone = slides[0].cloneNode(true);  //клонируем первый елемент, чтобы он шел после последнего
const lastClone = slides[slides.length - 1].cloneNode(true); //клонируем последний чтобы он шел перед первым

//slides.append(firstClone);
//slides.prepend(lastClone);

//примерная функция для зацикливания
/*
//составить массив начальный с условием подсчета количества блоков
функция составляемНачальныйРендер(массив) {
    если (массив.длина<5) то {

    }
}
составление начального массива : 
for (i=0;i<5;i++) {
    выбирать из массива [-2,-1, 0,1,2] элементы
}
начальный массив[-2,-1, 0,1,2].forEach((card)=>{renderCard(createCard(card))}

функция карусель(напраление: лево 1 или право -1) {
    если (направлениие:1) то {
        двигаем блок лево;
        создаем, добавляем элемент в конец [последний элемент начального массива + 1];
        удаляем элемент[первый элемент];
    } иначе {
        двигаем блок право;
        создаем, добавляем элемент в начало [первый элемент начального массива - 1];
        удаляем элемент[последний элемент];
        }
}


renderCard(createCard(card));

createCard(card){из темплейта

return readyCard
}
 */





