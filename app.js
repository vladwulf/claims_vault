var express = require('express');
var app = express();
var Web3 = require('web3');
var fs = require('fs');


const PORT = 3000;
const HOST = 'localhost';


app.use(express.static('public'))



app.get('/', (req, res) =>{
    res.send('Hello World')
})


app.listen(PORT, HOST, (req, res) => {
    console.log(`listening from ${HOST}:${PORT}`)
})