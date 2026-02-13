function smartBilling(amount: number): number;
function smartBilling(amount: number, membership: string): number;
function smartBilling(amount: number, companyName: string, tax: number): string;

function smartBilling(amount: number, arg2?: any, arg3?: number): any {
  if (typeof amount == "number" && arg2 === undefined && arg3 === undefined) {
    console.log("Bill for regular customer");
    return amount;
  }

  if (
    typeof amount == "number" &&
    typeof arg2 == "string" &&
    arg3 == undefined
  ) {
    if (arg2 == "premium") {
      let discount = amount * 0.2;
      let final_amount = amount - discount;
      return `The amount for premium member after discount is : ${final_amount}`;
    } else {
      return "Invalid Membership";
    }
  }

  if (
    typeof amount == "number" &&
    typeof arg2 == "string" &&
    typeof arg3 == "number"
  ) {
    let tax = amount * (arg3 / 100);
    let total = amount + tax;

    let invoice: string =
      "Corporate Invoice \n" +
      " Company Name : " +
      arg2 +
      "\n Tax : " +
      tax +
      "\n Total Bill : " +
      total;
    return invoice;
  }
}

console.log("Final Billing :", smartBilling(2500));
console.log("Final Billing :", smartBilling(2500, "premium"));
console.log("Final Billing :", smartBilling(2500, "ABC pvt Ltd", 20));
