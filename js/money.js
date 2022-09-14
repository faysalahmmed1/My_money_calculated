document.getElementById('Total-cost-button').addEventListener('click', function () {
    const foodCost = document.getElementById('food-cost');
    const foodCostAmount = foodCost.value;
    console.log(foodCostAmount);

    //clear input field 
    foodCost.value = '';

    // get current cost 
    const TotalCost = document.getElementById('total-expenses');
    const totalCostNumber = TotalCost.innerText;
    console.log(totalCostNumber);


})