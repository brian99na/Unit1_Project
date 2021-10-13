const hamburg = $('#ham')
const navUl = $('#navul')

hamburg.on('click', function(){
    console.log('hello');
    navUl.toggleClass('flex')
})