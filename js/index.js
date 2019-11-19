let pantsMinusButton=document.getElementById("minusButton");
let pantsPlusButton=document.getElementById("plusButton");

function minusDetails(){
    let label = document.getElementById(`pantsQty`);
    label.innerHTML = parseInt(label.innerHTML)-1;


}
function plusDetails(){
    let label = document.getElementById(`pantsQty`);
    label.innerHTML = parseInt(label.innerHTML)+1;
    console.log(label.innerHTML);
    let extPrice=label.innerHtml*40.99;
    document.getElementById(`price`).innerHTML += `$ ${extPrice}<br>`;
}
minusButton.addEventListener("click",minusDetails);
plusButton.addEventListener("click",plusDetails);