let cardRows = document.querySelector(".cardRows")
console.log(cardRows);

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
                    </tr>`
            })
    });
} else {
    console.log("No hay carro")
}