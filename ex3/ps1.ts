
interface Employee {
  empid: number;
  name: string;
  category: "permanent" | "contract" | "intern";
}


interface Permanent extends Employee {
  category: "permanent";
  basic: number;
  hra: number;
  da: number;
}


interface Contract extends Employee {
  category: "contract";
  hourlyRate: number;
  hoursWorked: number;
}

interface Intern extends Employee {
  category: "intern";
  stipend: number;
}



function calculateSalary(
  emp: Permanent | Contract | Intern
): number {

  if (emp.category === "permanent") {
    return emp.basic + emp.hra + emp.da;
  } 
  else if (emp.category === "contract") {
    return emp.hourlyRate * emp.hoursWorked;
  } 
  else {
    return emp.stipend; // intern
  }
}


const externalEmployeeData: any = {
  empid: 101,
  name: "Joe",
  category: "permanent",
  basic: 30000,
  hra: 6000,
  da: 9000
};

const tempEmp : any = {
    empid: 101,
  name: "Joe",
  category: "contract",
  hourlyRate: 20,
  hoursWorked: 10

}

const intern : any  = {
    empid : 103,
    name : "David",
    category : "intern",
    stipend : 3000

} 

const emp1 = externalEmployeeData as Permanent;
const emp2 = tempEmp as Contract;
const emp3 = intern as Intern;



const display = (emp : Permanent | Contract | Intern , salary:number):void=>{
    console.log("Employee Name:", emp.name);
    console.log("Employee Category:", emp.category);
    console.log("Monthly Salary:", salary);
    console.log("------------------------------");
    
}

display(emp1 , calculateSalary(emp1));
display(emp2 , calculateSalary(emp2));
display(emp3 , calculateSalary(emp3))