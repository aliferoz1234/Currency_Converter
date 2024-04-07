#! /usr/bin/env node
import inquirer from "inquirer"

const currency:any={
    USD:1, //Base Currency
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    SR:3.75,
    UED:3.67,
    PKR:280,
};
let user_answer=await inquirer.prompt(
    [
        {
            name:"from",
            message:"Enter from currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","SR","UED","PKR"]

        },
        {
            name:"to",
            message:"Enter to currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","SR","UED","PKR"]

        },
        {
            name:"amount",
            message:"Enter your amount",
            type:"number",

        }
    ]
)

let fromAmount=currency[user_answer.from]
let toAmount=currency[user_answer.to]
let amount=user_answer.amount
let baseAmount=amount/fromAmount//USD  base currency
let convertedAmount=baseAmount*toAmount
let roundedNumber=convertedAmount.toFixed(0);
console.log(roundedNumber);