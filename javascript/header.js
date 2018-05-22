$(document).ready(function() {
      // function() {
            
      // };
      var FixNavBar = $('.nav-bar').offset().top;
      var FixLogo = $('.logo').offset().top;
      var FixBagItem = $('.bag-item').offset().top;
      var stickyNav = function(){
      var scrollTop = $(window).scrollTop();
            if (scrollTop > FixNavBar) {
                  $('.sub-menu').addClass('fix-submenu');
                  $('.nav-bar').addClass('sticky');
                  $('.logo').addClass('hide');
                  $('.bag-item').addClass('fix-bag');
            }
            else {
                  $('.sub-menu').removeClass('fix-submenu');
                  $('.nav-bar').removeClass('sticky');
                  $('.logo').removeClass('hide');
                  $('.bag-item').removeClass('fix-bag');
            }
      };
      $(window).scroll(function() {
            stickyNav();
      });
      $('.bathroom').click(function(){
            window.location.href = 'https://www.google.com.vn';
      });     
      $('.living-room').click(function(){
            window.location.href = 'https://www.google.com.vn';
      });
      $('.dining-room').click(function(){
            window.location.href = 'https://www.google.com.vn';
      });
      $('.bed-room').click(function(){
            window.location.href = 'https://www.google.com.vn';
      });
      $('.office').click(function(){
            window.location.href = 'https://www.google.com.vn';
      });     
      $('.fa-bars').click(function(){
            $('.sub-menu').toggleClass('active-menu');
      });
      $('.brand-dropdown').click(function(){
            $('.drop-menu').toggleClass('active-dropdown');
      });
      $('.brand-dropdown-1').click(function(){
            $('.drop-menu-1').toggleClass('active-dropdown');
      });
      $("#send").click(function(){
            alert("Thank you")
      });
});
        