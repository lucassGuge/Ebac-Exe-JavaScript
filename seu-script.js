function compararValores (){


    //obtem valores A e B

    var valorA = document.getElementById('inputA').value;
    var valorB = document.getElementById('inputB').value;

    //Converte para numeros
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    
    // verificar e exibir Valido ou Invalido

    if (!isNaN(valorA) && !isNaN(valorB)) {
        if (valorB > valorA) {
            alert('Formulário válido: O valor de B é maior que o valor de A!');
        } else {
            alert('Formulário inválido: O valor de B deve ser maior que o valor de A!');
        }
        return valorB > valorA;
    } else {
        alert('Digite valores válidos nos campos!');
        return false;
    }    
}