var candidates = ["KLG","手工面","孫媽媽","八方","老家前門","老家後門","XO面","國王","鐵板燒","三國","滷味（重抽）","燒臘","中餐廳(重抽)","seven","偽八方","日本料理","MOS","麥噹噹(Maxis :D)","casa (Dr.Virk)","subway","真肯德基","異國noodle","絕食","西瓜麵店"];

$(document).ready(function () {

    $('input.focus').focus();

    // $.getJSON('data/restaurants.json', function(candidates){
    console.log(candidates);
    bindInputEvents();
    // });
});

// will pop all the elements in the origin list
function shuffle(list)
{
    var shuffled = [];

    while(list.length)
    {
        var idx = Math.round(Math.random()*(list.length-1));
        if(idx > -1)
        {
            var ele = list.splice(idx, 1)[0];
            shuffled.push(ele);
        }
    }
    list = shuffled;
    return shuffled;
}

function choice(list, num)
{
    // var idx = Math.round(Math.random()*(list.length-1));
    return list[num%list.length];
}



function bindInputEvents()
{
    var target = $('.button').find('span');

    $('input[type="text"]').keydown(function(e){
        if( e.which == 32)
        {
            // target.click();
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

        var num = parseInt(raw_input);

        if(isNaN(num))
        {
            // clear current
            $('.result').slideUp(100);

        }else
        {
            
            candidates = shuffle(candidates);
            var res = choice(candidates, num);
            $('.result').slideUp(100, function(){
                $('.result').text(res);
                
            }).slideDown(250, function(){
                var audio = document.getElementsByTagName('audio')[0];
                audio.play();
            });
            
        }

    });    
}