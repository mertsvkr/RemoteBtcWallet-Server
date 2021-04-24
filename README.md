# RemoteBtcWallet-Server
This is the backend of the project which allows users to create a Bitcoin wallet, send and receive bitcoins, learn the balance.

# Tech/framework used
* Bitcoin Core: Since the project uses Bitcoin Core RPC to connect to the Bitcoin network, [Bitcoin Core](https://bitcoin.org/en/download) should be downloaded.
* axios: To send http requests.
* Express: To create REST API.
* MongoDB: NoSQL database.

# Features
* Creating user account
* Sending bitcoin
* Learning the balance info.
* Running on both real bitcoin network and also test network


# Installation
1. Download Bitcoin Core and make it work. You can find many resources on the web (like [this website](https://en.bitcoin.it/wiki/Running_Bitcoin)). 
2. Clone the repository.
3. Install dependencies. You can use ```npm install``` or ```yarn```
4. ```.env``` file must be created. The file should contain the following environment variables:
   - ```PORT```: You should specify the port you want to use for your API.
   -   ```MONGODB_URL```: Your MongoDB database URL.

# How to use?
### Use in the Bitcoin test network
1. To use in the test network ```RPC_CONNECTION_TESTNET_URL``` should be exported at [this line](https://github.com/mertsvkr/RemoteBtcWallet-Server/blob/6110066dfa05870ee1b98f2f68e69297c96978db/src/bitcoin_api/constants.js#L9) (like this `module.exports.RPC_URL = RPC_CONNECTION_TESTNET_URL`).
2. Run Bitcoin server in testnet ```bitcoind -testnet```
3. Run the project ```yarn start```
4. Send requests to this API.

### Use in the real Bitcoin network
1. To use in the real network ```RPC_CONNECTION_MAIN_URL``` should be exported at [this line](https://github.com/mertsvkr/RemoteBtcWallet-Server/blob/6110066dfa05870ee1b98f2f68e69297c96978db/src/bitcoin_api/constants.js#L9) (like this `module.exports.RPC_URL = RPC_CONNECTION_MAIN_URL`).
2. Run Bitcoin server ```bitcoind```
3. Run the project ```yarn start```
4. Send requests to this API.
