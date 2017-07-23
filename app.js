var express = require('express');
var app = express();
var fs = require('fs');
var cors = require('cors')

var Datastore = require('nedb')
  , db = new Datastore();


function init_db(){
    const insured = {
        username: 'insured',
        password: '0000', // don't laugh 
        policies: [],
    }
    const insurer = {
        username: 'insurer',
        password: '1111', // don't laugh 
        policies: [],
        claims: []
    }
    const expert = {
        username: 'expert',
        password: '2222', // don't laugh 
        claims: []
    }

    db.insert(insured)
    db.insert(insurer)
    db.insert(expert)
}
init_db()







const chainApi = require('./lib/core')('http://127.0.0.1:8545');

// console.log(chainApi.get_accounts());




const path = require('path')
const file = fs.readFileSync(path.resolve(__dirname, 'contracts/contract.json'))
const byte = JSON.parse(file).byte
const abi = JSON.parse(file).abi
const address = JSON.parse(file).address


app.use(cors())


const PORT = 5000;
const HOST = 'localhost';




app.get('/insured/submit_policy', (req, res) => {
    // insured submits a policy
    const id = req.query.id;
    const start = req.query.start;
    const end = req.query.end;
    const type = req.query.type;
    
    chainApi.contract_setter(abi, address, 'proposePolicy', [id, start, end, type] )
    .then((result)=>{
        db.update({username: 'insured'}, {$push: {policies: id}})
        res.send({msg: 'success'});
        
    }).catch((error)=>{
        console.log(error);
        res.send({msg: 'error'});
    })
})


app.get('/insured/accept_policy', (req, res) => {
    const id = req.query.id;
    chainApi.contract_setter(abi, address, 'acceptPolicy', [id] )
    .then((result)=>{
        res.send({msg: 'success'});
        
    }).catch((error)=>{
        console.log(error);
        res.send({msg: 'error'});
    })
})

app.get('/insurer/submit_price', (req, res) => {
    const id = req.query.id;
    const premium = req.query.premium;
    const max = req.query.max;
    chainApi.contract_setter(abi, address, 'proposePrice', [id, max, premium] )
    .then((result)=>{
        res.send({msg: 'success'});
        
    }).catch((error)=>{
        console.log(error);
        res.send({msg: 'error'});
    })
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

app.get('/add',(req,res)=>{
    const id = req.query.id;
    db.update({username: 'insured'}, {$push: {policies: id }},(error, doc)=>{
        if(error) res.send({msg:'error'});
        if(doc) res.send({msg: 'success'})
    });
    
})


app.get('/getPolicies', (req, res)=>{
    const username = req.query.user;
    let policies = [];
    db.findOne({username: username}, (err, user) =>{
        user.policies.forEach((elem, i)=>{
            policies.push(chainApi.contract_getter(abi, address, 'getPolicy', [elem]))
        })
        res.send(policies)
    })
})



app.get ('/login', (req, res) =>{
    
    const username = req.query.username;
    const password = req.query.password;

    db.findOne({ username: username }, function (err, user) {
        if(err) console.log(err);
        if(user.password === password){
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
    });
})




app.listen(PORT, HOST, (req, res) => {
    console.log(`listening from ${HOST}:${PORT}`)
})