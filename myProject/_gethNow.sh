geth --identity "parkNode" \
--allow-insecure-unlock \
--rpc --rpcaddr "127.0.0.1" --rpcport "8445" --rpccorsdomain "*" \
--datadir /Users/park/BlockChain/myProject/eth/1 \
--port "38445" \
--rpcapi "admin,eth,debug,miner,net,txpool,personal,web3" \
--networkid 33 
