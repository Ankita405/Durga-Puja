document.addEventListener("DOMContentLoaded", function() {

  // Modal close function (unchanged)
  window.closeModal = function() {
    var modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  };

  // Image Carousel (modified for 9 images and smooth transitions)
  const carouselContainer = document.getElementById('carousel');
  const slides = carouselContainer.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentSlide = 0;

  function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[n].style.display = 'block';
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);


  // Campus Carousel (modified for dynamic item width and resizing)
  const campusCarouselSlide = document.querySelector('.carousel-slide');
  const campusItems = document.querySelectorAll('.campus-item');
  const campusPrevBtn = document.querySelector('.prev-btn');
  const campusNextBtn = document.querySelector('.next-btn');
  let campusCounter = 0;
  let campusItemWidth = campusItems[0].offsetWidth + 20;

  function updateCampusCarousel() {
    campusCarouselSlide.style.transform = 'translateX('+ (-campusCounter * campusItemWidth) + 'px)';
  }

  updateCampusCarousel(); // Initial call to set the correct position

  campusNextBtn.addEventListener('click', () => {
    campusCounter = (campusCounter + 1) % campusItems.length;
    updateCampusCarousel();
  });

  campusPrevBtn.addEventListener('click', () => {
    campusCounter = (campusCounter - 1 + campusItems.length) % campusItems.length;
    updateCampusCarousel();
  });

  window.addEventListener('resize', () => {
    campusItemWidth = campusItems[0].offsetWidth + 20;
    updateCampusCarousel();
  });
});




// carouselSlide.style.transform = 'translateX(' + (-counter * itemWidth) + 'px)';
