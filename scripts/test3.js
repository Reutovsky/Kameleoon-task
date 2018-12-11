var root = document.getElementById('root');
for (var i = 1; i < 101; i++ ) {
  if ((i%3 === 0) && (i%5 === 0)) {
    root.innerHTML += ' A/B Testing ';
  } else if (i%3 === 0) {
    root.innerHTML += ' A/B ';
  } else if (i%5 === 0) {
    root.innerHTML += ' Testing ';
  } else {
    root.innerHTML += i;
  }
}