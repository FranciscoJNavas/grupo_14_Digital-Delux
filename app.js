const express = require('express');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const app = express();

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
    secret: "Es un secreto",
    resave: false,
    saveUninitialized: false,
}));
app.use(userLoggedMiddleware);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//rutas
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products
const usersRouter = require('./routes/users'); // Rutas /users

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria ${app.get('puerto')}` ));