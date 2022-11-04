const form = document.querySelector("form");
const tipModal = document.getElementById("tip-modal")

if (!window.ethereum) {
    tipModal.classList.add("no-wallet")
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const amount = formData.get("amount")
    console.log(amount)
});