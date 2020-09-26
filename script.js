$(document).ready(function()
{
    $(".next").on('click', function()
    {
        var current = $('.current');
        var next = current.next();
  
        if(next.length)
        {
          current.removeClass('current').css('z-index', -10);
          next.addClass('current').css('z-index',10);
        }
    });
    $(".prev").on('click', function()
    {
        var current = $('.current');
        var prev = current.prev();
  
        if(prev.length)
        {
          current.removeClass('current').css('z-index', -10);
          prev.addClass('current').css('z-index',10);
        }
    });
});
