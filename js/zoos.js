
const cardArrow = document.querySelectorAll('.card-arrow');

cardArrow.forEach(el => el.onclick = function() {
  this.classList.toggle('card-arrow-turn');
  document.querySelector(`[data-card='${this.dataset.numb}'`).classList.toggle('info-dynamic-card__opened');
  document.querySelector(`[data-text='${this.dataset.numb}'`).classList.toggle('card-content__text__opened');
})

const sidebar = document.querySelector('.animal__aside');

sidebar.onclick = function () {
  sidebar.classList.add('animal__aside__opened');
  document.querySelector('.aside-list').classList.add('aside-list__opened');
}