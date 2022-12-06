window.addEventListener('load', function(){
    //capturar elementos

    const btnsubmit = document.querySelector('.form-button');
    const productForm = document.querySelector('.product-form');
    const inputName = document.querySelector('#name');
    const errorName = document.querySelector('.name-form-error');
    const inputDescription = document.querySelector('#description');
    const errorDescription = document.querySelector('.description-form-error');

    let formError;

    const regex = {
        productName: (inputValue) => {
            if((inputValue.length < 5)){
                errorName.classList.remove('no-show');
                formError = true;
            } else {
                errorName.classList.add('no-show');
                formError = false;
            }
        },
        description: (inputValue) => {
            if((inputValue.length < 20)){
                errorDescription.classList.remove('no-show');
                formError = true;
            } else {
                errorDescription.classList.add('no-show');
                formError = false;
            }
        }
    }

    // verificación de nombre
    inputName.addEventListener('blur', function(e){
            
        regex.productName(e.target.value);

    })

    // verificación de apellido
    inputDescription.addEventListener('blur', function(e){
            
        regex.description(e.target.value);

    })

    //control de envío de formulario
    btnsubmit.addEventListener('click', function(e){
        e.preventDefault();


        if(formError){
            alert("¡El formulario presenta errores!");

        } else {
            productForm.submit();
        }

    })

})