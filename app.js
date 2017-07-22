var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors')

const chainApi = require('./lib/core')('http://127.0.0.1:8545');

// console.log(chainApi.get_accounts());




const path = require('path')
const file = fs.readFileSync(path.resolve(__dirname, 'contracts/contract.json'))
const byte = JSON.parse(file).byte
const abi = JSON.parse(file).abi
const address = JSON.parse(file).address

chainApi.contract_setter(abi, address, 'proposePolicy', [0, '1 november 2016', '10 november 2016', 'car'] )
.then((err, res)=>{
    if (err) console.log(err)
    if (res) return res;
})
.then(()=>{
    const data = chainApi.contract_getter(abi, address, 'getPolicy', [0])
    console.log(data)
})



app.use(cors())


const PORT = 5000;
const HOST = 'localhost';

let db = {
    vlad: '0000',
    jenny: '1111',
    craig: '2222'
}



app.get('/insured/submit_policy', (req, res) => {
    const id = req.query.id;
    const type = req.query.type;
    chainApi.contract_set
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


app.get('/getPolicy', (req,res)=>{
    const id = req.query.id;
    const data = chainApi.contract_getter(abi, address, 'getPolicy', [id])
    res.send(data);
})



app.get ('/login', (req, res) =>{
    
    const username = req.query.username;
    const password = req.query.password;

    console.log(username, password, db[username])
    if (db[username] === password){
        res.send({
            msg: 'success',
            username: username
        })
    }
    else {
        res.send({
            msg: 'error'
        })
    }
    // check if pair is correct in mongo

    // if yes redirect to the user type
})




// app.listen(PORT, HOST, (req, res) => {
//     console.log(`listening from ${HOST}:${PORT}`)
// })