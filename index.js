const questions = require('inquirer');
const fs = require('fs')

questions.prompt([
    {
        type: "input",
        name: "projectName",
        message: "Hello, Please enter your project name!"
    },
    {
        type: "list",
        name: "type",
        message: "What type of project is it?",
        choices: ["a Website", "an Application", "a File Generator"]
    },
    {
        type: "input",
        name: "description",
        message: "Give a detailed description of your project"
    },
    {
        type: "confirm",
        name: "needNpm",
        message: "Does your project require npm packages?",
    },
    {
        type: "Input",
        name: "npm",
        message: "What npms are needed for this project? (please seperate by / if multiple are required)",
        when: (answers) => answers.needNpm
    },
    {
        type: "input",
        name: "installation",
        message: "Enter any other installation instructions not related to npm packages installation",
        default: "N/A",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter Usage Instructions"
    },
    {
        type: "list",
        name: "license",
        message: "What liscence is your project under?",
        choices: ["Apache 2.0", "MIT", "BSD 2-Clause", "BSD 3-Clause", "GNU Affero General Public License v3.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0"]
    },
    {
        type: "list",
        name: "licenseColor",
        message: "Choose a color for your license badge",
        choices: ["red", "orange", "yellow", "yellowgreen", "brightgreen","green", "blue", "lightgrey"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter Contribution guidelines",
        default: "N/A",
    },
    {
        type: "input",
        name: "test",
        message: "Enter testing instructions",
        default: "N/A"
    },
    {
        type: "input",
        name: "credit",
        message: "Enter credits",
        default: "N/A",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub profile link"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    }
]).then((data) => {
    let npmList = "";

    if(data.needNpm){
        const allNpmString = data.npm
        const allNpm = allNpmString.split("/")
        console.log(allNpm)
         allNpm.forEach(element => {
            npmList = npmList + "\n" + "-" + element + "\n"
         });
    }

    let instructionText = "";

    if(data.needNpm){
        instructionText = `
If the folder contains a package.json and package-lock.json file, simply enter 'npm install' in the terminal.
If the folder only contains a package.json, follow step 2 of the next instructions.
If none of those files are available make sure to follow these steps:

1. type 'npm init' into the terminal
2. type 'npm package-name@version' for each package listed below:

${npmList}
`;
    } 

    if(data.installation != "N/A"){
        instructionText = `
        ${instructionText}

        ${data.installation}
        `
    } else if(!data.needNpm){
        instructionText = data.installation
    }

    readmeTextContent =
 `# ${data.projectName} 
        
## Description
        
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credit](#credit)
- [Test](#test)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

${instructionText}

## Usage

${data.usage}

## License

![License](https://img.shields.io/badge/License-${data.license}-${data.licenseColor}.svg)

## Credit

${data.credit}

## Test

${data.test}

## Contributing

${data.contributing}

## Questions

${data.github}
${data.email}
`
fs.writeFile(`README.md`, readmeTextContent, (err) =>
        err ? console.log(err) : console.log("success!"))
});

