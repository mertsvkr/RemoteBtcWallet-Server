const RPC_USER = "cpbm"
const RPC_PASSWORD = "123bm456"

//urls that bitcoind server uses
const RPC_CONNECTION_MAIN_URL = "http://" + RPC_USER + ":" + RPC_PASSWORD + "@127.0.0.1:8332/" //for real network
const RPC_CONNECTION_TESTNET_URL = "http://" + RPC_USER + ":" + RPC_PASSWORD + "@127.0.0.1:18332/" //for test network

//choose one of them according to your network decision. -testnet or real network.
exports.RPC_URL = RPC_CONNECTION_TESTNET_URL

