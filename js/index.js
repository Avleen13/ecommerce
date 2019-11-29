
let quantity;
let incBtn = document.getElementById("incrmnt");
let dcrBtn = document.getElementById("dcrmnt");
let incBtnFrShrts = document.getElementById("incrmntFrShrts");
let dcrBtnFrShrts = document.getElementById("dcrmntFrShrts");
let calcBtn = document.getElementById("Calculate");
let promoButton = document.getElementById("promoBtn");
let unitPrice,quantityOfShrts,untPrcFrShrts,extndedPrice,extndPrcFrShrts,totlExtndPrc,tax,totalAmount;


function increment() {
    quantity = parseInt(document.getElementById("quantity").innerHTML);
    quantity += 1;
    document.getElementById("quantity").innerHTML = quantity;
    
    unitPrice = parseFloat(document.getElementById("unitPrice").innerHTML);
    extndedPrice = unitPrice * quantity;
    document.getElementById("extndpr").innerHTML = extndedPrice;
}

function decrement() {

    quantity = parseInt(document.getElementById("quantity").innerHTML);
    quantity--;

    if (quantity < 0) {
        alert("VALUE SHOULD BE POSITIVE ONLY");
    }

    else {
        document.getElementById("quantity").innerHTML = quantity;

        unitPrice = parseFloat(document.getElementById("unitPrice").innerHTML);
        extndedPrice = unitPrice * quantity;
        document.getElementById("extndpr").innerHTML = extndedPrice;
    }
}

function incrementForShrts() {

    quantity = parseInt(document.getElementById("quantityOfShrts").innerHTML);
    quantity += 1;
    document.getElementById("quantityOfShrts").innerHTML = quantity;
    
    unitPrice = parseFloat(document.getElementById("unitPriceForShrts").innerHTML);
    extndedPrice = unitPrice * quantity;
    document.getElementById("extndprForShrts").innerHTML = extndedPrice;
}

function decrementForShrts() {

    quantity = parseInt(document.getElementById("quantityOfShrts").innerHTML);
    quantity--;

    if (quantity < 0) {
        alert("VALUE SHOULD BE POSITIVE ONLY");
    }

    else {
        document.getElementById("quantityOfShrts").innerHTML = quantity;

        unitPrice = parseFloat(document.getElementById("unitPriceForShrts").innerHTML)
        extndedPrice = unitPrice * quantity;
        document.getElementById("extndprForShrts").innerHTML = extndedPrice
    }
}

function extendedPriceDisplay(){
    quantity = parseInt(document.getElementById("quantity").innerHTML);
    qnttyFrShrts = parseInt(document.getElementById("quantityOfShrts").innerHTML);

    unitPrice = parseFloat(document.getElementById("unitPrice").innerHTML); 
    untPrcFrShrts = parseFloat(document.getElementById("unitPriceForShrts").innerHTML);

    extndedPrice = quantity * unitPrice;
    extndPrcFrShrts = qnttyFrShrts * untPrcFrShrts;

    totlExtndPrc = parseFloat((extndedPrice + extndPrcFrShrts).toFixed(2)); console.log(typeof(totlExtndPrc))
    document.getElementById("subTotal").innerHTML = totlExtndPrc;

    tax = parseFloat((totlExtndPrc * 13/100).toFixed(2)); console.log(typeof(tax));
    document.getElementById('tax').innerHTML = tax;

    totalAmount = (totlExtndPrc + tax); console.log(typeof(totalAmount));
    document.getElementById("total").innerHTML = totalAmount;
}

function getPromoCodeFromUser(){

    let promo = window.prompt("Have a coupon? Please Enter Here! ");

    if(promo == "NOTAX" || promo == "Notax")
    {
    quantity = parseInt(document.getElementById("quantity").innerHTML);
    qnttyFrShrts = parseInt(document.getElementById("quantityOfShrts").innerHTML);

    unitPrice = parseFloat(document.getElementById("unitPrice").innerHTML);
    untPrcFrShrts = parseFloat(document.getElementById("unitPriceForShrts").innerHTML);

    extndedPrice = quantity * unitPrice;
    extndPrcFrShrts = qnttyFrShrts * untPrcFrShrts;

    totlExtndPrc = parseFloat((extndedPrice + extndPrcFrShrts).toFixed(2)) ; 
    document.getElementById("subTotal").innerHTML = totlExtndPrc;

    tax = 0; 
    document.getElementById('tax').innerHTML = tax;

    totalAmount = parseFloat((totlExtndPrc + tax).toFixed(2)); console.log(typeof(totalAmount))
    document.getElementById("total").innerHTML = totalAmount;
    }

    if(promo == "FIFTYFIFTY" || promo == "Fiftyfifty")
    {
    quantity = parseInt(document.getElementById("quantity").innerHTML);
    qnttyFrShrts = parseInt(document.getElementById("quantityOfShrts").innerHTML);

    unitPrice = parseFloat(document.getElementById("unitPrice").innerHTML);
    untPrcFrShrts = parseFloat(document.getElementById("unitPriceForShrts").innerHTML);

    extndedPrice = quantity * unitPrice;
    extndPrcFrShrts = qnttyFrShrts * untPrcFrShrts;

    totlExtndPrc = parseFloat(((extndedPrice + extndPrcFrShrts)*0.5).toFixed(2)) ; 
    document.getElementById("subTotal").innerHTML = totlExtndPrc;

    tax = parseFloat((totlExtndPrc * 13/100).toFixed(2));
    document.getElementById('tax').innerHTML = tax;

    totalAmount = parseFloat((totlExtndPrc + tax).toFixed(2));
    document.getElementById("total").innerHTML = totalAmount;
    }


}


incBtn.addEventListener("click", increment);

dcrBtn.addEventListener("click", decrement);

incBtnFrShrts.addEventListener("click", incrementForShrts);

dcrBtnFrShrts.addEventListener("click",decrementForShrts);

calcBtn.addEventListener("click",extendedPriceDisplay);

promoButton.addEventListener("click", getPromoCodeFromUser);