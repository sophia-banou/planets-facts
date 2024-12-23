$(document).ready(function () {
  $(".act").on({
    click: function (e) {
      e.preventDefault();
    },
  });

  function resizeImages() {
    const img = $(".plimg");
    if ($(window).width() <= 600) {
      img.each(function () {
        const naturalWidth = this.naturalWidth;
        const naturalHeight = this.naturalHeight;
        $(this).css({
          width: `${naturalWidth * 0.38}px`,
          height: `${naturalHeight * 0.38}px`,
        });
      });
    } else {
      img.each(function () {
        $(this).css({
          width: "",
          height: "",
        });
      });
    }
  }

  // Run on load
  resizeImages();

  // Run on window resize
  $(window).resize(resizeImages);
});

$(document).ready(function () {
  const $mobileMenu = $("#mobile-menu");
  const $hamburger = $("#hamburger");
  const headerHeight = $("#header").outerHeight();

  $hamburger.on("click", function () {
    if ($(this).hasClass("hamb-active")) {
      $(this).removeClass("hamb-active");
      $(this).attr("src", "../images/icon-hamburger.svg");
      $mobileMenu.css("bottom", `calc(100vh + ${headerHeight}px)`);
      $mobileMenu.hide();
      $("body").css("position", "static");
    } else {
      $(this).addClass("hamb-active");
      $(this).attr("src", "../images/icon-hamburger-active.svg");
      $("body").css("position", "fixed");
      $mobileMenu.show();
      $mobileMenu.css("bottom", 0);
    }
  });

  $(window).on("resize", function () {
    if ($hamburger.hasClass("hamb-active")) {
      $hamburger.removeClass("hamb-active");
      $hamburger.attr("src", "../images/icon-hamburger.svg");
      $mobileMenu.css("bottom", `calc(100vh + ${headerHeight}px)`);
      $mobileMenu.hide();
      $("body").css("position", "static");
    }
  });

  $("a").on("click", function () {
    if ($hamburger.hasClass("hamb-active")) {
      $hamburger.removeClass("hamb-active");
      $hamburger.attr("src", "../images/icon-hamburger.svg");
      $mobileMenu.css("bottom", `calc(100vh + ${headerHeight}px)`);
      $mobileMenu.hide();
      $("body").css("position", "static");
    }
  });
});
