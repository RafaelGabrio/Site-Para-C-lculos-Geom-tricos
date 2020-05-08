function escolha() {
    
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
}