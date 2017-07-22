const blockchain_api = function (host) {

  let self = {};
  const Web3 = require('web3');
  const web3 = new Web3(new Web3.providers.HttpProvider(host));


  self.get_accounts = () => {
    return web3.eth.accounts;
  };

  self.contract_getter = (abi, address, func, args = []) => {

    const contract = web3.eth.contract(abi).at(address);
    return contract[func].call(...args, {from: web3.eth.accounts[0]});
  };

  self.contract_setter = (abi, address, func, args = []) => {

    const contract = web3.eth.contract(abi).at(address);
    web3.personal.unlockAccount(self.get_account(), '0000');
    return new Promise(function (resolve, reject) {
      contract[func](...args, {
        from: self.get_account(),
        gas: web3.toHex(5000000),
        gasPrice: web3.toHex(10000)
      },
      function (err, res) {
        const filter = web3.eth.filter('latest');
        filter.watch(function (error, result) {
          const temp = web3.eth.getTransactionReceipt(res);
          if (error){
            reject({error: `transaction rejected: ${error}`});
          }
          if (temp != null) {
            filter.stopWatching();
            resolve({success: `transaction executed ${temp}`});
          }
        });
      });
    });
  };
  return self;
};


module.exports = blockchain_api;