const Web3 = require('web3')
let web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/2e59a906ffc04dc58146ef9b378b9528"));

let abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_fname",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_age",
                "type": "uint256"
            }
        ],
        "name": "setFname",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFname",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
web3.eth.getBalance("0x93acB14DBe9397af5210f0b8BD37F9e694271b3A", function (err, result) {
    if (err) {
       console.log(err)
    } else {
        console.log(web3.utils.fromWei(result))
    }
})

let address = "0x7ec8201f2030eacc11edba36b7d7974c3636ce59"

let myContract = new web3.eth.Contract(abi, address)
myContract.methods.getFname().call().then(console.log)
myContract.methods.setFname("vasu", 23).send({from:"0x93acB14DBe9397af5210f0b8BD37F9e694271b3A"}).then(function (err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})

