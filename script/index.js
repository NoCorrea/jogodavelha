const game {
currentMOve:'x'
}
function getField(fieldNumber) {
  const $field = document.querySelector('.scenery-field- ' + fieldNumber) 

  return $field
}
function toggleCurrentMove(){
if (game.currentMove == 'x'){
    game.currentMOve = 'o'
} else if (game.currentMOve =='o'){
    game.currentMOve ='x'
}
}

for (let i = 0; i < 9; i++) {
    const $field = getField(i)

    $field.addEventListener('click', function(){
     $field.textContent = game.currentMOve 
     toggleCurrentMove()  
    })
}