document.addEventListener('DOMContentLoaded', function(){
  var buttonShowHide = document.getElementById('button');
  var header = document.getElementById('header');

  buttonShowHide.addEventListener('click', function(){
    if (header.classList.contains('display-none')) {
      header.classList.remove('display-none');
    } else {
      header.classList.add('display-none');
    }
  });
});