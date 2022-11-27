const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
    secret: "Es un secreto",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//rutas
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products
const usersRouter = require('./routes/users'); // Rutas /users
const { cookie } = require('express-validator');

//rutas Api
const apiUsersRouter = require('./routes/api/users');
const apiProductsRouter = require('./routes/api/products');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);

app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);


app.set('puerto', process.env.PORT || 3001);

app.listen(app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria ${app.get('puerto')}` ));