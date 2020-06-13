Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"inputs":[],"name":"sayHello","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"}]
var helloContract = web3.eth.contract(abi);
var hello = helloContract.at("0x8e2a2038c0dd752f4fc1e4aff39a3eee3a7706d5");
console.log(hello.sayHello.call());
