window.addEventListener('load', function(){
    //capturar elementos

    const btnsubmit = document.querySelector('.form-button');
    const productForm = document.querySelector('.register-form');
    const inputEmail = document.querySelector('#email');
    const errorEmail = document.querySelector('.email-form-error');
    const inputPassword = document.querySelector('#password');
    const passLCase = document.querySelector('.lower-case');
    const passUCase = document.querySelector('.upper-case');
    const digit = document.querySelector('.digit');
    const simbol = document.querySelector('.simbol');
    const strLength = document.querySelector('.str-length');
    const noValid = document.querySelector('.no-valid');
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

    const regexForPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/; // para contraseña
    const regexForEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let errors = {};
    let formError;

    const regex = {
        lowerCase:(inputValue) => {
            if(!(/[a-z]/.test(inputValue))){
                passLCase.classList.remove('no-show');
                formError = true;
            } else {
                passLCase.classList.add('no-show');
                formError = false;
            }
        },
        upperCase:(inputValue) => {
            if(!(/[A-Z]/.test(inputValue))){
                passUCase.classList.remove('no-show');
                formError = true;
            } else {
                passUCase.classList.add('no-show');
                formError = false;
            }
        },
        digit:(inputValue) => {
            if(!(/[0-9]/.test(inputValue))){
                digit.classList.remove('no-show');
                formError = true;
            } else {
                digit.classList.add('no-show');
                formError = false;
            }
        },
        simbol:(inputValue) => {
            if(!(/[@$!%?&]/.test(inputValue))){
                simbol.classList.remove('no-show');
                formError = true;
            } else {
                simbol.classList.add('no-show');
                formError = false;
            }
        },
        passLength:(inputValue) => {
            if(inputValue.length < 8){
                strLength.classList.remove('no-show');
                formError = true;
            } else {
                strLength.classList.add('no-show');
                formError = false;
            }
        },
        valid:(inputValue) => {
            if((/[^a-zA-Z0-9@$!%?&]/.test(inputValue))){
                noValid.classList.remove('no-show');
                formError = true;
            } else {
                noValid.classList.add('no-show');
                formError = false;
            }
        },
        repeat:(inputValue) => {
            if(inputPassword.value !== inputRepassword.value){
                errorRepassword.classList.remove('no-show');
                formError = true;
            } else {
                errorRepassword.classList.add('no-show');
                formError = false;
            }
        },
        emailValidate:(inputValue) => {
            if(!(regexForEmail.test(inputValue))){
                errorEmail.classList.remove('no-show');
                formError = true;
            } else {
                errorEmail.classList.add('no-show');
                formError = false;
            }
        }
    }

    // VERIFICACIÓN DE CONTRASEÑA
    inputPassword.addEventListener('keyup', function(e){
        
        regex.lowerCase(e.target.value);
        regex.upperCase(e.target.value);
        regex.digit(e.target.value);
        regex.simbol(e.target.value);
        regex.passLength(e.target.value);
        regex.valid(e.target.value);

    })
    
    // REPETICIÓN DE CONTRASEÑA
    inputRepassword.addEventListener('keyup', function(e){
        
        regex.repeat(e.target.value);

    })

    // verificación de email
    inputEmail.addEventListener('keyup', function(e){
            
        regex.emailValidate(e.target.value);

    })

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

        if(formError == 1){
            errors.password = 'La contraseña no es válida';
        }


        if(Object.keys(errors).length >= 1){
            errorEmail.innerText = (errors.email) ? errors.email : '';
            errorPassword.innerText = (errors.password) ? errors.password : '';
            errorRepassword.innerText = (errors.repassword) ? errors.repassword : '';
            errorFirstName.innerText = (errors.firstName) ? errors.firstName : '';
            errorLastName.innerText = (errors.lastName) ? errors.lastName : '';
            alert("¡El formulario presenta errores!");

        } else {
            productForm.submit();
        }

    })

})