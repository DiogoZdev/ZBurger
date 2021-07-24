// Useful constants

const business_phone = 43984449774;
const delivery_in = "1 hora";

const qs = (element)=>document.querySelector(element);


// Add functionalities do document

qs('#toggleRequest--cancel').addEventListener('click', toggleRequest);
qs('#toggleRequest--aside').addEventListener('click', toggleRequest);


// Insert each hamburger into modal (IMAGE, NAME, PRICE, ID)

burgerJSON.map((burger)=>{
    let modal = qs('.item-modal').cloneNode(true);

    modal.querySelector('.modal-image').innerHTML = `<img src ='${burger.src}'/>`;
    modal.querySelector('.modal-title').innerHTML = burger.name;
    modal.querySelector('.modal-price').innerHTML = `R$ ${(burger.pricing).toFixed(2)}`;
    modal.querySelector('.add').setAttribute('data-burger', burger.id);

    qs('.display').append( modal );
});


// Open or close cart visualization

function toggleCart() {
    qs('.cart').classList.toggle('hidden');
}

function toggleInfo() {
    qs('.general-information').classList.toggle('hidden');
}



// The bag
let cartArray = [];


// Add items into bag

function add_toCart(id){
    let burgId = id.getAttribute('data-burger');

    cartArray.push(burgerJSON[burgId]);

    qs('#cart-items-area').innerHTML = '';
    updateCart();
}

// Remove items from bag PENDING


// Update items in the cart

function updateCart(){
    if(cartArray.length !== 0){
        cartArray.map((item) => { //cada item no array a ser incrementado
        
            let cartItem = qs('.cart-modal').cloneNode(true);

            cartItem.querySelector('.cart-item-img').innerHTML = `<img src="${item.src}" />`;
            cartItem.querySelector('.cart-item-quantity').innerHTML = '1';
            cartItem.querySelector('.cart-item-name').innerHTML = item.name;

            qs('#cart-items-area').append( cartItem );    
            updateTotalValue();
        }); 
    } else {
        qs('#cart-items-area').innerHTML="";
    }
}

// Update caqt total value

function updateTotalValue(){
    let price = 0;

    for(let i in cartArray ){
        price += cartArray[i].pricing;
    }
    qs('.totalValue').innerHTML = `R$ ${price.toFixed(2)}`;
}

// Clean items from cart

function clearBag(){
    cartArray = [];
    updateCart();
    qs('#cart-items-area').innerHTML = '';
    qs('.totalValue').innerHTML = 'R$ 00,00';
}



function toggleRequest(){
    qs('.confirm-request').classList.toggle('hidden');   
}


// Enviar dados do formulário para o WhatsApp

function submitRequest() {

    let name = qs('#name').value;
    let address = `${qs('#city').value}, ${qs('#street').value}, ${qs('#number').value} - ${qs('#complement').value}`;

    let request = `** Eentrega em ${delivery_in} **
    Cliente: ${name}. 
    Endereço: ${address}.

    ${cartArray.map((item) => {
        return `zB ${item.id} `
    })}

    Total: ${qs('.totalValue').innerHTML}`; 
   
    console.log(request); 
    let finalRequest = encodeURI(request);

    window.open(`https://wa.me/+55${business_phone}?text=${finalRequest}`, '_brlank');
    
    toggleCart();
    toggleRequest();
    alert(' Seu pedido foi enviado com sucesso. Já é possível fechar o app. Bom apetite! ;) ');
}
