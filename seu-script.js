function compararValores (){


    //obtem valores A e B

    var valorA = document.getElementById('inputA').value;
    var valorB = document.getElementById('inputB').value;

    //Converte para numeros
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    var msg = '';
    // verificar e exibir valor 

    if (!isNaN(valorA) && !isNaN(valorB)) {
        if (valorA > valorB) {
            msg = 'O valor em A é maior.';
        } else if (valorA < valorB) {
            msg = 'O valor em B é maior.';
        } else {
            msg = 'Os valores são iguais.';
        }
    } else {
        msg = 'Por favor, insira valores numéricos válidos em ambas as entradas.';
    }
    exibirAlert(msg);
}




function exibirAlert(msg) {
  var custAlert = document.getElementById('custAlert');
  var styMsg = document.getElementById('styMsg');

  custAlert.style.display = 'block';
  styMsg.textContent = msg;
}

function fecharModal() {
  var custAlert = document.getElementById('custAlert');
  custAlert.style.display = 'none';
}