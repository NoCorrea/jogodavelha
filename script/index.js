/* CODIGO FEITO NA AULA- const game = {
currentMove:'x'
}
function getField(fieldNumber) {
  const $field = document.querySelector('.scenery-field- ' +fieldNumber)

 return $field
}
function toggleCurrentMove(){
if (game.currentMove = 'x'){
    game.currentMove = 'o'
} else if (game.currentMove ='o'){
    game.currentMove ='x'
}
}

for (let i = 0; i < 9; i++) {
    const $field = getField(i)

    $field.addEventListener('click', function(){
     $field.textContent = game.currentMove 
     toggleCurrentMove()  
    })*/

    /* CODIGO FORNECIDO PELO CHAT GPT-const game = {
        currentMove: 'x'
    }
    
    function getField(fieldNumber) {
        const $field = document.querySelector('.scenery-field-' + fieldNumber);
        return $field;
    }
    
    function toggleCurrentMove() {
        if (game.currentMove === 'x') {
            game.currentMove = 'o';
        } else if (game.currentMove === 'o') {
            game.currentMove = 'x';
        }
    }
    
    for (let i = 0; i < 9; i++) {
        const $field = getField(i);
    
        $field.addEventListener('click', function() {
            $field.textContent = game.currentMove;
            toggleCurrentMove();
        });
    }*/



/*function plotx (){
    $field0.innerHTML='x'
} obs: função a ser realizada de forma autônoma sem ser
inserida dentro do addEventListener*/



/*const $field0 = document.querySelector(".scenery-field-0")

$field0.addEventListener('click', function(plotx){
    $field0.innerHTML='x'
} ) obs: script que seleciona 'scenery-field-0' e plota 'x'*/


/* OUTRO CODIGO FORNECIDO PELO CHAT GPT*/
// Seleciona todos os elementos com a classe scenery-field
const $fields = document.querySelectorAll(".scenery-field");

// Variável para rastrear o estado atual
let currentPlayer = 'x';

// Adiciona um event listener para cada campo
$fields.forEach(function($field) {
    $field.addEventListener('click', function() {
        // Verifica o estado atual da caixa
        const currentState = $field.dataset.state || '';
        
        // Alterna entre 'x' e '?'
        if (currentState === 'x') {
            $field.textContent = '?';
            $field.dataset.state = '?';
        } else {
            $field.textContent = 'x';
            $field.dataset.state = 'x';
        }
    });
});
