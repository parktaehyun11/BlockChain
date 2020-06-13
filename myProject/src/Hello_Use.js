var Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}];
var addr = "0xE5e22E80AA09D79e31526160b965741d94803ABE";
var hello = new web3.eth.Contract(abi,addr);
hello.methods.sayHello().call().then(function(value) {console.log(value);});
