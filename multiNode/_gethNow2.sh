geth --identity "parkNode2" \
--allow-insecure-unlock \
--rpc --rpcaddr "127.0.0.1" --rpcport "8002" --rpccorsdomain "*" \
--datadir /Users/park/BlockChain/multiNode/eth/2 \
--port "38002" \
--rpcapi "admin,eth,debug,miner,net,txpool,personal,web3" \
--networkid 33 
