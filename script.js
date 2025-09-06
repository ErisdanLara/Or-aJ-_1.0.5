

//const abrir = document.querySelector('#newiten')
//const fechar = document.querySelector('#sair')

function abrirVentana() {
    document.querySelector('.ventana').style.display = 'block'
}

function fecharVentana() {
    document.querySelector('.ventana').style.display = 'none'
}

///////////////////////////PRENCHER OS ITENS/////////////////////

// Inicializando uma variável para armazenar o total
let total = 0;

// Função para adicionar um item ao orçamento
function adicionarItem() {
    // Capturando os valores dos inputs
    const item = document.getElementById("item").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const valor = parseFloat(document.getElementById("valor").value);

    // Verificando se os campos estão preenchidos
    if (item === "" || isNaN(quantidade) || isNaN(valor) || quantidade <= 0 || valor <= 0) {
        alert("Por favor, preencha todos os campos corretamente."); // Alerta se algum campo estiver incorreto
        return; // Sai da função
    }

    // Calculando o custo do item
    const custoItem = quantidade * valor;

    // Atualizando o total
    total += custoItem;

    // Adicionando o item à lista
    const lista = document.getElementById("listaOrcamento");
    const li = document.createElement("li");
    li.textContent = `${item}: ${quantidade} x R$ ${valor.toFixed(2)} = R$ ${custoItem.toFixed(2)}`;
    lista.appendChild(li);

    // Atualizando o total exibido
    document.getElementById("total").textContent = total.toFixed(2);

    // Limpando os campos de entrada
    document.getElementById("item").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("valor").value = "";
}
function limparTudo() {
    window.location.reload()
}

const btngerarpdf = document.querySelector('#gerarpdf')

btngerarpdf.addEventListener("click", () => {

    
    // const nomeClient = document.getElementById('#nome').value;
    // const telefon = document.getElementById('#tel').value;

    // document.getElementById("#nomeCliente").textContent = nomeClient;
    // document.getElementById("#telefone").textContent = telefon;

    const previw = document.querySelector('#previw');

    const options = {
        margin: [10, 10, 10, 10],
        filename: `Cliente: ${(nome).value}.pdf`,
        html2canvas: {scale: 2},
        jspdf: {unit: "mn", format: "a4", orientation: "portrait"}
    }

    html2pdf().set(options).from(previw).save();

    
})