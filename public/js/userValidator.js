window.addEventListener('load', function(){
    
    //captura de elementos
    const btnsubmit = document.querySelector('.form-button');
    const registerForm = document.querySelector('.register-form');
    const inputEmail = document.querySelector('#email');
    const errorEmail = document.querySelector('.email-form-error');
    const errorEmail2 = document.querySelector('.email-form-error-2');
    const inputPassword = document.querySelector('#password');
    const passLCase = document.querySelector('.lower-case');
    const passUCase = document.querySelector('.upper-case');
    const digit = document.querySelector('.digit');
    const simbol = document.querySelector('.simbol');
    const strLength = document.querySelector('.str-length');
    const noValid = document.querySelector('.no-valid');
    const inputRepassword = document.querySelector('#repassword');
    const errorRepassword = document.querySelector('.repassword-form-error');
    const inputFirstName = document.querySelector('#first-name');
    const errorFirstName = document.querySelector('.first-name-form-error');
    const inputLastName = document.querySelector('#last-name');
    const errorLastName = document.querySelector('.last-name-form-error');
    // const inputDni = document.querySelector('#dni');
    // const errorDni = document.querySelector('.dni-form-error');
    const inputDateBirth = document.querySelector('#date-birth');
    const errorDateBirth = document.querySelector('.date-birth-form-error');

    const regexForPassword = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/; // para contraseña
    const regexForEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let errors = {};
    let formError;

    const regex = {
        lowerCase:(inputValue) => {
            if(!(/[a-z]/.test(inputValue)) && !(inputValue.trim() == 0)){
                passLCase.classList.remove('no-show');
                formError = true;
            } else {
                passLCase.classList.add('no-show');
                formError = false;
            }
        },
        upperCase:(inputValue) => {
            if(!(/[A-Z]/.test(inputValue)) && !(inputValue.trim() == 0)){
                passUCase.classList.remove('no-show');
                formError = true;
            } else {
                passUCase.classList.add('no-show');
                formError = false;
            }
        },
        digit:(inputValue) => {
            if(!(/[0-9]/.test(inputValue)) && !(inputValue.trim() == 0)){
                digit.classList.remove('no-show');
                formError = true;
            } else {
                digit.classList.add('no-show');
                formError = false;
            }
        },
        simbol:(inputValue) => {
            if(!(/[@$!%?&]/.test(inputValue)) && !(inputValue.trim() == 0)){
                simbol.classList.remove('no-show');
                formError = true;
            } else {
                simbol.classList.add('no-show');
                formError = false;
            }
        },
        passLength:(inputValue) => {
            if((inputValue.length < 8) && !(inputValue.trim() == 0)){
                strLength.classList.remove('no-show');
                formError = true;
            } else {
                strLength.classList.add('no-show');
                formError = false;
            }
        },
        valid:(inputValue) => {
            if((/[^a-zA-Z0-9@$!%?&]/.test(inputValue)) && !(inputValue.trim() == 0)){
                noValid.classList.remove('no-show');
                formError = true;
            } else {
                noValid.classList.add('no-show');
                formError = false;
            }
        },
        repeat:(inputValue) => {
            if((inputPassword.value !== inputValue) && !(inputValue.trim() == 0)){
                errorRepassword.classList.remove('no-show');
                formError = true;
            } else {
                errorRepassword.classList.add('no-show');
                formError = false;
            }
        },
        emailValidate:(inputValue) => {
            if(!(regexForEmail.test(inputValue)) && !(inputValue.trim() == 0)){
                errorEmail.classList.remove('no-show');
                formError = true;
            } else {
                errorEmail.classList.add('no-show');
                formError = false;
            }
        },
        emailEmpty: (inputValue) => {
            if((inputValue.trim().length == 0)){
                errorEmail2.classList.remove('no-show');
                formError = true;
            } else {
                errorEmail2.classList.add('no-show');
                formError = false;
            }
        },
        firstName: (inputValue) => {
            if((inputValue.length < 2)){
                errorFirstName.classList.remove('no-show');
                formError = true;
            } else {
                errorFirstName.classList.add('no-show');
                formError = false;
            }
        },
        lastName: (inputValue) => {
            if((inputValue.length < 2)){
                errorLastName.classList.remove('no-show');
                formError = true;
            } else {
                errorLastName.classList.add('no-show');
                formError = false;
            }
        },
        adultAge: (inputValue) => {
            let today = new Date();
            let dateBirth = new Date(inputValue);
            let age = today.getFullYear() - dateBirth.getFullYear();
            let m = today.getMonth() - dateBirth.getMonth();
            
            if (m < 0 || (m === 0 && today.getDate() < dateBirth.getDate()+1)) {
                age--;
            }
            console.log(age);

            if(age < 18){
                errorDateBirth.classList.remove('no-show');
                formError = true;
            } else {
                errorDateBirth.classList.add('no-show');
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
    inputEmail.addEventListener('blur', function(e){
            
        regex.emailEmpty(e.target.value);

    })

    // verificación de nombre
    inputFirstName.addEventListener('blur', function(e){
            
        regex.firstName(e.target.value);

    })

    // verificación de apellido
    inputLastName.addEventListener('blur', function(e){
            
        regex.lastName(e.target.value);

    })

    // verificación de edad
    inputDateBirth.addEventListener('blur', function(e){
        console.log(e.target.value)   
        regex.adultAge(e.target.value);

    })

    //control de envío de formulario
    btnsubmit.addEventListener('click', function(e){
        e.preventDefault();


        if(formError){
            alert("¡El formulario presenta errores!");

        } else {
            registerForm.submit();
        }

    })

})