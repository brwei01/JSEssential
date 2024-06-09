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



let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage =  "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please Log in to access the system.";
}

console.log("User Message:", userMessage);


// Switch examples
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "mananger":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

// Ternary operator
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status: ", authenticationStatus);

// Practice: Dietary services
let person = "Enrolled Member";
let dietaryStatus;

if (person === "Employee") {
    dietaryStatus = "Access to Dietary Services";
} else if (person === "Enrolled Member") {
    dietaryStatus = "Access to Dietary Services & One-on-one interaction with a dietician";
} else if (person === "Subscriber") {
    dietaryStatus = "Partial access to Dietary Services";
} else {
    dietaryStatus = "Please subscribe to avail this facility";
}

console.log("Dietary option: " + dietaryStatus);

