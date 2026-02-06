namespace AccountModule {
  interface Account {
    acc_no: number;
    name: string;
    balance: number;
  }

  export class BankAccount implements Account {
    constructor(
      public acc_no: number,
      public name: string,
      public balance: number,
    ) {}
  }
}

namespace TransactionModule {
  import BankAccount = AccountModule.BankAccount;

  export class Transaction {
    static trans: number = 0;
    static deposit(acc:BankAccount , amt:number):void;
    static deposit(acc:BankAccount , amt:number , remark?:string):void
    static deposit(
      acc: BankAccount,
      amt: number,
      remark?: string,
      timestamp: Date = new Date(),
    ): void {
      acc.balance += amt;

      this.trans++;

      console.log(
        "Account Number : ",
        acc.acc_no,
        "Name : ",
        acc.name,
        "Deposited amount : " + amt,
        "Remarks : ",
        remark,
        `| Time: ${timestamp.toLocaleString()}`,
        "Balance : ",
        acc.balance,
      );
    }
    static withdraw(acc: BankAccount, amt: number): void {
      acc.balance -= amt;
      console.log(
        "Account Number : ",
        acc.acc_no,
        "Name : ",
        acc.name,
        "Withdrawed  amount : ",
        amt,
        "Balance : ",
        acc.balance,
      );
      this.trans++;
    }
  }
}

namespace MainModule {
  import BankAccount = AccountModule.BankAccount;
  import Transaction = TransactionModule.Transaction;

  let acc1 = new BankAccount(121, "Joe", 500);

  Transaction.deposit(acc1, 200, "Deposited ");
  Transaction.withdraw(acc1 , 300)
  console.log(Transaction.trans);
  
}
