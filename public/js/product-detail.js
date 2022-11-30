window.addEventListener('load', function(){
    //capturar elementos

    let botonComprar = document.querySelector(".comprar");

    botonComprar.addEventListener("click",(e) => {
        // console.log(e.target.dataset.id);
        if(localStorage.carrito){
            let carrito = JSON.parse(localStorage.carrito);
            let index = carrito.findIndex(
                (prod) => (prod.id == e.target.dataset.id)
            );
            if(index != -1){
                carrito[index].quantity += 1;
            }else{
                carrito.push({
                    id: e.target.dataset.id,
                    quantity: 1
                })
            }
            localStorage.setItem("carrito",JSON.stringify(carrito));
        }else{
            localStorage.setItem("carrito",JSON.stringify([{
                id: e.target.dataset.id,
                quantity: 1
            }]))
        }
    })
    

})