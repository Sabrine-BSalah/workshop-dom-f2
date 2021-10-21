let favs = document.getElementsByClassName("fa-heart")
let plusBtns = Array.from(document.getElementsByClassName("fa-plus-circle"))
let minusBtns = Array.from(document.getElementsByClassName("fa-minus-circle"))
let qutes = Array.from(document.getElementsByClassName("quantity"))
let deleteBtns = document.querySelectorAll(".fa-trash-alt")

// favourites buttons
for (let fav of favs) {
    fav.addEventListener("click", function () {
        // if (fav.style.color === "red") {
        //     fav.style.color = "black"
        // }
        // else {
        //     fav.style.color = "red"
        // }
        fav.style.color === "red" ? fav.style.color = "black" : fav.style.color = "red"

    })
}

// plusBtns
for (let i in plusBtns) {
    plusBtns[i].addEventListener("click", function () {
        qutes[i].innerText++;
        total()
    })
}

// minusButtons
for (let i in minusBtns) {
    minusBtns[i].addEventListener("click", function () {
        if (minusBtns[i].previousElementSibling.innerText > 0)
            minusBtns[i].previousElementSibling.innerText--;
        total()
    })
}

// delete buttons
for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function () {
        deleteBtns[i].parentElement.parentElement.parentElement.remove()
        total()
    })
}

// total price function
function total() {
    let unitPrices = document.querySelectorAll(".unit-price")
    let qutes = document.querySelectorAll(".quantity")
    let totalP = document.querySelector(".total")

    let s = 0;
    for (let i = 0; i < unitPrices.length; i++) {
        s = s + unitPrices[i].innerText.replace("$", "") * qutes[i].innerText
    }
    // console.log(s)
    totalP.innerText = s + " $"
}