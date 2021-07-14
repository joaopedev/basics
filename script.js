// function esconder1(){
// var botao1 = document.getElementsByTagName('p');

// for( i = 0; i < botao1.length; i++){
//   botao1[i].style.visibility = 'hidden';
// }

// }

function esconder1() {
  var botao1 = document.querySelectorAll(`p`);
  botao1.forEach((botao1) => {
    botao1.style.visibility = "hidden";
  });
}
