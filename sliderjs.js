const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const sliderRow = document.querySelector('.slider__row');
const template = document.querySelector('#template').content;


let offset = 0; //смещеие от левого края

const arrayNumbers10 = [1,2,3,4,5,6,7,8,9,10];
const arrayNumbers5 = [1,2,3,4,5];
const arrayNumbers3 = [1,2,3];


let start = -2469;//начальное положение

//слайдер передвижение
function movingClide(direction){
    start = start + direction*(854 + 30);//ширина блока и растояние между блоками
    sliderRow.style.left = start + 'px';
}

buttonLeft.addEventListener("click", ()=>infiniteSlide(arrayNumbers3, -1));//лево
buttonRight.addEventListener("click", ()=>infiniteSlide(arrayNumbers3, 1));//право

//создаем карточку
function createCard(text) {
    const sliderItem = template.querySelector('.slider__element').cloneNode(true);
    sliderItem.textContent = text;
    return sliderItem;
}

function renderCardRight(element) {
    sliderRow.append(element);
}

function renderCardLeft(element) {
    sliderRow.prepend(element);
}

function makeInitialArray(array, amount) {
    renderCardRight(createCard(array[0]));
    for(i=1; i<Math.ceil(amount/2);i++){
        renderCardRight(createCard(array[i]));
        renderCardLeft(createCard(array[array.length-i]));
    }
}

makeInitialArray(arrayNumbers3, 5);

//функция зацикливания
function infiniteSlide(array, direction) {
    movingClide(direction);
/*
    if(direction===-1) {
        renderCardLeft(createCard(array));
        sliderRow.lastChild.remove();
    } else if(direction===1) {
        sliderRow.firstChild.remove();
    }*/
}


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





