window.addEventListener('load', function(){
    
    //captura de elementos
    const btnsubmit = document.querySelector('.form-button');
    const registerForm = document.querySelector('.register-form');
    const inputFirstName = document.querySelector('#first-name');
    const errorFirstName = document.querySelector('.first-name-form-error');
    const inputLastName = document.querySelector('#last-name');
    const errorLastName = document.querySelector('.last-name-form-error');
    // const inputDni = document.querySelector('#dni');
    // const errorDni = document.querySelector('.dni-form-error');
    const inputDateBirth = document.querySelector('#date-birth');
    const errorDateBirth = document.querySelector('.date-birth-form-error');

    let formError;

    const regex = {
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