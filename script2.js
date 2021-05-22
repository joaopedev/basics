function calcularbt(){
    var n1 = document.getElementById('ip1');
    var op = document.getElementById('barraderola');
    var n2 = document.getElementById('ip2');
    
if(n1.value == ``){

    alert(`Filho da puta, faltou o numero 1 caralho`);
    n1.style.border = `2px solid red`;
    
}
if(n2.value == ``){
    
    alert(`Vai toma no cu, faltou o numero 2 o zé buceta`)
    n2.style.border = `2px solid red`;
    
}
if(op.value == ``){
    
    alert(`Faltou o Operações, corno`);
    op.style.border = `2px solid red`;

}  

if(op.value == '+'){ 

    
    document.getElementById('Result').value = +n1.value + +n2.value;
    

}
if(op.value == '-'){

    document.getElementById('Result').value = +n1.value - +n2.value;

}
if(op.value == '*'){

    document.getElementById('Result').value = +n1.value * +n2.value;

}
if(op.value == '/'){

    document.getElementById('Result').value = +n1.value / +n2.value;

}




}/*fechando function*/