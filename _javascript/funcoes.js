let cont = 0;
let quad = document.getElementById('escQuad');
let triang = document.getElementById('escTriang');
let circ = document.getElementById('escCirc');
let retang = document.getElementById('escRetang');
let paral = document.getElementById('escParal');
let trap = document.getElementById('escTrap');

function escolha() {
    if (cont == 0){
        if(quad.click) {
            montaCalc(1);
        } else if (triang.click) {
            montaCalc(2);
        } else if (circ.click) {
            montaCalc(3);
        } else if (retang.click) {
            montaCalc(4);
        } else if (paral.click) {
            montaCalc(5);
        } else if (trap.click) {
            montaCalc(6);
        }
    } else if(true) {

    }
}

function selecao(escolha) {
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

    function montaCalc(opcao) {
        
    }
}