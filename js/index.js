
//Карусель для How it work
const state = {};
const carouselList = document.querySelector('.how-it-work__carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function(event) {
  let newActive = event.target;
  let isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };

  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const first = elems.find((elem) => elem.dataset.pos == -2);
  const last = elems.find((elem) => elem.dataset.pos == 2);

  current.classList.remove('carousel__item_active');

  [current, prev, next, first, last].forEach(item => {
    let itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos);
  });
};

const getPos = function(current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 2) {
    return -current;
  }

  return diff;
}



//Слайдер для Pets in zoo

//Массивы с именами животных и контентом
const arrAnimalsTop = ['Panda', 'Alligator', 'Gorilla', 'Elephant'];
const arrAnimalsBot = ['Polar-bear', 'Bald-eagle', 'Arctic-snowy-owl', 'Penguin'];
const arrCardsContentTop = ['Panda, China', 'Alligator, USA', 'Gorilla, Eastern DRC', 'Elephant, South Africa'];
const arrCardsContentBot = ['Polar bear, Canada', 'Bald eagle, USA', 'Arctic snowy owl, Alaska', 'Penguin, USA'];
const hrefTop = ['./html/zoos/panda.html', './html/zoos/alligator.html', './html/zoos/gorilla.html', './html/eror404.html'];
const hrefBot = ['./html/eror404.html', './html/zoos/eagle.html', './html/eror404.html', './html/eror404.html'];

//Переменные для кнопок и элементов
let click;
const firstCard = document.querySelector('.firstCard');
const secondCard = document.querySelector('.secondCard');
const thirdCard = document.querySelector('.thirdCard');
const fourthCard = document.querySelector('.fourthCard');
const fifthCard = document.querySelector('.fifthCard');
const sixthCard = document.querySelector('.sixthCard');
const seventhCard = document.querySelector('.seventhCard');
const eighthCard = document.querySelector('.eighthCard');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');

//Обработчик событий для стрелок
arrowLeft.onclick = stepLeft;
arrowRight.onclick = stepRight;


//Меняю контент карточек
function position() {
  firstCard.textContent = arrCardsContentTop[0];
  secondCard.textContent = arrCardsContentTop[1];
  thirdCard.textContent = arrCardsContentTop[2];
  fourthCard.textContent = arrCardsContentTop[3];
  fifthCard.textContent = arrCardsContentBot[0];
  sixthCard.textContent = arrCardsContentBot[1];
  seventhCard.textContent = arrCardsContentBot[2];
  eighthCard.textContent = arrCardsContentBot[3];
}


//Меняю картинку карточек
function set() {
  firstCard.setAttribute('class', `card firstCard ${arrAnimalsTop[0]}`);
  secondCard.setAttribute('class', `card secondCard ${arrAnimalsTop[1]}`);
  thirdCard.setAttribute('class', `card thirdCard ${arrAnimalsTop[2]}`);
  fourthCard.setAttribute('class', `card fourthCard ${arrAnimalsTop[3]}`);
  fifthCard.setAttribute('class', `card fifthCard ${arrAnimalsBot[0]}`);
  sixthCard.setAttribute('class', `card sixthCard ${arrAnimalsBot[1]}`);
  seventhCard.setAttribute('class', `card seventhCard ${arrAnimalsBot[2]}`);
  eighthCard.setAttribute('class', `card eighthCard ${arrAnimalsBot[3]}`);
}


//Меняю ссылки на карточки
function hrefAdd() {
  firstCard.setAttribute('href', `${hrefTop[0]}`);
  secondCard.setAttribute('href', `${hrefTop[1]}`);
  thirdCard.setAttribute('href', `${hrefTop[2]}`);
  fourthCard.setAttribute('href', `${hrefTop[3]}`);
  fifthCard.setAttribute('href', `${hrefBot[0]}`);
  sixthCard.setAttribute('href', `${hrefBot[1]}`);
  seventhCard.setAttribute('href', `${hrefBot[2]}`);
  eighthCard.setAttribute('href', `${hrefBot[3]}`);
}


//Начальное положение карточек
position();
set();
hrefAdd();


