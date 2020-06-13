Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"constant":true,"inputs":[],"name":"sayHello","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"}];
var helloContract = web3.eth.contract(abi);
var hello = helloContract.at("0x0f27d74b4b1d42943e37f2f58ca524ed0b326af3");
console.log(hello.sayHello.call());
