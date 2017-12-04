import $ from 'jQuery';

$(document).ready(function() {
    var alert = $('.module-flashmessage');
    
    if (alert.length > 0) {
        alert.hide().slideDown(500);
        
        alert.click(function() {
            $(this).slideUp();
        });
        
        setTimeout(function() {
            $(".module-flashmessage").slideUp();
        }, 10000);
        
        setTimeout(function() {
            $(".module-flashmessage").remove();
        }, 12000)
    }
});