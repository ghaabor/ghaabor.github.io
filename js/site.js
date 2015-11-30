$(function(){
  $("p#name").css("visibility", "visible").animate(
    {opacity: 1.0}, 2000, function(){
      $("span.name").typed({
        strings: ["g^200ab^150or_^100taka^250cs"],
        typeSpeed: 150,
        startDelay: 1000,
        cursorChar: "_", 
        callback: function(){
          var timeOffset = 500;
          $(".social-link").each(function(){
            $(this).delay(timeOffset).css("visibility", "visible").animate(
              {opacity: 1.0}, 500
            );
            timeOffset += 750;
          });
        }
      });
  });
});
