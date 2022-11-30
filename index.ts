import inquirer from "inquirer";
import ListPrompt from 'inquirer/lib/prompts/list.js';
console.clear();
let checkConfirm = true;

function welcomeMsg(msg : string) : void{//void is the return value
    console.log(`\t${msg}`);

}
function validateNumber(input:any): string | boolean{
    if(isNaN(input)){
        //console.log('This is invalid');
        return 'please enter a valid number';
    }
    else{
        return true;
    }
    
}
type Answers ={
    firstNumber :string,
    secondNumber: string;
    operation : '+'|'-'|'*'|'/'|'%'|'^'
}
welcomeMsg('Welcome to the calculator')
async function getInput(){
    
    const answers : Answers = await inquirer.prompt([
        {
        type : "input",//"number",
        name : "firstNumber",
        message :"\tEnter first number",
        validate : validateNumber
    }
    ,
    {
        name : 'operation',
        type : 'list',
        choices : ['+','-','*','/','%','^'],
        message:'\tChoose your operation'
    },

    {
        type : "input",//"number",
        name : "secondNumber",
        message :"\tEnter second number",
        validate : validateNumber
        }
    ]);
    const firstNumber = Number(answers.firstNumber);
    const secondNumber = Number(answers.secondNumber);
    switch(answers.operation){
        case '+':
            console.log(`\t${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break
        case '-':
            console.log(`\t${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break
        case '*':
            console.log(`\t${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break
        case '/':
                console.log(`\t${firstNumber} ÷  ${secondNumber} = ${firstNumber / secondNumber}`);
                break
        case '^':
            console.log(`\t${firstNumber} ^ ${secondNumber} = ${firstNumber ** secondNumber}`);
            break
        case '%':
            console.log(`\t${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
            break
        default:
            break

    }
    const answer = await inquirer.prompt([
        {
        name : "confirm",
        type : 'confirm',
        message : '\tWant to try again?',
        }
    ])
    checkConfirm = answer.confirm;
    if(!checkConfirm){
        console.log('\tCalculator exits...');

    }
    
    //console.log('confirm',answer.confirm)
    //console.log('Input :',answers);
}
do{
    (await getInput())
}
while
 (checkConfirm)