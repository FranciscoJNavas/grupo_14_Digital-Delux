const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/product', function(req, res){
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/productCart', function(req, res){
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
})

app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
})

app.post('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});