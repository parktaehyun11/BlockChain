geth --identity "parkNode1" \
--allow-insecure-unlock \
--rpc --rpcaddr "127.0.0.1" --rpcport "8001" --rpccorsdomain "*" \
--datadir /Users/park/BlockChain/multiNode/eth/1 \
--port "38001" \
--rpcapi "admin,eth,debug,miner,net,txpool,personal,web3" \
--networkid 33 
