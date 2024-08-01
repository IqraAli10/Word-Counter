import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter a sentence to count: ",
        type: "input",
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word count is ${words.length}`);
