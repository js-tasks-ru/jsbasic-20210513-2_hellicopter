function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner')
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  arrowLeft.style.display = 'none';
  let slide = 0;
  arrowRight.addEventListener('click', function () {
    slide = slide + 988;
    if (slide > -988) {
      arrowLeft.style.display = '';
    }
    if (slide > 1976) {
      arrowRight.style.display = 'none';
    }
    carouselInner.style.transform = `translateX(${-slide + 'px'})`;
  })

  arrowLeft.addEventListener('click', function () {
    slide = slide - 988;
    if (slide < 2964) {
      arrowRight.style.display = '';
    }
     if (slide <= 0) {
      arrowLeft.style.display = 'none';
    }
    carouselInner.style.transform = `translateX(${-slide + 'px'})`;
  })
}
