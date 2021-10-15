//navbar animation
const hamburg = $('#ham')
const navUl = $('#navul')

hamburg.on('click', function(){
    navUl.slideToggle(400);
    navUl.toggleClass('flex')
})

// Rock Paper Scissors

let choices = ["rock", "paper", "scissor"]

function game(e){
  const userInput = e.target.id;
  const randomNum = Math.floor(Math.random() * 3);
  const userIndex = choices.indexOf(userInput);
  console.log(userInput)
  console.log(userIndex)
  console.log(choices[randomNum])
  if (userIndex === randomNum) {
    $('#project3').append($(`<p class="gameMsg">Tie, I chose ${choices[randomNum]}. Try again.</p>`));
  } else if ((userIndex + 1)%3 === randomNum) {
    $('#project3').append($(`<p class="gameMsg">I chose ${choices[randomNum]}. You lose.</p>`));
    $('.button3').remove()
  } else {
    $('#project3').append($(`<p class="gameMsg">I chose ${choices[randomNum]}. You win!</p>`));
    $('.button3').remove()
  } 
}

$('#rock').on('click', game);
$('#paper').on('click', game);
$('#scissor').on('click', game);

//Form

$('form').on('submit', function(e){
  e.preventDefault()
  $('form').html("<h2>Thanks for the message,<br>I'll get back to you soon!</h2>")
})

//Scroll

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll)
  let scrollFloor = Math.floor(scroll/10)
  if (scrollFloor < 10 && scrollFloor > 0) {
    $('#bg-img').attr('src', `https://raw.githubusercontent.com/brian99na/project_1/main/Compressed/000${scrollFloor}-min.jpg`)
  } else if (scrollFloor < 100 && scrollFloor > 10){
    $('#bg-img').attr('src', `https://raw.githubusercontent.com/brian99na/project_1/main/Compressed/00${scrollFloor}-min.jpg`)
  }else if (scrollFloor > 100 && scrollFloor < 180){
    $('#bg-img').attr('src', 'https://raw.githubusercontent.com/brian99na/project_1/main/Compressed/0100-min.jpg')
  } else if (scrollFloor > 180 && scrollFloor < 221) {
    $('#bg-img').attr('src', `https://raw.githubusercontent.com/brian99na/project_1/main/Compressed/0${scrollFloor}-min.jpg`)
  } else if (scrollFloor > 220) {
    $('#bg-img').attr('src', `https://raw.githubusercontent.com/brian99na/project_1/main/Compressed/0220-min.jpg`)
  }
});
