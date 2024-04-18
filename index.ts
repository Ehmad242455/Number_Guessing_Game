import inquirer from 'inquirer';

type ansType = {
    userGuess : number
}

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answeres : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your Guess b/w 1 to 10: ",
    }
])

const {userGuess} = answeres;

console.log(userGuess, "User Guess", systemGeneratedNo, "Sys")

if(userGuess ===systemGeneratedNo){
    console.log("Wow your answere is correct \n You win!")
}else{
    console.log("Please try again.Better luck next time.")
}