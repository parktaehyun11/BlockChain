var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8445"));
var abi = [{"inputs":[],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subtract","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var _bin = "60806040526000805534801561001457600080fd5b5060d3806100236000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80634f2be91f1460415780636deebae31460495780638ada066e146051575b600080fd5b6047606d565b005b604f6080565b005b60576094565b6040518082815260200191505060405180910390f35b6000808154809291906001019190505550565b600080815480929190600190039190505550565b6000805490509056fea26469706673582212204a209f0ddbf1b8f4cd07b3f0c90011a3fe49d75ce09791fcec4554520756660f64736f6c63430006030033";
var counterContract = new web3.eth.Contract(abi);
counterContract.deploy({data:"0x" + _bin}).send({from:"0x36ea6a51fc997afdd9371fbd056a001d2a1c6f98", gas: 464124, gasPrice:'1000000000'}).then(function(newContractInstance){console.log(newContractInstance.options.address)});
