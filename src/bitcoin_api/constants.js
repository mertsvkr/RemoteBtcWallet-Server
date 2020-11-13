const RPC_USER = process.env.RPC_USER
const RPC_PASSWORD = process.env.RPC_PASSWORD

//urls that bitcoind server uses
const RPC_CONNECTION_MAIN_URL = "http://" + RPC_USER + ":" + RPC_PASSWORD + "@127.0.0.1:8332/" //for real network
const RPC_CONNECTION_TESTNET_URL = "http://" + RPC_USER + ":" + RPC_PASSWORD + "@127.0.0.1:18332/" //for test network

//choose one of them according to your network decision. -testnet or real network.
module.exports.RPC_URL = RPC_CONNECTION_TESTNET_URL

module.exports.MAX_TARGET = 2.695953529101131e+67 /* this is the decimal value of the 
                                                    "maximum target" which is represented in hexadecimal 
                                                    as 0x00000000FFFF0000000000000000000000000000000000000000000000000000*/

