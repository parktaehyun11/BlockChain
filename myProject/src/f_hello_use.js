var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var _abi = [{"inputs":[],"name":"sayHello","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}];
var addr = "0x6541C15831fb49A5eF741BBC0621Fb4Aa436cA0F";
var hello = new web3.eth.Contract(_abi,addr);
