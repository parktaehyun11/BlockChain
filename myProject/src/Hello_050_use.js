Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}];
var addr = "0x0b5Cc62F7c2f5504FCcF8edB87a8D6196c01385c";
var hello = new web3.eth.Contract(abi,addr);
hello.methods.sayHello().call().then(function(value) {console.log(value);});
