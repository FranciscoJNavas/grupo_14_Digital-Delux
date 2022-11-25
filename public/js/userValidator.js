window.addEventListener('load', function(){
    //capturar elementos

    const btnsubmit = document.querySelector('.form-button');
    const productForm = document.querySelector('.register-form');
    const inputEmail = document.querySelector('#email');
    const errorEmail = document.querySelector('.email-form-error');
    const inputPassword = document.querySelector('#password');
    const errorPassword = document.querySelector('.password-form-error');
    const inputRepassword = document.querySelector('#repassword');
    const errorRepassword = document.querySelector('.repassword-form-error');
    const inputFirstName = document.querySelector('#first-name');
    const errorFirstName = document.querySelector('.first-name-form-error');
    const inputLastName = document.querySelector('#last-name');
    const errorLastName = document.querySelector('.last-name-form-error');
    // const inputDni = document.querySelector('#dni');
    // const errorDni = document.querySelector('.dni-form-error');
    // const inputDateBirth = document.querySelector('#date-birth');
    // const errorDateBirth = document.querySelector('.date-birth-form-error');

    const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;


    //control de envío de formulario
    btnsubmit.addEventListener('click', function(e){
        e.preventDefault();
        let errors = {};

        if(inputEmail.value.length == 0){
            console.log("El Email es obligatorio");
            errors.email = 'El email es obligatorio';
        }

        if(inputFirstName.value.length < 2){
            errors.firstName = 'El nombre es obligatorio y debe tener al menos 2 caracteres';
        }

        if(inputLastName.value.length < 2){
            errors.lastName = 'El apellido es obligatorio y debe tener al menos 2 caracteres';
        }

        if(inputPassword.value < 8){
            errors.password = 'La contraseña debe tener al menos 8 caracteres';
        }

        // if(inputPassword.value !== inputRepassword.value){
        //     errors.repassword = 'Las contraseñas deben coincidir';
        // }

        if(Object.keys(errors).length >= 1){
            errorEmail.innerText = (errors.email) ? errors.email : '';
            errorPassword.innerText = (errors.password) ? errors.password : '';
            errorRepassword.innerText = (errors.repassword) ? errors.repassword : '';
            errorFirstName.innerText = (errors.firstName) ? errors.firstName : '';
            errorLastName.innerText = (errors.lastName) ? errors.lastName : '';

        } else {
            
            //console.log(Object.keys(errors).length)
            productForm.submit();
        }

    })



})