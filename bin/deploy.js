const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));


// sanity check sometimes you need to make a simple connection to the blockchain first
console.log(web3.eth.accounts)

const fs = require('fs');
const path = require('path')


const file = fs.readFileSync(path.resolve(__dirname, '../contracts/contract.json'))
const byte = JSON.parse(file).byte
const abi = JSON.parse(file).abi


const ContractFactory = web3.eth.contract(abi);
web3.personal.unlockAccount(web3.eth.accounts[0], '0000');

ContractFactory.new(
    {
        from: web3.eth.accounts[0],
        data: byte,
        gas: '50000000'
    },
    function(err, contract){
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            fs.writeFileSync(
                path.resolve(__dirname, '../contracts/contract.json'),
                JSON.stringify({byte: byte, abi: abi, address: contract.address})
            )
        }
    }
)



// geth --datadir node --networkid 300 --rpc --rpcapi "admin,personal,eth,miner" console