$(document).ready(function () {

    $('input.focus').focus();

    inputEvents();
});


function inputEvents()
{
    var target = $('.button').find('span');
    $('input[type="text"]').keydown(function(e){
        if( e.which == 32)
        {
            target.click();
        }
        else if( e.which >= 48 && e.which <= 57 || 
                e.which >= 37 && e.which <= 40  || 
                e.which == 46 || e.which == 8   || 
                e.which >= 33 && e.which <= 35  ||
                e.which >= 96 && e.which <= 105
        ){
            // number, arrow, delete
        }else
        {  
            // wtf
            e.preventDefault();
        }
    });

    var input = $('input[type="text"]');
    target.click(function(){

        var raw_input = $.trim(input.val());

        if(!isNaN(raw_input))
        {
            var num = parseInt(raw_input);
            $('.result').text(num);
        }
    });    
}