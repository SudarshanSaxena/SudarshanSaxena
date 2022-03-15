let intro = document.querySelector('#parallex');


window.addEventListener('scroll', () => {
  let offsetY = window.pageYOffset;
  console.log(offsetY);
  intro.style.backgroundPositionY = offsetY * 0.7 + 'px';
})


function getWidth() {
  if (window.innerWidth < 500) {
    alert('Best view on desktop');
  }

  console.log(window.innerWidth);
}
