$(document).ready(function () {
  $("#toRateEvent").click(function (e) {
    e.preventDefault();
    $(".toRateEL").slideDown();
    $(this).hide();
  });
  $(".closeRating").click(function (e) {
    e.preventDefault();
    $(".toRateEL").hide();
    $("#toRateEvent").show();
  });
  
  var swiper = new Swiper(".FavSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // 1024: {
      //   slidesPerView: 5,
      //   spaceBetween: 50,
      // },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".newsSwiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // count up
  let counterUp = window.counterUp["default"];
  let $counters = $(".counter");
  $counters.each(function (ignore, counter) {
    let waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 2000,
          delay: 10,
        });
        // this.destroy();
      },
      offset: "bottom-in-view",
    });
  });
});
