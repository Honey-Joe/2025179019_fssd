const employee = {
    name : "Joe",
    basic : 50000,
    totalSalary : ()=>{
        const hraPer = 20 
        const daPer = 10

        //nested function 
        function calculateAllowance(basic , per ){
            return (basic * per ) / 100
        }

        const hra = calculateAllowance(employee.basic , hraPer)
        const da = calculateAllowance(employee.basic , daPer)

        console.log("Name : " , employee.name);
        console.log("Basic Salary : " , employee.basic);
        console.log("Total Salary : " , employee.basic + hra + da);
        console.log("HRA : " , hra);
        console.log("DA :" , da);
    }
}

employee.totalSalary()

