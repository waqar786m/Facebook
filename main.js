import inquirer from "inquirer";
import chalk from "chalk";
// predefined email and password
const predefinedEmail = "waqarkhan123";
const predefinedPassword = "skin12345";
let User = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "Welcome to Facebook. (press Enter)",
    },
]);
// Select Option
let action = await inquirer.prompt([
    {
        name: "Name",
        type: "list",
        message: "Select the Option",
        choices: [
            { name: chalk.red("Sign in"), value: "Sign in" },
            { name: chalk.yellow("Sign up"), value: "Sign up" },
        ]
    },
]);
// Sign Up process 1
if (action.Name === "Sign up") {
    let SignInDetail1 = await inquirer.prompt([
        {
            name: "FirstName",
            type: "input",
            message: "FirstName",
        },
        {
            name: "lastName",
            type: "input",
            message: "LastName",
        },
    ]);
}
// Sign up process 2
if (action.Name === "Sign up") {
    let SignInDetail2 = await inquirer.prompt([
        {
            name: "email",
            type: "input",
            message: "Please enter your email.",
        },
        {
            name: "password",
            type: "input",
            message: "Please enter your password.",
        },
    ]);
}
console.log(chalk.blue("Congratulations! You have successfully sign up."));
// Sign in process 
if (action.Name === "Sign in") {
    let SignInDetail = await inquirer.prompt([
        {
            name: "email",
            type: "input",
            message: "Please enter your email.",
        },
        {
            name: "password",
            type: "input",
            message: "Please enter your password.",
        },
    ]);
    // Check if email and password match predefined values
    if (SignInDetail.email === predefinedEmail &&
        SignInDetail.password === predefinedPassword) {
        console.log("Congratulations! You are successfully sign in.");
    }
    else {
        console.log("Sorry, your email and password are incorrect.");
    }
}
;
