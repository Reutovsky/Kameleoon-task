function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random = getRandom(1, 100);
var message = document.getElementById('message');

console.log(random);

var trys = 0;

document.getElementById('button').addEventListener('click', function(){
  var textInput = document.getElementById('textInput').value;
  if (textInput) {
    if (textInput < random) {
      message.innerHTML = 'Too Low';
      trys++;
    } else if (textInput > random) {
      message.innerHTML = 'Too high';
      trys++;
    } else {
      trys++;
      message.innerHTML = 'You found the number, Attempts: ' + trys;
    }
  } else {
    message.innerHTML = 'Please enter the number in text input';
  }
});
