import inquirer from 'inquirer';
let table = true;
let user_number = await inquirer.prompt({
    name: "number",
    message: "Enter your number",
    type: "number"
});
let myNumber = user_number.number;
if (myNumber) {
    console.log("Here is the table of " + myNumber + "\n");
    for (let h = 1; h <= 10; h++) {
        console.log(`${user_number.number} x ${h} = ${user_number.number * h}`);
    }
    while (table) {
        let sec_ques = await inquirer.prompt({
            name: "askagain",
            message: "Do you want to enter another number?",
            type: "list",
            choices: ["Yes", "No"]
        });
        if (sec_ques.askagain == "Yes") {
            let user_number = await inquirer.prompt({
                name: "number",
                message: "Enter your number",
                type: "number"
            });
            if (user_number.number) {
                console.log("Here is the table of " + user_number.number + "\n");
                for (let h = 1; h <= 10; h++) {
                    console.log(`${user_number.number} x ${h} = ${user_number.number * h}`);
                }
            }
            else {
                console.log("Enter Valid Number");
            }
        }
        else {
            table = false;
        }
    }
}
else {
    console.log("Enter Valid Number");
}
