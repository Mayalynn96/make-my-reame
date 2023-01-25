// calling inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs')

// prompting questions to fill README
inquirer.prompt([
    {
        type: "input",
        name: "projectName",
        message: "Hello, Please enter your project name!"
    },
    {
        type: "input",
        name: "projectType",
        message: "What type of project is it?",
    },
    {
        type: "input",
        name: "badgeColor",
        message: "Enter a color for your project type badge",
        default: "pink"
    },
    {
        type: "input",
        name: "problem",
        message: "What does it do?/What problem does it solve?"
    },
    {
        type: "input",
        name: "motivations",
        message: "What were the motivations to build this project?"
    },
    {
        type: "input",
        name: "extraDescription",
        message: "What did you learn? Anything else to add to the description?"
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
        choices: ["Apache 2.0", "MIT", "BSD 2Clause", "BSD 3Clause", "GNU Affero General Public License v3.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0"]
    },
    {
        type: "input",
        name: "licenseColor",
        message: "Please enter a color for your license badge",
        default: "blue"
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
    // Makes sure the item entered is in the right format
    function joinSpaces(string, sep){
        const stringArr = string.split(" ")
        return stringArr.join(sep)
    }
    const projectTypeArrstring = joinSpaces(data.projectType, "_")
    const licenseTypeArrstring = joinSpaces(data.license, "_")
    const typeBadgeColor = joinSpaces(data.badgeColor, "")
    const licenseBadgeColor = joinSpaces(data.licenseColor, "")
    
    // turning the packages list into a nice list if there is any and adding the other instructions
    let npmList = "";

    if(data.needNpm){
        const allNpmString = data.npm
        const allNpm = allNpmString.split("/")
         allNpm.forEach(element => {
            npmList = npmList + "\n" + "-" + element + "\n"
         });
    }
    // Making tmarkdown for installation instructions to fit user input
    let instructionText = "";
    // if there is npms to install it will add the following text to installation instructions
    if(data.needNpm){
        instructionText = `
If the folder contains a package.json with dependencies listed and/or package-lock.json file, simply enter 'npm install' in the terminal.
If none of those files are available or there aren't any dependencies listed in the package.json make sure to follow these steps:

1. type 'npm init' into the terminal
2. type 'npm package-name@version' for each package listed below:

${npmList}
`;
    } 
    // if there is more installation instruction they will be added and if not but there is npms it won't add the default
    if(data.installation != "N/A"){
        instructionText = `
        ${instructionText}

        ${data.installation}
        `
    } else if(!data.needNpm){
        instructionText = data.installation
    }
    // markedown for fs.writeFile README
    readmeTextContent =
`# ${data.projectName} 
        
## Description
        
![Type](https://img.shields.io/badge/Type-${projectTypeArrstring}-${typeBadgeColor}.svg)
![License](https://img.shields.io/badge/License-${licenseTypeArrstring}-${licenseBadgeColor}.svg)

${data.problem} ${data.motivations} ${data.extraDescription}

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

This project is covered under the ${data.license} license.

## Credit

${data.credit}

## Test

${data.test}

## Contributing

${data.contributing}

## Questions

Find me on GitHub: ${data.github}

Or email me at: ${data.email}`
// Creating the new README with fs.writeFile
fs.writeFile(`README.md`, readmeTextContent, (err) =>
        err ? console.log(err) : console.log("success!"))
});

