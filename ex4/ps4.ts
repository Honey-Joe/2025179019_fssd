let sysName = "LoginModule";

logSysStart();

function logSysStart():void{
    console.log("System has started");
}

const loginAcccess = function(userName :string):void{
    console.log("Access granted to " + userName);
}

const security = ():never=>{
    console.log("System is terminated");
    throw new Error("Unauthorised Login ")
}

const login = function(userName: string , password : string):void{

    
    if(userName == "admin" && password == "123"){
        
        console.log("Logged in by "+ userName)

        loginAcccess(userName);
    }else{
        security()
        console.log("This line is not executed")
    }

} 

login("admin" , "12")