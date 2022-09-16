const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const sliderRow = document.querySelector('.slider__row');
let direction;


buttonRight.addEventListener('click', function() {
  direction = -1;
  slider.style.justifyContent = 'flex-start';
  sliderRow.style.transform = 'translate(-854px)'; 
});

buttonLeft.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    sliderRow.appendChild(sliderRow.firstElementChild);
  }
  slider.style.justifyContent = 'flex-center';    
  sliderRow.style.transform = 'translate(854px)';  
 
  
});

sliderRow.addEventListener('transitionend', function() {
  if (direction === 1) {
    sliderRow.prepend(sliderRow.lastElementChild);
  } else {
    sliderRow.appendChild(sliderRow.firstElementChild);
  }
  
  sliderRow.style.transition = 'none';
  sliderRow.style.transform = 'translate(0)';
  setTimeout(() => {
    sliderRow.style.transition = 'all 0.5s';
  })
}, false);


/*
function movingForward(){
    direction =- 1
    offset = offset + 854;
    sliderRow.style.transform = `translateX(${offset}px)`;
}

function movingBackward(){
    direction = 1;
    offset = offset - 854;
    sliderRow.style.transform = `translateX(${offset}px)`;
}

buttonLeft.addEventListener("click", movingForward);
buttonRight.addEventListener("click", movingBackward);

sliderRow.addEventListener('transitionend', function() {
    // get the last element and append it to the front
    
    if (direction === 1) {
      sliderRow.prepend(sliderRow.lastElementChild);
    } else {
      sliderRow.appendChild(sliderRow.firstElementChild);
    }
    
    sliderRow.style.transition = 'none';
    sliderRow.style.transform = 'translate(0)';

  }, false);






















  /*
//составить массив начальный с условием подсчета количества блоков

function createCarouselArray(array) {
    if (array.length < 5 ) {
     const carouselArray = array.unshift(1, 2);
    } else {
      carouselArray = array.slice(); //копируем ничего не убирая
    }
    return carouselArray; 
}   
//вызов функции 
createCarouselArray(initialVacancyCards);

console.log(carouselArray);

//carouselArrаy.forEach((card)=>{renderCard(createCard(card))}

/*
function carousel(direction) {
    if (direction === 1) {
        movingForward();
        sliderRow.append [последний элемент начального массива + 1];
        sliderRow.remove(sliderRow.firstElementChild);
    } else {
        movingBackward();
        sliderRow.prepand [первый элемент начального массива - 1];
        sliderRow.remove(sliderRow.firstElementChild);
    }
}

/*
renderCard(createCard(card));

createCard(card){из темплейта

return readyCard;
}*/
 
/*сonst initialVacancyCards = [
    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечатьПубликовать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2', '2/2'],
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender1.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    },

    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2', '2/2'],
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender2.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    },

    {title:'PR менеджер', 
    description:'Публиковать новости и жизнь Фонда в социальные сети, отвечать на комментарии и быть в курсе всех дел',
    skills:['SMM','instagram','Администратор','Честность','Открытость','Целеустремленность'],
    schedule:['Удаленно', '5/2', '2/2'],
    pay:'35 000 руб',
    published:'5 дней назад',
    company:{logo:'../images/tender3.svg',
             name:'Антон тут рядом',
             address:'г.Новороссийск, ул.Видова, д.214'},
    link:'../pages/vacancy-item.html'
    }
]; */





