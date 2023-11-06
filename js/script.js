let fundoPreto = document.getElementById('fundoPreto');
let botao = document.getElementById('botao');
let desativado = true;

let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let cifrao = document.getElementById('cifrao');

let pathBotao = document.querySelectorAll('.path-botao');

let credMes = document.getElementById('credmes');

let inputValorCredito = document.getElementById('valor');

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
    if(valor == 'NaN') inputValorCredito.value = '';
}

inputValorCredito.addEventListener('input', () => {
    if(inputValorCredito.value.length === 0)
        inputValorCredito.classList.remove('input-focus');
    else
        inputValorCredito.classList.add('input-focus');
});

botao.addEventListener('click', () => {
    if(desativado) {
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

        desativado = false;
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

        desativado = true;
    }
});

