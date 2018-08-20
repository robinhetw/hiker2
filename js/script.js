$(document).ready(function() {
  $(".js--about").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky-nav");
      } else {
        $("nav").removeClass("sticky-nav");
      }
    },
    {
      offset: "100px;"
    }
  );

  /*js-mobile-nav */
  
  $('.js-mobile-nav').click(function(){
     var nav = $('.js-header-ul');
     var icon = $('.js-mobile-nav i');

     nav.slideToggle(200);

     if (icon.hasClass('ion-md-menu')) {
        icon.addClass('ion-md-close');
        icon.removeClass('ion-md-menu');
      } else {
        icon.addClass('ion-md-menu');
        icon.removeClass('ion-md-close ');
      }

  });


  /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      })
      */
});
