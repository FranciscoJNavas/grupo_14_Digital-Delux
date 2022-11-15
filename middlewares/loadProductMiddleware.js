const {body} = require('express-validator');

let validateProduct = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio').bail()
        .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('description')
        .isLength({min:20}).withMessage('La descripción debe tener al menos 20 caracteres')
];

module.exports = validateProduct;