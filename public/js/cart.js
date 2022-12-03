let cardRows = document.querySelector(".cartRows");
let totalCart = document.querySelector(".totalAmount");
let products = [];

function sumarTotalCarrito(arrayProducts){
    return arrayProducts.reduce(
        (acum,product) => (acum += product.price * product.quantity),
        0
    );
}


if (localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito);
    carrito.forEach((item, index) => {
        fetch(`http://localhost:3001/api/products/${item.id}`)
            .then(response => response.json())
            .then(product => {
                cardRows.innerHTML +=
                    `<tr>
                        <th>${index+1}</th>
                        <td>${product.data.name}</td>
                        <td>$${product.data.price}</td>
                        <td>${carrito[index].quantity}</td>
                        <td>$${carrito[index].quantity*product.data.price}</td>
                        <td><button><i class="fas fa-trash"></i></button></td>
                        
                    </tr>`
                    products.push({
                        productId: product.data.id,
                        name: product.data.name,
                        price: product.data.price,
                        quantity: item.quantity
                    })
            })
            .then(()=>{
                totalCart.innerText = `$ ${sumarTotalCarrito(products)}` ;
            })
    });
} else {
    console.log("No hay productos en el carrito")
}