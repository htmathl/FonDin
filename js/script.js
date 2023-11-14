let fundoPreto = document.getElementById('fundoPreto');
let botao = document.getElementById('botao');
let desativadoFAB = true, desativadoCredRec = true, 
desativadoCredInd = true, desativadoContUteis = true, 
desativadoSomaUteis = true, cbsHover = 'cbs-hover';

let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let cifrao = document.getElementById('cifrao');

let pathBotao = document.querySelectorAll('.path-botao');

let credMes = document.getElementById('credmes');

let cbCreditoRecorrente = document.querySelector('.credito-recorrente');
let cbContDiasUteis = document.querySelector('.cont-dias-uteis');
let cbSomaDiasUteis = document.querySelector('.soma-dias-uteis');
let lgdCreditoDia = document.querySelector('.dia-cred');
let inpCreditoDia = document.querySelector('#dia-cred');

let divCredIndefinido = document.querySelector('.cb-cred-indefinido');
let cbCredIndefinido = document.querySelector('.indefinido-cred');

let inputValorCredito = document.getElementById('valor');

let divEntradas = document.querySelector('#entradas');
let btnVoltarAdicionarCred = document.getElementById('btn-voltar-cred'); 

let divEntradasCreditos = document.querySelector('#entradas-creditos');

function formatarMoeda() {
    var valor = inputValorCredito.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    inputValorCredito.value = valor;
    if(valor == 'NaN') {
        inputValorCredito.value = '';
        inputValorCredito.classList.remove('input-focus');
    }
}

inputValorCredito.addEventListener('input', () => {
    if(inputValorCredito.value.length === 0)
        inputValorCredito.classList.remove('input-focus');
    else
        inputValorCredito.classList.add('input-focus');
});

const data = new Date();
const hoje = data.getDate();
let mesAtual = 11;

const dicMes = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ];

for (let i = 0; i < dicMes.length; i++) {
    if(dicMes.indexOf(dicMes[i]) === mesAtual) mesAtual = dicMes[i];
}

lgdCreditoDia.innerText = mesAtual;

botao.addEventListener('click', () => {
    if(desativadoFAB) {
        pathBotao.forEach(e => {
            e.style.stroke = '#FFF2D8';
        });

        botao.style.transform = 'translate(50%) rotate(45deg)';
        botao.style.backgroundColor = '#113946';
        
        fundoPreto.classList.add('ativo');
        
        mais.style.right = '34vw';
        mais.style.bottom = '12.3vh';
        mais.style.transform = 'translate(50%) rotate(45deg)';
        
        menos.style.right = '66vw';
        menos.style.transform = 'translate(50%) rotate(45deg)';
        menos.style.bottom = '12.3vh';
        
        cifrao.style.bottom = '20vh';
        cifrao.style.transform = 'translate(50%) rotate(45deg)';

        
    } else {
        pathBotao.forEach(e => {
            e.style.stroke = '#113946';
        });

        botao.style.transform = 'translate(50%) rotate(0deg)';
        botao.style.backgroundColor = '#FFF2D8';
        
        fundoPreto.classList.remove('ativo');

        mais.style.right = '50vw';
        mais.style.bottom = '5vh';
        mais.style.transform = 'translate(50%) rotate(0)';
        
        menos.style.right = '50vw';
        menos.style.bottom = '5vh';
        menos.style.transform = 'translate(50%) rotate(0)';
        
        cifrao.style.bottom = '5vh';
        cifrao.style.transform = 'translate(50%) rotate(0)';
    }

    desativadoFAB = !desativadoFAB;
});

function toggleCheckBox(cb, desativado, texto) {
    desativado? cb?.classList.add(cbsHover) : cb?.classList.remove(cbsHover);
    texto? inpCreditoDia.setAttribute('placeholder', texto) : null;
    //recorrencia que pode ser útil pra qunado um precisar estar selecionado
    //null && desativado? toggleCheckBox(inverte, !desativado): null;
    return !desativado;
}

cbContDiasUteis.addEventListener('click', () => {
    desativadoContUteis = toggleCheckBox(cbContDiasUteis, desativadoContUteis);
    !desativadoSomaUteis? desativadoSomaUteis = toggleCheckBox(cbSomaDiasUteis, desativadoSomaUteis) : null;
});

cbSomaDiasUteis.addEventListener('click', () => {
    desativadoSomaUteis = toggleCheckBox(cbSomaDiasUteis, desativadoSomaUteis);
    !desativadoContUteis? desativadoContUteis = toggleCheckBox(cbContDiasUteis, desativadoContUteis) : null;
});

cbCreditoRecorrente.addEventListener('click', () => {
    desativadoSomaUteis = toggleCheckBox(cbSomaDiasUteis, false);
    if(!desativadoCredRec) {
        desativadoCredRec = toggleCheckBox(cbCreditoRecorrente, desativadoCredRec, 'Dia');
        cbSomaDiasUteis.setAttribute('id', 'cb-desativado');
        return;
    }
    desativadoCredRec = toggleCheckBox(cbCreditoRecorrente, desativadoCredRec, 'Todo dia');
    cbSomaDiasUteis.setAttribute('id', 'soma-dias-uteis');
});

//cbCredIndefinido
divCredIndefinido.addEventListener('click', () => {
    desativadoCredInd = toggleCheckBox(cbCredIndefinido, desativadoCredInd);
    desativadoCredRec = toggleCheckBox(cbCreditoRecorrente, false, 'Dia');
    desativadoSomaUteis = toggleCheckBox(cbSomaDiasUteis, false);
    if( !desativadoCredInd ) {
        cbCreditoRecorrente.setAttribute('id', 'cb-desativado');
        cbSomaDiasUteis.setAttribute('id', 'cb-desativado');
        return;
    }
    cbCreditoRecorrente.removeAttribute('id');
});

mais.addEventListener('click', () => {
    mais.classList.add('mais-active-transition');
    mais.classList.add('mais-active');

    setTimeout(() => {
        divEntradas.classList.add('entradas-active');
        setTimeout(() => { 
            divEntradasCreditos.style.display = 'block'; 
        }, 200);

    }, 500);
});

btnVoltarAdicionarCred.addEventListener('click', () => {
    divEntradas.classList.remove('entradas-active');
    divEntradasCreditos.style.display = 'none';

    setTimeout(() => {
        mais.classList.remove('mais-active');
        setTimeout(() => {
            mais.classList.remove('mais-active-transition');
        }, 100);

    }, 500);
});