//Функция для правой кнопки
function stepRight() {
  click = arrCardsContentTop.shift();
  arrCardsContentTop.push(click);
  click = arrCardsContentBot.shift();
  arrCardsContentBot.push(click);
  click = arrAnimalsTop.shift();
  arrAnimalsTop.push(click);
  click = arrAnimalsBot.shift();
  arrAnimalsBot.push(click);
  click = hrefTop.shift();
  hrefTop.push(click);
  click = hrefBot.shift();
  hrefBot.push(click);
  position();
  set();
  hrefAdd();
}


//Функция для левой кнопки
function stepLeft() {
  click = arrCardsContentTop.pop();
  arrCardsContentTop.unshift(click);
  click = arrCardsContentBot.pop();
  arrCardsContentBot.unshift(click);
  click = arrAnimalsTop.pop();
  arrAnimalsTop.unshift(click);
  click = arrAnimalsBot.pop();
  arrAnimalsBot.unshift(click);
  click = hrefTop.pop();
  hrefTop.unshift(click);
  click = hrefBot.pop();
  hrefBot.unshift(click);
  position();
  set();
  hrefAdd();
}






//Окна для donate
const donateWindowsWrapper = document.querySelector('.donate-for-volunteers__wrapper');
const donateWindowsBlur = document.querySelector('.donate-for-volunteers-blur');
const donateFirstWindow = document.querySelector('.donate-for-volunteers-first');
const donateSecondWindow = document.querySelector('.donate-for-volunteers-second');


// Ограничитель ввода для donate-for-valunteers
const donatAnount = document.querySelector('.donate-for-volunteers__amount');

donatAnount.oninput = function() {
  if (this.value.length > 4) this.value = this.value.slice(0, 4);
  if (this.value <= 0) this.value = '';
}


// Ограничители ввода для donate-for-volunteers__card
const cardNumber = document.querySelector('.donate-for-volunteers__card-number');
const cardMonth = document.querySelector('.donate-for-volunteers__card-month');
const cardYear = document.querySelector('.donate-for-volunteers__card-year');
const cardCVC = document.querySelector('.card-two__cvc');

cardNumber.oninput = function() {
  if (this.value.length > 16) this.value = this.value.slice(0, 16);
  if (this.value <= 0) this.value = '';
}

cardMonth.oninput = function() {
  if (this.value.length > 2) this.value = this.value.slice(0, 2);
  if (this.value <= 0) this.value = '';
}

cardYear.oninput = function() {
  if (this.value.length > 2) this.value = this.value.slice(0, 2);
  if (this.value <= 0) this.value = '';
}

cardCVC.oninput = function() {
  if (this.value.length > 3) this.value = this.value.slice(0, 3);
  if (this.value <= 0) this.value = '';
}


//Закрытие окнон donate
const donateClose = document.querySelectorAll('.donate-for-volunteers__close');

donateClose.forEach(el => el.onclick = function() {
  donateFirstWindow.style.setProperty('display', 'none');
  donateSecondWindow.style.setProperty('display', 'none');
  donateWindowsWrapper.style.setProperty('display', 'none');
  donatAnount.value = '';
})

donateWindowsBlur.onclick = function() {
  donateFirstWindow.style.setProperty('display', 'none');
  donateSecondWindow.style.setProperty('display', 'none');
  donateWindowsWrapper.style.setProperty('display', 'none');
  donatAnount.value = '';
}


//Кнопки donate
const donateButtonNext = document.querySelector('.donate-for-volunteers__button-next');
const donateButtonDonate = document.querySelector('.donate-for-volunteers__button-donate');


donateButtonNext.onclick = function() {
  if (donatAnount.value != '') {
    donateFirstWindow.style.setProperty('display', 'none');
    donateSecondWindow.style.setProperty('display', 'flex');
    donatAnount.value = '';
  }
}

donateButtonDonate.onclick = function() {
  if (cardNumber.value != 0 & cardMonth.value != 0 & cardYear.value != 0 & cardCVC.value != 0) {
    donateSecondWindow.style.setProperty('display', 'none');
    donateWindowsWrapper.style.setProperty('display', 'none');
    donatAnount.value = '';
  }
}


//Кнопка футера donate for volunteers
const footerButtonMain = document.querySelector('.footer__button-main');

footerButtonMain.onclick = function() {
  donateWindowsWrapper.style.setProperty('display', 'flex');
  donateFirstWindow.style.setProperty('display', 'flex');
}