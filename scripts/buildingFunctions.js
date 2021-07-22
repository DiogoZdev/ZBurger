
//CONSTANTES UTILIZADAS
const qs = (element)=>document.querySelector(element);

//INSERIR CADA HAMBURGUER (IMAGEM, NOME, PREÇO, ID) NO MODAL
burgerJSON.map((burger)=>{
    let modal = qs('.item-modal').cloneNode(true);

    modal.querySelector('.modal-image').innerHTML = `<img src ='${burger.src}'/>`;
    modal.querySelector('.modal-title').innerHTML = burger.name;
    modal.querySelector('.modal-price').innerHTML = `R$ ${(burger.pricing).toFixed(2)}`;
    modal.querySelector('.add').setAttribute('data-burger', burger.id);

    qs('.display').append( modal );
});


// FUNÇÃO PARA ABRIR E FECHAR VISUALIZAÇÃO DA SACOLA
function toggleCart() {
    qs('.cart').classList.toggle('hidden');
}

function toggleInfo() {
    qs('.information').classList.toggle('hidden');
}



//ARRAY RESPONSÁVEL POR ARMAZENAR OS ÍTENS ADICIONADOS À SACOLA DE COMPRA
let bagArray = [];


//FUNÇÃO QUE ADICIONA OS ÍTENS AO ARRAY DA SACOLA DE COMPRA
function add_toCart(id){
    let burgId = id.getAttribute('data-burger');

    bagArray.push(burgerJSON[burgId]);
}