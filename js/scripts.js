$(document).ready(function(){
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
        if (addPepperoni. checked === true) {
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
        var addChicken  = document.getElementById("toppings");
        if (addChicken .checked === true) {
            chicken = 100;
        }
        return parseInt(mushroom);
    }