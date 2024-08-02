let currentIndex = 0;
const slides = document.querySelectorAll('.slide-img');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlides();
});

document.getElementById('prev').addEventListener('click', function () {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlides();
});

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
} 


$(function() {
	$('.demo img:gt(0)').hide();
	setInterval(function(){
      $('.demo :first-child').fadeOut(1000) //FadeOut là ảnh đang hiện
      .next('img').fadeIn(1000) //fadeIn ảnh tiếp theo
      .end().appendTo('.demo'); // chuyển vị trí ảnh xuống cuối
  	}, 6000);
})


//slide show 2



 