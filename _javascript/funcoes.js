let cont = 0;
let op = 'null';
let jsonVal = '';

function selecaoFig(escolha) {
    let img = document.getElementById('imgrepre');
    switch (escolha) {
        case 'quad':
            img.src = '../_imagens/quad.jpg';
            break;
        case 'triang':
            img.src = '../_imagens/triang.jpg';
            break;
        case 'circ':
            img.src = '../_imagens/circ.png';
            break;
        case 'retang':
            img.src = '../_imagens/retang.jpg';
            break;
        case 'paral':
            img.src = '../_imagens/paral.png';
            break;
        case 'trap':
            img.src = '../_imagens/trap.png';
            break;     
    }
    op = escolha;
    cont++;
    jsonVal = JSON.stringify(op);
    window.alert(`esc = ${JSON.parse(jsonVal)} cont = ${cont}`);
}

function selecionarOp() {
    window.alert('Chegou');
    var resul = JSON.parse(jsonVal);
    window.alert(`Retorno do cont = ${resul.op}`);
    switch(cont) {
        case 1:
            this.montaCalc();
            break;
    }
}

function montaCalc() {
    switch(op){
        case 'quad':
            window.alert('Passou no teste');
            break;
        case 'triang':
            img.src = '../_imagens/triang.jpg';
            break;
        case 'circ':
            img.src = '../_imagens/circ.png';
            break;
        case 'retang':
            img.src = '../_imagens/retang.jpg';
            break;
        case 'paral':
            img.src = '../_imagens/paral.png';
            break;
        case 'trap':
            img.src = '../_imagens/trap.png';
            break; 
    }
}

//Tudo que é do form
function habilitaEmailTel() {
    let caixaEmail = document.querySelector('input#txtEmail');
    let caixaTel = document.querySelector('input#txtTel');

    caixaEmail.removeAttribute('disabled');
    caixaTel.removeAttribute('disabled');
}

function desabilitaEmailTel() {
    let caixaEmail = document.querySelector('input#txtEmail');
    let caixaTel = document.querySelector('input#txtTel');

    caixaEmail.setAttribute('disabled', 'disabled');
    caixaTel.setAttribute("disabled", "disabled");
}