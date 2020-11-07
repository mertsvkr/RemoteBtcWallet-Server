const { listWalletDir } = require("./listwalletdir")
const { loadWallet } = require("./loadwallet")

/** all wallets which already exist should be loaded before using them. */
async function fetchAndLoadWallet() {
    const response = await listWalletDir()
    if (response.success) {
        const wallets = response.wallets.filter(wallet => wallet.name != "")
        wallets.forEach(async (wallet, index, wallets) => {
            var result = await loadWallet(wallet.name)
            if (result.error) {
                console.error("Error occured while loading the wallet ('" + wallet.name + "'): " + result.error)
            } else if (index == wallets.length - 1) {
                console.log("All wallets are loaded successfully!")
            }
        })

    } else {
        console.error("Wallets couldn't be loaded. Server won't work properly!!! Solve the problem and restart the server")
    }
}

fetchAndLoadWallet() 