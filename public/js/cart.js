let cardRows = document.querySelector(".cartRows");
let totalCart = document.querySelector(".totalAmount");
let products = [];

function sumarTotalCarrito(arrayProducts) {
    return arrayProducts.reduce(
        (acum, product) => (acum += product.price * product.quantity),
        0
    );
}
function vaciarCarrito(){
    localStorage.removeItem("carrito");
}


if (localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito);
    carrito.forEach((item, index) => {
        // fetch(`http://localhost:3001/api/products/${item.id}`)
        fetch(`https://digital-deploy.herokuapp.com//api/products/${item.id}`)
            .then(response => response.json())
            .then(product => {
                cardRows.innerHTML +=
                    `<tr>
                        <td>${index + 1}</td>
                        <td>${product.data.name}</td>
                        <td>$${product.data.price}</td>
                        <td>${carrito[index].quantity}</td>
                        <td>$${carrito[index].quantity * product.data.price}</td>
                        <td><button><i class="fas fa-trash"></i></button></td>
                    </tr>`
                products.push({
                    productId: product.data.id,
                    name: product.data.name,
                    price: product.data.price,
                    quantity: item.quantity
                })
            })
            .then(() => {
                totalCart.innerText = `$ ${sumarTotalCarrito(products)}`;
            })
    });
} else {
    console.log("No hay productos en el carrito")
}

let checkoutCart = document.querySelector("#checkoutCart")

checkoutCart.onsubmit = (e) => {
    e.preventDefault();
    const formData = {
        orderItems: products,
        paymentMethod: checkoutCart.paymentMethod.value,
        shippingMethod: checkoutCart.shippingMethod.value,
        total: sumarTotalCarrito(products)
    };
    fetch("/api/orders/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then((r) => r.json())
        .then((res) => {
            if(res.ok){
                vaciarCarrito();
                location.href = `/orders/${res.order.id}`;
            }
        })
};

