
// canvas is the individual tile
// container is my parent container
// colorSpace is my box with all colors to be staged
// board is class in container


var color = '';  // holding the current value

    for(var i = 0; i < 3526; i++){
      var canvas=document.createElement('div');  // esch tile
      canvas.className='canvas';
      var board = document.getElementsByClassName('board')[0];
      board.appendChild(canvas);  // parent to append to
    }
    var colorSpace = document.getElementsByClassName('colorSpace')[0];
    colorSpace.addEventListener("click", function(event){
  color = event.target.style.backgroundColor;  //
   });

    var board = document.getElementsByClassName('board')[0]
    board.addEventListener("click", function(event){
    event.target.style.backgroundColor = color;
   });
