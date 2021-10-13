const hamburg = $('#ham')
const navUl = $('#navul')

hamburg.on('click', function(){
    navUl.slideToggle(400);
    navUl.toggleClass('flex')
})