var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"inputs":[],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subtract","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var addr = "0x6ef220cae6b2627f4aaca2e1d2ab12d9d6f668fe";
var counterContract = web3.eth.contract(abi);
var counter = counterContract.at(addr);
web3.personal.unlockAccount(web3.eth.accounts[0],'1234');
console.log(counter.getCounter.call());
