
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
let cartArray = [];


//FUNÇÃO QUE ADICIONA OS ÍTENS AO ARRAY DA SACOLA DE COMPRA
function add_toCart(id){
    let burgId = id.getAttribute('data-burger');

    cartArray.push(burgerJSON[burgId]);

    qs('#cart-items-area').innerHTML = '';
    updateCart();
}


function updateCart(){

    if(cartArray.length !== 0){
      
        cartArray.map((item) => { //cada item no array a ser incrementado
        
            let cartItem = qs('.cart-modal').cloneNode(true);

            cartItem.querySelector('.cart-item-img').innerHTML = `<img src="${item.src}" />`;
            cartItem.querySelector('.cart-item-quantity').innerHTML = '1';
            cartItem.querySelector('.cart-item-name').innerHTML = item.name;
            cartItem.querySelector('.remove-from-cart').setAttribute('data-pos', cartArray.length - 1);

            qs('#cart-items-area').append( cartItem );    

            updateTotalValue();
        }); 

    } else {
        qs('#cart-items-area').innerHTML="";
    }

    
}

function updateTotalValue(){
    let price = 0;

    for(let i in cartArray ){
        price += cartArray[i].pricing;
    }

    qs('.totalValue').innerHTML = price.toFixed(2);

}

function clearBag(){
    cartArray = [];
    updateCart();
    qs('#cart-items-area').innerHTML = '';
    qs('.totalValue').innerHTML = '00,00';

}

/*
<div class="cart-modal">
    <div class="cart-item-img"></div>
    <div class="cart-item-quantity"></div>
    <div class="cart-item-name"></div>
    <div class="remove-from-cart"></div>
</div>
*/

function confirm() {
    
}