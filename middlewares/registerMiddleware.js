const {body} = require('express-validator');

let validateRegister = [
    body('first_name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('last_name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres'),
    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe insertar un email válido'),
    body('dni')
        .isNumeric().withMessage('Debe colocar un número valido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria').bail()
    .isStrongPassword({
        minLength: 8,       // mínimo 8 caracteres
        minUppercase: 1,    // mínimo 1 mayúscula
        minLowercase: 1,    // mínimo 1 minúscula
        minNumbers: 1,      // mínimo 1 número
        minSymbols: 1       // mínimo 1 símbolo
    })
    .withMessage('La contraseña debe tener al menos 8 caracteres, debe contener al menos una mayúscula, una minúscula, un número y un símbolo'),
    body('repassword').notEmpty().withMessage('La contraseña es obligatoria').bail()
    // .custom((req) => {
    //     console.log(req.body.password);
    //     const pass = req.body.password;
    //     const repass = req.body.repassword;
    //   }) //.withMessage('Las contraseñas no coinciden'),
];

module.exports = validateRegister;