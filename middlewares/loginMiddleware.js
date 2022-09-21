const {body} = require('express-validator');

let validateRegister = [
    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe insertar un email válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria').bail()
    .isLength({min:2}).withMessage('La contraseña debe tener más de 4 caractéres'),
];

module.exports = validateRegister;