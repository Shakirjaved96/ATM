#! /usr/bin/env node
import inquire from "inquirer";
const answers = await inquire.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your Id: "
    },
    {
        type: "input",
        name: "userPIN",
        message: "Enter your PIN: "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account Type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Entry your amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    },
]);
if (answers.userId && answers.userPIN) {
    const balance = Math.floor(Math.random() * 100000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining balance is ", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
