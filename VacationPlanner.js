var name = window.prompt("Welcome to the Vacation Planner. Please enter your name:");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;
var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;

function calculateDays(){
var daysInput = document.getElementById("days");
var days = daysInput.value;
var daysMessage = document.getElementById("daysMessage");
var daysNan = isNaN(days);

  if (daysNan == true){
    window.alert("This is not a valid number. Please try again.");
}
  else if (days < 4){
    daysMessage.innerHTML = "Short trips are always worth it!";
} 
  else if (days >= 4 && days <=6){
    daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
}
  else{
    daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
}

var hours = days * 24;
var minutes = hours * 60;
var seconds = minutes * 60;

var hoursMessage = document.getElementById("hoursMessage");
var minutesMessage = document.getElementById("minutesMessage");
var secondsMessage = document.getElementById("secondsMessage");

hoursMessage.innerHTML = "You will be traveling for " + hours + " hours.";
minutesMessage.innerHTML = "You will be traveling for " + minutes + " minutes.";
secondsMessage.innerHTML = "You will be traveling for " + seconds + " seconds.";

var timingNext = document.getElementById("timingNext");
timingNext.removeAttribute("hidden");
}

timingNext.onclick = function(){
  document.getElementById("budgetSection").removeAttribute("hidden");
}


var budgetButton = document.getElementById("enterBudget");
budgetButton.onclick = calculateBudget;

function calculateBudget(){
var budget = document.getElementById("tripBudget").value;
var exchangeRate = .81;
var days = document.getElementById("days").value;
var tripBudget = budget * exchangeRate;
var dailyBudget = tripBudget / days;
var exchange10 = 10 * exchangeRate;
var exchange500 = 500 * exchangeRate;
var budgetNan = isNaN(budget);

  if (budgetNan == true){
    window.alert("This is not a valid number. Please try again.");
}

document.getElementById("tripExchangeMsg").innerHTML = "That means you'll need " + tripBudget.toFixed(2) + " EUR for your trip.";
document.getElementById("dailyExchangeMsg").innerHTML = "That means you'll need " + dailyBudget.toFixed(2) + " EUR per day.";
document.getElementById("exchange10Msg").innerHTML = "You'll need " + exchange10.toFixed(2) + " EUR for an item that would cost you 10 USD.";
document.getElementById("exchange500Msg").innerHTML = "You'll need " + exchange500.toFixed(2) + " EUR for an item that would cost you 500 USD.";
}

var images = ["Images/franceimage1.jpg", "Images/franceimage2.jpg", "Images/franceimage3.jpg", "Images/franceimage4.jpg"];
var currentImage = 0;
setInterval(changeImage, 3000);

function changeImage(){
  currentImage++;
  if(currentImage > images.length - 1){
    currentImage = 0;
  }
document.body.style.background = 'url(' + '"' + images[currentImage] + '"' + ') no-repeat center center fixed;';
document.body.style.backgroundSize = "100% 100%;";
}