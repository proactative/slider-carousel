const container = document.querySelector('.slider__container');
const slider = document.querySelector('.slider');
const buttonLeft = document.querySelector('.slider__button-left');
const buttonRight = document.querySelector('.slider__button-right');
const sliderRow = document.querySelector('.slider__row');
const template = document.querySelector('#template').content;


buttonRight.addEventListener('click', function() {
  direction = -1;
  container.style.justifyContent = 'flex-start';
  sliderRow.style.transform = 'translate(-854px)'; 
});

buttonLeft.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    sliderRow.appendChild(sliderRow.firstElementChild);
  }
  container.style.justifyContent = 'flex-center';    
  sliderRow.style.transform = 'translate(854px)';  
 
  
});

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





