const mapImg = document.querySelector('.map__animals');
const mapWrapper = document.querySelector('.map__wrapper');
const headerElem = document.querySelector('.header__wrapper');
const footerElem = document.querySelector('.footer__wrapper');
const zoomOut = document.querySelector('.map-zoom__out');
const zoomIn = document.querySelector('.map-zoom__in');

let topIndent = 0;
let leftIndent = 0;

const calculateCoords = (e, elem) => {
  let box = elem.getBoundingClientRect();
  topIndent = e.pageY - box.top + pageYOffset;
  leftIndent = e.pageX - box.left + pageXOffset;
}

const moveAt = (e) => {
  mapImg.style.left = e.pageX - 12 - leftIndent + 'px';
  if (e.pageX >= mapWrapper.offsetWidth) {
    stopDrag();
  } else if (e.pageX <= 0) {
    stopDrag();
  }
  mapImg.style.top = e.pageY - 100 - topIndent + 'px';
}

const stopDrag = () => {
  document.removeEventListener('mousemove', moveAt);
  mapImg.removeEventListener('mouseup', stopDrag);
}

mapImg.addEventListener('mousedown', (e) => {
  /* if (mapImg.width <= mapWrapper.offsetWidth) {
    return;
  } */
  
  calculateCoords(e, mapImg);

  moveAt(e);

  document.addEventListener('mousemove', moveAt);
  mapImg.addEventListener('mouseup', stopDrag);
})

mapImg.ondragstart = function() {
  return false;
}

headerElem.addEventListener('mouseenter', stopDrag);
footerElem.addEventListener('mouseenter', stopDrag);


zoomIn.addEventListener('click', () => {
  if (mapImg.width <= mapWrapper.offsetWidth * 2) {
    mapImg.style.width = `${mapImg.width * 1.2}px`;
  }
})

zoomOut.addEventListener('click', () => {
  if (mapImg.width >= mapWrapper.offsetWidth) {
    mapImg.style.width = `${mapImg.width / 1.2}px`;
    if (mapImg.width <= mapWrapper.offsetWidth) {
      mapImg.style.width = `${mapImg.width}px`;
      mapImg.style.top = '0px';
      mapImg.style.left = '0px';
    }
  }
})
