const web3 = new Web3(Web3.givenProvider)

const form = document.querySelector("form");
const tipModal = document.getElementById("tip-modal")

const send = async (amount) => {
    let accounts = []

    accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        .catch(err => {
            console.log(err)
            return []
        })

    const weiAmount = web3.utils.toWei(amount, 'ether')
    const hexAmount = web3.utils.toHex(weiAmount)
    
    if(accounts.length > 0) {
        window.ethereum.request({
            method: "eth_sendTransaction",
            params: [
                {
                    to: "0xD0959FE8eD0550704Ce34447DA59BC5B40fE0029",
                    from: accounts[0],
                    value: hexAmount
                }
            ]
        })
    }
}

if (!window.ethereum) {
    tipModal.classList.add("no-wallet")
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const amount = formData.get("amount")
    await send(amount)
});