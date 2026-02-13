var sysName = "LoginModule";
logSysStart();
function logSysStart() {
    console.log("System has started");
}
var loginAcccess = function (userName) {
    console.log("Access granted to " + userName);
};
var security = function () {
    console.log("System is terminated");
    throw new Error("Unauthorised Login ");
};
var login = function (userName, password) {
    if (userName == "admin" && password == "123") {
        console.log("Logged in by " + userName);
        loginAcccess(userName);
    }
    else {
        security();
        console.log("This line is not executed");
    }
};
login("admin", "123");
login("user", "123");
