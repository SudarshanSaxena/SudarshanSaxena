let intro = document.querySelector('#parallex');


window.addEventListener('scroll', () => {
  let offsetY = window.pageYOffset;
  console.log(offsetY);
  intro.style.backgroundPositionY = offsetY * 0.7 + 'px';
})

