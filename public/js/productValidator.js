window.addEventListener('load', function(){
    //capturar elementos

    const btnsubmit = document.querySelector('.form-button');
    const productForm = document.querySelector('.product-form');
    const inputName = document.querySelector('#name');
    const errorName = document.querySelector('.name-form-error');
    const inputDescription = document.querySelector('#description');
    const errorDescription = document.querySelector('.description-form-error');

    //control de envío de formulario
    btnsubmit.addEventListener('click', function(e){
        e.preventDefault();
        let errors = {};

        if(inputName.value.length < 5){
            errors.name = 'El nombre del producto debe tener al menos 5 caracteres';
        }

        if(inputDescription.value.length < 20){
            errors.description = 'La descripción del producto debe tener al menos 20 caracteres';
        }

        if(Object.keys(errors).length >= 1){
            errorName.innerText = (errors.name) ? errors.name : '';
            errorDescription.innerText = (errors.description) ? errors.description : '';
        } else {
            productForm.submit();
        }

    })



})