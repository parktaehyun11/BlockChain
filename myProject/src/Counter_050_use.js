var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"constant":false,"inputs":[],"name":"add","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"subtract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
var addr = "0xB1377A814eC567A63A49154f69960636FDBfF4e9";
var counter = new web3.eth.Contract(abi,addr);
counter.methods.getCounter().call().then(function(value){console.log(value);});
counter.methods.add().send({from:"0x36ea6a51fc997afdd9371fbd056a001d2a1c6f98",gas:100000});
counter.methods.subtract().send({from:"0x36ea6a51fc997afdd9371fbd056a001d2a1c6f98",gas:100000});
counter.methods.getCounter().call().then(function(value){console.log(value);});
