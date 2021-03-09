function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}

function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("number").value;
    return parseInt(selectedNumber);
}

function cheese() {
    var cheese = 0;
    var addCheese = document.getElementById("toppings");
    if (addCheese.checked === true) {
        cheese = 50;
    }
    return parseInt(cheese);
}
function pepperoni() {
    var pepperoni = 0;
    var addPepperoni = document.getElementById("toppings");
    if (addPepperoni.checked === true) {
        pepperoni = 80;
    }
    return parseInt(pepperoni);
}
function mushrooms() {
    var mushroom = 0;
    var addMushroom = document.getElementById("toppings");
    if (addMushroom.checked === true) {
        mushroom = 60;
    }
    return parseInt(mushroom);
}
function chicken() {
    var chicken = 0;
    var addChicken = document.getElementById("toppings");
    if (addChicken.checked === true) {
        chicken = 100;
    }
    return parseInt(mushroom);
}

$(document).ready(function () {
    $("form#choosez").submit(function (event) {
        event.preventDefault();
        var totalPrice = (getSizeCost() + getCrustCost() + cheese()) * (getNumber());
        console.log(totalPrice);
    alert("Congratulations! Your order of " + getNumber() + " pizzas has been processed. The total amount is " + totalPrice + ".")

    });
});


$(document).ready(function () {
    $("form#formXYZ").submit(function (event) {
        event.preventDefault();
        var name = $("input#name").val();
        var number = $("input#number").val();
        var location = $("input#location").val();
        if ($("input#name").val() && $("input#location").val()) {
            alert(name + ", we have recieved your order and it will be delivered to you at " + location + "in 1 hour!");
        }
        else {
            alert("Enter all your information to proceed!");
        }
    });
});