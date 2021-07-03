/*global $ */
(function($) {
    "use strict";

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.mainMenu').toggleClass('opend');
        $('.navOverlay').addClass('opend');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('opend');
        $('.mainMenu').removeClass('opend');  
        $('body').removeClass('stopScroll');  
    });


    // // INPUT FOCUS ANIMATION 
    // $('.inputField input').focus(function(){
    //     $(this).parent('.inputField').addClass('focused');
    // });

    // $('.inputField input').each(function() { 
    //     if ($(this).val() != "") {
    //         $(this).parent('.inputField').addClass('focused');   
    //     }
    // });

    // $('.inputField input').focusout(function(){
    //     if($(this).val() === "")
    //     $(this).parent('.inputField').removeClass('focused');
    // });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

