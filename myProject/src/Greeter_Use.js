var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
var addr = "0xc959b09Cc862e84f584268Df440508d93806cb5c";
var greeter = new web3.eth.Contract(abi,addr);
greeter.methods.greet().call().then(function(value) {console.log(value);});
greeter.methods.setGreeting("Hello Parkparka").send({from:"0x36ea6a51fc997afdd9371fbd056a001d2a1c6f98",gas:100000});
greeter.methods.greet().call().then(function(value) {console.log(value);});
