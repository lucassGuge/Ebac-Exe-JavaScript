window.onload = function() {
    var formAtividade = document.getElementById("formAtividade");
    formAtividade.addEventListener("submit", adicionarAtividade);
    
    var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    var data = localStorage.getItem('tabelaAtividades');
    if (data) {
        tabela.innerHTML = data;
    }
};

function adicionarAtividade(event) {
    event.preventDefault();
    var atividadeInput = document.getElementById("atividade");
    var notaInput = document.getElementById("nota");

    var atividade = atividadeInput.value;
    var nota = notaInput.value;
    var aprovado = nota >= 6 ? 'Sim' : 'Não';

    var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    var newRow = tabela.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = atividade;
    cell2.innerHTML = nota;
    cell3.innerHTML = aprovado;

    localStorage.setItem('tabelaAtividades', tabela.innerHTML);

    atividadeInput.value = "";
    notaInput.value = "";
}
