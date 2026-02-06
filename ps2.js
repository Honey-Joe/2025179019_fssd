const cart = [20 , 30 , 40]

const totalCost = (cart)=>{
    let sum = 0
    for(i = 0 ; i < cart.length ; i++){
        sum = sum+cart[i]
    }
    return sum
}

const discount = function(totalCost){

    let discount = 20
    console.log("Original Total : " , totalCost)
    if(totalCost > 50 ){
        totalCost -= discount
    }
    console.log("Discount Applied : " , discount);
    console.log("The cost of the cart after discount applied : " , totalCost);
}

discount(totalCost(cart));

