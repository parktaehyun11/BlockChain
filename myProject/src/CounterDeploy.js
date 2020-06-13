var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"inputs":[],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subtract","outputs":[],"stateMutability":"nonpayable","type":"function"}]
var counterContract = web3.eth.contract(abi);
web3.personal.unlockAccount(web3.eth.accounts[0],'1234');
var counter = counterContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x60806040526000805534801561001457600080fd5b5060d3806100236000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80634f2be91f1460415780636deebae31460495780638ada066e146051575b600080fd5b6047606d565b005b604f6080565b005b60576094565b6040518082815260200191505060405180910390f35b6000808154809291906001019190505550565b600080815480929190600190039190505550565b6000805490509056fea264697066735822122082aece7a94a6f3cc8601e60d7ec0404e8385d56cdc2bc2d41952493b98f5aee064736f6c63430006030033', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
