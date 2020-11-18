$('.list-hide').hide();
$( document ).ready(function(){


if($(window).width()<=680)
{
    $('.list').hide();
    $('#Buttons-nav').hide();
    
    $('#menu_butt').click(function(){
        $('.list-hide').slideToggle(500)
    })
}
})



