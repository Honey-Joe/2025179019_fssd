//object used as global variable it can accessed any where
var user = {
    name : "joe",
    acc_no : 123456789,
    balance : 6000,
    withdraw : (amt)=>{
        return user.balance -=amt  
    },
    deposit: (amt)=>{
        return user.balance += amt
    }
}
const updateBalance = function(operation , amount){
    let updatedBalance = user.balance // updatedBalance used as local variable
    if(operation.toLowerCase() === "withdraw"){
        if(checkBalance(amount)){
            console.log("The withdrawed amount : " , amount);
            updatedBalance = user.withdraw(amount)
        }else{
            console.log("Insuffucient Balance")
        }
    }else if(operation.toLowerCase() === "deposit"){
        console.log("The deposited amount : " , amount);
        updatedBalance = user.deposit(amount)
    }
    console.log("Name : ", user.name)
    console.log("Account Number :" , user.acc_no );
    console.log("The updated balance : " , updatedBalance)
    function checkBalance(amt){ 
        if(amt > user.balance){
            return false
        }

        return true;
    }
}
// console.log(updatedBalance) // Cannot access as it is declared as let 
updateBalance("WithDraw" , 600)