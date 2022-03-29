const menuBotao = document.getElementsByClassName('menu-botao')[0];
menuBotao.addEventListener('click', abrirMenu);


const menuFechar = document.getElementsByClassName('menu-fechar')[0];
menuFechar.addEventListener('click', fecharMenu);

function abrirMenu(){
    const menu = document.getElementsByClassName('menu')[0];
    const fundo = document.getElementsByClassName('menu-fundo')[0];

    menu.classList.add('menu-ativo');
    fundo.classList.add('menu-fundo-ativo');
}

function fecharMenu(){
    const menu = document.getElementsByClassName('menu')[0];
    const fundo = document.getElementsByClassName('menu-fundo')[0];

    menu.classList.remove('menu-ativo');
    fundo.classList.remove('menu-fundo-ativo');
}



