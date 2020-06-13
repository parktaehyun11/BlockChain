Web3=require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var addr = "0xB4Add86E4201019DC14d2Ecb0B95982a94588a6F";
var greeter = new web3.eth.Contract(abi,addr);
greeter.methods.greet().call().then(function(value) {console.log(value);});
web3.eth.personal.unlockAccount("0x36ea6a51fc997afdd9371fbd056a001d2a1c6f98",'1234');
greeter.methods.setGreeting("Hello Parkparka").send({from:"0x36ea6a51fc997afdd9371fbd056a001d2a1c6f98",gas:100000});
greeter.methods.greet().call().then(function(value) {console.log(value);});
