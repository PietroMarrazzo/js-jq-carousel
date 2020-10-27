$(document).ready(function() {
    // acquisisco variabili clickabili
    var btnPrev = $('.prev i'); 
    var btnNext = $('.next i');
    var circle = $('.nav i');



    btnPrev.click(function() {

        scorrimentoImg('prev');
        
    });

    btnNext.click(function() {

        scorrimentoImg('next');
        
    });


    // funzioni
    function scorrimentoImg(direction) {

        var activeImg = $('.images img.active');
        var activeCircle = $('.nav i.active');

        // reset
        activeImg.removeClass('active');
        activeCircle.removeClass('active');

        // next img & circle
        if (direction === 'next') {
            
            if (activeImg.hasClass('last')) {
                $('.images img.first').addClass('active');
                $('.nav i.first').addClass('active');
            } 
            else {
                activeImg.next('img').addClass('active');
                activeCircle.next('i').addClass('active');
            }
        }
        
        // prev img & circle
        if (direction === 'prev') {

            if (activeImg.hasClass('first')) {
                $('.images img.last').addClass('active');
                $('.nav i.last').addClass('active');
            } 
            else {
                activeImg.prev('img').addClass('active');
                activeCircle.prev('i').addClass('active');
            }
        }
    }

});



