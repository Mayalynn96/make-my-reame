const questions = require('inquirer');

questions.prompt([
    {
        type: "input",
        name: "projectName",
        message: "Hello, Please enter your project name!"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a detailed description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter Installation Instructionsc or N/A if there are none"
    }
]).then((data) => {
    console.log(data.projectName + "\n" + "Description: " + data.description + "\n" + "Installastion: : " + data.installation)
});