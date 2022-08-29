const express = require('express');
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')))
app.set('puerto', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.render('index')
})

app.get('/product', function(req, res){
    res.render('products/product-detail')
})

app.get('/register', function(req, res){
    res.render('users/register')
})

app.get('/login', function(req, res){
    res.render('users/login')
})

app.get('/edicion', function(req, res){
    res.render('users/edicion')
})

app.get('/product-cart', function(req, res){
    res.render('products/product-cart')
})

app.post('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/index.ejs');
});

app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/index.ejs');
});

app.post('/product-cart', (req,res)=>{
    res.sendFile(__dirname + '/views/index.ejs');
});

app.listen(app.get('puerto'), ()=> console.log(`Servidor corriendo de manera satisfactoria ${app.get('puerto')}` ));