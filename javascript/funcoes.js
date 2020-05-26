let cont = 0;
let jsonVal = '';

function selecaoFig(escolha) {
    let img = document.getElementById('imgrepre');
    switch (escolha) {
        case 'quad':
            img.src = '../img/quad.jpg';
            break;
        case 'triang':
            img.src = '../img/triang.jpg';
            break;
        case 'circ':
            img.src = '../img/circ.png';
            break;
        case 'retang':
            img.src = '../img/retang.jpg';
            break;
        case 'paral':
            img.src = '../img/paral.png';
            break;
        case 'trap':
            img.src = '../img/trap.png';
            break;     
    }
    
    sessionStorage.setItem('escolha', escolha);
    sessionStorage.setItem('cont', cont);
    //window.alert(`esc = ${JSON.parse(jsonVal)} cont = ${cont}`);
}

function selecionarOp() {
    let contTemp = Number(sessionStorage.getItem('cont'));
    contTemp++;
    sessionStorage.setItem('cont', contTemp);
    switch(contTemp) {
        case 1:
            this.montaCalc();
            break;
        case 2:
            this.efetuaCalc();
    }
}

function montaCalc() {
    switch(sessionStorage.getItem('escolha')){
        case 'quad':
            let iframe = document.querySelector('#iframeInteracao');
            iframe.setAttribute('src', 'escolha.html#calcQuad');
            break;
        case 'triang':
            img.src = '../img/triang.jpg';
            break;
        case 'circ':
            img.src = '../img/circ.png';
            break;
        case 'retang':
            img.src = '../img/retang.jpg';
            break;
        case 'paral':
            img.src = '../img/paral.png';
            break;
        case 'trap':
            img.src = '../img/trap.png';
            break; 
    }
}

function efetuaCalc() {
    switch(sessionStorage.getItem('escolha')){
        case 'quad':
            
            window.alert(document.getElementById("baseQuad"));
            break;
        case 'triang':
            img.src = '../img/triang.jpg';
            break;
        case 'circ':
            img.src = '../img/circ.png';
            break;
        case 'retang':
            img.src = '../img/retang.jpg';
            break;
        case 'paral':
            img.src = '../img/paral.png';
            break;
        case 'trap':
            img.src = '../img/trap.png';
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