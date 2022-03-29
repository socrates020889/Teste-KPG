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




const perguntaItens = document.getElementsByClassName('pergunta-cabecalho');
for (const item of perguntaItens) {
    item.addEventListener('click', abrirFecharPergunta );
    
}

function abrirFecharPergunta(event){
    const cabecalho = event.currentTarget;
    const item = cabecalho.parentElement;
    const icone = cabecalho.children[1];

    const isAberto = Array.from(item.classList).some(c => c == 'pergunta-item-ativo');

    if (isAberto){
        item.classList.remove('pergunta-item-ativo');
        icone.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>';

    }

    else{
         item.classList.add('pergunta-item-ativo');
         icone.outerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 3C4.239 3 2 5.216 2 7.95C2 10.157 2.875 15.395 11.488 20.69C11.6423 20.7839 11.8194 20.8335 12 20.8335C12.1806 20.8335 12.3577 20.7839 12.512 20.69C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3C14.239 3 12 6 12 6C12 6 9.761 3 7 3Z" stroke="#06A4DE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>`;
    }
}

const categoriaItens = document.getElementsByClassName('categoria-item');
for (const item of categoriaItens) {
    item.addEventListener('click', mudarCategoria );
    
}

function mudarCategoria(event){
    const item = event.currentTarget;
    const listaId = item.getAttribute('data-id');
    const listaAtiva = document.getElementsByClassName('produto-lista-ativa')[0];
    listaAtiva.classList.remove('produto-lista-ativa');
    const novaLista = document.getElementById(listaId);
    novaLista.classList.add('produto-lista-ativa');
    const itemAtivo = document.getElementsByClassName('categoria-item-ativo')[0];
    itemAtivo.classList.remove('categoria-item-ativo');
    item.classList.add('categoria-item-ativo');
}


