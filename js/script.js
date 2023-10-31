let fundoPreto = document.getElementById('fundoPreto');
let botao = document.getElementById('botao');
let desativado = true;

let mais = document.getElementById('mais');
let menos = document.getElementById('menos');
let cifrao = document.getElementById('cifrao');

botao.addEventListener('click', () => {
    if(desativado) {
        botao.style.transform = 'translate(50%) rotate(45deg)';
        fundoPreto.style.backgroundColor = 'rgba(0, 0, 0, 80%)';
        
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
        botao.style.transform = 'translate(50%) rotate(0deg)';
        fundoPreto.style.backgroundColor = 'rgba(0, 0, 0, 0)';

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

