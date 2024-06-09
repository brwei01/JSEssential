let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full acess granted";
} else if (userRole = "manager") { 
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);