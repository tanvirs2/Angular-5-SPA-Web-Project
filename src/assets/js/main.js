//(function($) {

  $(document).ready(function () {
    "use strict";

    $('.navigation').singlePageNav({
      currentClass : 'active'
    });
    $('.toggle-menu').click(function(){
      alert('sadddd');
      $('.responsive-menu').stop(true,true).slideToggle();
      return false;
    });
  });

//})(jQuery);






