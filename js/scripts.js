//business logic
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

function mushrooms() {
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
function calctotalPrice(e) {
    event.preventDefault();
    var totalPrice = (getSizeCost() + getCrustCost() + mushroom()) * (getNumber());

    console.log(totalPrice);
    alert("Congratulations! Your order of" + getNumber() + " pizzas has been processed. The total amount is " + totalPrice + ".")

}

$("button#make-delivery").click(function (event) {
    event.preventDefault();

    $("#pizzatotal").hide();
    $(".mydata-overlay").hide();
    $("button#make-delivery").hide();
    let deliveryamount = checkoutTotal + 200;
    console.log("Final Bill is: " + deliveryamount);
    let person = $("input#name").val();
    let phone = $("input#number").val();
    let location = $("input#location").val();

    if ($("input#name").val() && $("input#number").val() && $("input#location").val() != "") {

        $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliveryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
    }
    else {
        alert("Incomplete information!");
        $(".mydata-overlay").show();
        $("button#make-delivery").show();
    }
});
event.preventDefault();
  });
});