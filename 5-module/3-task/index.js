function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner')
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let width = document.querySelector('.carousel__slide').offsetWidth;

  arrowLeft.style.display = 'none';
  let slide = 0;
  let count = document.querySelectorAll('.carousel__slide').length
  arrowRight.addEventListener('click', function () {
    slide = slide + width;
    if (slide > -width) {
      arrowLeft.style.display = '';
    }
    if (slide >= width * (count - 1)) {
      arrowRight.style.display = 'none';
    }
    console.log(slide, width * (count - 1), count);
    carouselInner.style.transform = `translateX(${-slide + 'px'})`;
  })

  arrowLeft.addEventListener('click', function () {
    slide = slide - width;
    if (slide < width * (count - 1)) {
      arrowRight.style.display = '';
    }
    if (slide <= 0) {
      arrowLeft.style.display = 'none';
    }
    carouselInner.style.transform = `translateX(${-slide + 'px'})`;
  })
}
