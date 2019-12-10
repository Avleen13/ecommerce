//Variables
let decrementButtonPant = document.getElementById("decPro");
let incrementButtonPant = document.getElementById("plusP");
let quanPant = document.getElementById("quanPant");
let decButtonShirt = document.getElementById("decSh");
let incButtonShirt = document.getElementById("plusS");
let quanshirt = document.getElementById("quanShirt");
let pantPriceLabel = document.getElementById("extpricePant");
let shirtPriceLabel = document.getElementById("extpriceShirt");

//FUNCTIONS
function increasequanPant() {
    let qty = parseInt(quanPant.innerHTML) + 1;
    quanPant.innerHTML = qty;
    extendedPriceP();

}


function descreasequanPant() {
    if (!parseInt(quanPant.innerHTML) == 0) {
        let qty = parseInt(quanPant.innerHTML) - 1;
        quanPant.innerHTML = qty;
        extendedPriceP();
    }
    if (parseInt(quanPant.innerHTML) == 0) {
        document.getElementById("total").innerHTML = '';
        document.getElementById("tax").innerHTML = '';
        document.getElementById("subTotal").innerHTML = '';

    }

}

function extendedPriceP() {
    let price = parseInt(quanPant.innerHTML) * 40.99;
    priceINT = price.toFixed(2);
    pantPriceLabel.innerHTML = '$' + priceINT;
    return price;
}



function increasequanShirt() {
    let qty = parseInt(quanshirt.innerHTML) + 1;
    quanshirt.innerHTML = qty;
    extendedPriceS();

}


function descreasequanShirt() {
    if (!parseInt(quanshirt.innerHTML) == 0) {
        let qty = parseInt(quanshirt.innerHTML) - 1;
        quanshirt.innerHTML = qty;
        extendedPriceS();
        if (parseInt(quanshirt.innerHTML) == 0) {
            document.getElementById("total").innerHTML = '';
            document.getElementById("tax").innerHTML = '';
            document.getElementById("subTotal").innerHTML = '';

        }
    }
}

function extendedPriceS() {
    let price = parseInt(quanshirt.innerHTML) * 10.99;
    priceINT = price.toFixed(2);
    shirtPriceLabel.innerHTML = '$' + priceINT;
    return price;
}


function calculateAll() {
    if (!parseInt(quanshirt.innerHTML) == 0 || !parseInt(quanPant.innerHTML) == 0) {
        let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
        subtotal = parseFloat(subtotal);
        document.getElementById("subTotal").innerHTML = '$' + subtotal;
        let tax = (0.13 * subtotal).toFixed(2);
        tax = parseFloat(tax);
        document.getElementById("tax").innerHTML = '$' + tax;
        let total = (subtotal + tax).toFixed(2);
        document.getElementById("total").innerHTML = '$' + total;
        document.getElementById("subTotal").style.backgroundColor = "transparent";
        document.getElementById("tax").style.backgroundColor = "transparent";
    }

}

function applycoupon() {
    const coupon = window.prompt("please enter the coupon code");
    const code = ['NOTAX', 'FIFTYFIFTY'];
    if (coupon == code[0]) {
        notax();
    } else if (coupon == code[1]) {
        fiftyfifty();
    } else if (coupon == null) {
        return;
    } else {
        alert('invalid coupon');
    }
}

function notax() {
    let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
    subtotal = parseFloat(subtotal);
    document.getElementById("subTotal").innerHTML = '$' + subtotal;
    document.getElementById("tax").innerHTML = '$' + 0;
    let total = subtotal;
    document.getElementById("total").innerHTML = '$' + total;
    document.getElementById("tax").style.backgroundColor = "red";
}

function fiftyfifty() {
    let subtotal = (extendedPriceP() + extendedPriceS()).toFixed(2);
    subtotal = parseFloat(subtotal) / 2;
    document.getElementById("subTotal").innerHTML = '$' + subtotal;
    document.getElementById("subTotal").style.backgroundColor = "red";
    let tax = (0.13 * subtotal).toFixed(2);
    tax = parseFloat(tax);
    document.getElementById("tax").innerHTML = '$' + tax;
    let total = subtotal + tax;
    total = total.toFixed(2);
    document.getElementById("total").innerHTML = '$' + total;
}

//event listeners of buttons and execution
decrementButtonPant.addEventListener("click", descreasequanPant);
incrementButtonPant.addEventListener("click", increasequanPant);
decButtonShirt.addEventListener("click", descreasequanShirt);
incButtonShirt.addEventListener("click", increasequanShirt);
document.getElementById("calculateBtn").addEventListener("click", calculateAll);
document.getElementById("promoCode").addEventListener("click", applycoupon);