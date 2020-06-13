Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

var greeterContract = web3.eth.contract(abi);
var greeter = greeterContract.at("0xfafb25a2d03f16cc89b158d3b44ec23a0b94d424");


console.log(greeter.greet.call()); //Hello
greeter.setGreeting("Hello Park",{from:web3.eth.accounts[0],gas:100000})
console.log(greeter.greet.call()); //Hello Park
