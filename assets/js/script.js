(function ($) {
  'use strict';
  /*--------------------------------
	 Start Preloader Animation
	----------------------------------*/
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  /*--------------------------------
			End Preloader Animation
		----------------------------------*/

  // -----------------------------
  //  Count Up
  // -----------------------------
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate(
          {
            countNum: countTo
          },
          {
            duration: 1000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            }
          }
        );
      });
    }
  }
  // -----------------------------
  //  On Scroll
  // -----------------------------
  $(window).on('scroll', counter);

  /*--------------------------------
	 Start Smooth Scrolling
	----------------------------------*/
  function smoothScroll() {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .on('click', function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') ==
            this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate(
              {
                scrollTop: target.offset().top
              },
              1000,
              'easeInOutExpo',
              function () {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(':focus')) {
                  // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                }
              }
            );
          }
        }
      });
    jQuery.extend(jQuery.easing, {
      easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    });
  }
  // Applying Smooth Scroll When The Browser Is Not Opera Mini Or UC Browser
  if (
    navigator.userAgent.indexOf('Opera Mini') == -1 ||
    navigator.userAgent.indexOf('UCBrowser') != -1
  ) {
    smoothScroll();
  }
  /*--------------------------------
			End Smooth Scrolling
	----------------------------------*/

  /*--------------------------------
	 Start Header
		----------------------------------*/
  // Toggle Fullscreen Navigation
  $('#burger').on('click', function () {
    $('.fullscreen-nav-container').slideToggle(300);
  });
  $('.fullscreen-nav-holder a, .turn-home').on('click', function () {
    $('#burger').trigger('click');
  });
  /*--------------------------------
		 End Header
	----------------------------------*/

  /*--------------------------------
	Start Menu
	----------------------------------*/

  $('.menu-item').each(function () {
    const link = $(this).find('a').attr('href');
    const linkNoAnchor = link.includes('#') ? link.split('#')[0] : link;
    const path = window.location.pathname;
    const locationNoTrailing =
      path.endsWith('/') && path.length > 1
        ? path.substr(0, path.length - 1)
        : path;
    if (locationNoTrailing === linkNoAnchor) {
      this.classList.add('active');
    }
  });

  function toggleLogoImg(id) {
    var img = document.getElementById(id).src;
    if (img.indexOf('logo-dark.svg') != -1) {
      document.getElementById(id).src = '/images/logo.svg';
    } else {
      document.getElementById(id).src = '/images/logo-dark.svg';
    }
  }

  // Styling Menu on Scroll
  if (window.location.pathname === '/') {
    $('.about-me').waypoint({
      handler: function (direction) {
        // Changing Menu background after leaving Header Section
        $('.menu-container').toggleClass('menu-normal');
        $('.menu-item').toggleClass('menu-item-transparent');
        $('.desktop-menu .hvr-underline-from-left').toggleClass('dark');
        // Toggle Logo
        toggleLogoImg('desktop-logo');
        // Toggling Mobile Menu Visibility
        $('.mobile-menu').toggleClass('mobile-menu-fix');
        // Auto-Collapsing Mobile Menu When Left Open
        var a = $('.menu-link').attr('class');
        if (direction == 'up' && a == 'menu-link active') {
          $('.menu-link').trigger('click');
        }
      },
      // make header turn white just before it reaches about me section
      offset: $('.menu-container').innerHeight() + 25
    });
  } else {
    // Changing Menu background after leaving Header Section
    $('.menu-container').addClass('menu-normal');
    $('.menu-item').addClass('menu-item-transparent');
    $('.desktop-menu .hvr-underline-from-left').addClass('dark');
    // Toggle Logo
    toggleLogoImg('desktop-logo');
    // Toggling Mobile Menu Visibility
    $('.mobile-menu').addClass('mobile-menu-fix');
  }

  // Toggle Mobile Menu
  $('.mobile-menu a.menu-link').on('click', function () {
    $('.menu-link').toggleClass('active');
    $('.menu-slider').slideToggle(500);
  });
  /*--------------------------------
			 End Menu
	----------------------------------*/

  /*--------------------------------
			Start About Me
	----------------------------------*/
  // Initializing Skillbar Animation
  $('.skill h2').waypoint({
    handler: function (direction) {
      if (direction == 'up') {
        $('.skillbar').each(function () {
          $(this).find('.skillbar-bar').css('width', '0');
        });
      } else if (direction == 'down') {
        $('.skillbar').each(function () {
          $(this)
            .find('.skillbar-bar')
            .animate(
              {
                width: jQuery(this).attr('data-percent')
              },
              2000
            );
        });
      }
    },
    offset: 'bottom-in-view'
  });
  /*--------------------------------
			End About Me
	----------------------------------*/

  /*--------------------------------
			 Start Portfolio
	----------------------------------*/

  /*--------------------------------
			 End Portfolio
	----------------------------------*/

  /*--------------------------------
			 Start Testimonials
	----------------------------------*/
  /*--------------------------------
			End Testimonials
	----------------------------------*/

  /*--------------------------------
			Start Code for Mobile Devices
	----------------------------------*/
  // Code for Opera Mini
  if (navigator.userAgent.indexOf('Opera Mini') != -1) {
    // Setting Fun Facts Value Immediately
    work.start();
    happyClient.start();
    projects.start();
    coffee.start();
    // Setting Skillbar Value Immediately
    $('.skillbar').each(function () {
      $(this)
        .find('.skillbar-bar')
        .animate(
          {
            width: jQuery(this).attr('data-percent')
          },
          0
        );
    });
    // Removing Bootstrap Class and Re-Style Input
    $('input').removeClass('form-control');
    $('input').css({
      width: '100%',
      height: '50px',
      background: '#fff'
    });
    // Removing Full-Screen Nav
    $('.navigation-icon').css('display', 'none');
  }

  // Code For UC Browser
  if (navigator.userAgent.indexOf('UCBrowser') != -1) {
    // Removing Full-Screen Nav
    $('.navigation-icon').css('display', 'none');
    $('.fun-facts').css({
      display: 'table',
      margin: 'auto'
    });
    // Setting Fun Facts Value Immediately
    work.start();
    happyClient.start();
    projects.start();
    coffee.start();
    // Setting Skillbar Value Immediately
    $('.skillbar').each(function () {
      $(this)
        .find('.skillbar-bar')
        .animate(
          {
            width: jQuery(this).attr('data-percent')
          },
          0
        );
    });
  }
  /*--------------------------------
			End Code for Mobile Devices
	----------------------------------*/

  /*--------------------------------
			Others
	----------------------------------*/
  // Code for Internet Explorer
  if (
    navigator.appName == 'Microsoft Internet Explorer' ||
    !!(
      navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)
    ) ||
    (typeof $.browser !== 'undefined' && $.browser.msie == 1)
  ) {
    $('.header, .fullscreen-nav-container, .like-me, .contact').css(
      'background-attachment',
      'scroll'
    );
    $('.fullscreen-nav-holder').css('width', '100vw');
  }
  /*--------------------------------
			Others
  ----------------------------------*/
  $('#current-year').html(new Date().getFullYear());
})(jQuery);
