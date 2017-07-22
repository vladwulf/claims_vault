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

app.get('/insured/submit_policy', (req, res) => {
    // insured submits a policy
})

app.get('/insured/accept_policy', (req, res) => {
    // insured submits a price after valuation of policy
})

app.get('/insurer/submit_price', (req, res) => {
    // insured accepts the policy
})

app.get('/insurer/action', (req, res) => {
    // insurer accepts, denies or sumbits to review a given claim
})

app.get('/expert/action', (req, res) => {
    // expert begins investigation or declines
})

app.get('/claimant/make_claim', (req, res) => {
    // claimant makes a claim
})




app.listen(PORT, HOST, (req, res) => {
    console.log(`listening from ${HOST}:${PORT}`)
})