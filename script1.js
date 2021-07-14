// function mostrarbt(){
// var botao2 = document.getElementsByTagName('p')

// for(var i = 0; i <botao2.length ; i++){
//     botao2[i].style.visibility = 'visible';

//    }

// }

function mostrarbt() {
  var botao2 = document.querySelectorAll(`p`);
  botao2.forEach((botao2) => {
    botao2.style.visibility = "visible";
  });
}
