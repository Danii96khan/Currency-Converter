#! /usr/bin/env node
import inquirer from "inquirer";
//In PKR
let conversion = {
    "PKR": {
        "USD": 0.036,
        "GBP": 0.0037,
        "PKR": 1
    },
    //In GBP
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "GBP": 1
    },
    //In USD
    "USD": {
        "GBP": 0.83,
        "PKR": 227.58,
        "USD": 1
    }
};
//Step 2 using inquirer
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Select your currency?",
        choices: ["PKR", "USD", "GBP"],
    },
    {
        type: "list",
        name: "to",
        message: "Select your conversion currency?",
        choices: ["PKR", "USD", "GBP"],
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert",
    }
]);
//step 3 
const { from, to, amount } = answer;
// check input
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to  ${to} is ${result}`);
}
else {
    console.log("invalid inputs");
}
