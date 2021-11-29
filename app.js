var countDownDate = new Date("dec 3, 2021 14:34:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var timeLeft = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector(".days").innerHTML = `0${days}`;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".mins").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (timeLeft < 0) {
    clearInterval(x);
    const show = document.querySelector(".expire")
    const deadline = document.querySelector('.deadline')
    show.classList.add('show-expire')
    show.innerHTML = "GIVEAWAY-EXPIRED";
    deadline.classList.add('deadline-hide')
  }
}, 1000);
