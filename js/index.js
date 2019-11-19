let pantsMinusButton=document.getElementById("minusButton");
let pantsPlusButton=document.getElementById("plusButton");

function minusDetails(){
    let label = document.getElementById(`pantsQty`);
    label.innerHTML = parseInt(label.innerHTML)-1;

}
function plusDetails(){
    let label = document.getElementById(`pantsQty`);
    label.innerHTML = parseInt(label.innerHTML)+1;
}
minusButton.addEventListener("click",minusDetails);
plusButton.addEventListener("click",plusDetails);