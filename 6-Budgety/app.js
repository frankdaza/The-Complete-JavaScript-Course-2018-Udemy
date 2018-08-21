// BUDGET CONTROLLER
var budgetController = (function() {
  

})();

// UI CONTROLLER
var UIController = (function () {

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    function ctrlAddItem() {
        // 1. Get the field input data

        
        // 2. Add the item to the budget controller


        // 3. Add the item to the UI


        // 4. Display the budget to the UI
        
        console.log("It works!");
    };
    
    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);