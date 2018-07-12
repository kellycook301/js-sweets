console.log("hello main.js");
console.log("inventory, inventory");


const sweetspot = document.querySelector("#sweetstuff");
    inventory.forEach(function(item, index){
        console.log("sweet item", index, item);
        sweetspot.innerhtml +=
        `<li class='fancy'>${inventory} ${index + 1} ${item.name}: ${item.name} ${item.flavor} ${item.topping}`
    })

const getFancy = document.querySelectorAll(".fancy");
console.log("getFancy", getFancy);

//how many sweets
function howmanySweets(){
    console.log("The sweets total:", inventory.length);
    var numberOfSweets = inventory.length;
    return numberOfSweets;
}

let totalSweets = howmanySweets();
console.log("totalSweets", totalSweets);

const btnGetTotalAmounts = documents.querySelector("#btn-getTotalSweets");
btnGetTotalAmounts.addEventListener("click", howManySweets);



// !!!READ CODE RIGHT TO LEFT!!! Thank you Steve