const {body} = require('express-validator');

let validateRegister = [
    body('first_name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({min:4}).withMessage('El nombre debe tener más de 4 caractéres'),
    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe insertar un email válido'),
    body('dni')
        .isNumeric().withMessage('Debe colocar un número valido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria').bail()
    .isLength({min:4}).withMessage('La contraseña debe tener más de 4 caractéres'),
];

module.exports = validateRegister;