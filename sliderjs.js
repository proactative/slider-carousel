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

//примерная функция для зацикливания
/*
//составить массив начальный с условием подсчета количества блоков
функция составляемНачальныйРендер(массив) {
    если (массив.длина<5) то {

    }
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





