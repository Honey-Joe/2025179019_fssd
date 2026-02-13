function smartBilling(amount, arg2, arg3) {
    if (typeof amount == "number" && arg2 === undefined && arg3 === undefined) {
        console.log("Bill for regular customer");
        return amount;
    }
    if (typeof amount == "number" && typeof arg2 == "string" && arg3 == undefined) {
        if (arg2 == "premium") {
            var discount = amount * 0.2;
            var final_amount = amount - discount;
            return "The amount for premium member after discount is : ".concat(final_amount);
        }
        else {
            return "Invalid Membership";
        }
    }
    if (typeof amount == "number" && typeof arg2 == "string" && typeof arg3 == "number") {
        var tax = amount * (arg3 / 100);
        var total = amount + tax;
        var invoice = "Corporate Invoice \n" + " Company Name : " + arg2 + "\n Tax : " + tax + "\n Total Bill : " + total;
        return invoice;
    }
}
console.log("Final Billing :", smartBilling(2500));
console.log("Final Billing :", smartBilling(2500, "premium"));
console.log("Final Billing :", smartBilling(2500, "ABC pvt Ltd", 20));
