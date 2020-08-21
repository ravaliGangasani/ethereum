const Web3 = require('web3')


async function main() {
    var web3 = new Web3("http://localhost:8545")

    let accounts = await web3.eth.getAccounts()
    console.log("account: ", accounts[0])
    let json = [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_fname",
                    "type": "string"
                },
                {
                    "name": "_age",
                    "type": "uint256"
                }
            ],
            "name": "setFname",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getFname",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
    var myContract = new web3.eth.Contract(json, accounts[0])
    myContract.methods.getFname().call().then(function (res) {
        console.log(res)
    })
}
main()