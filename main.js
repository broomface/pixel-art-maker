
var color = '';

    for(var i = 0; i < 3526; i++){
      var canvas=document.createElement('div');
      canvas.className='canvas';
      var container = document.getElementsByClassName('board')[0];
      container.appendChild(canvas);
    }
    var colorSpace = document.getElementsByClassName('colorSpace')[0];
    colorSpace.addEventListener("click", function(event){
  color = event.target.style.backgroundColor;
   });

    var board = document.getElementsByClassName('board')[0]
    board.addEventListener("click", function(event){
    event.target.style.backgroundColor = color;
   });
