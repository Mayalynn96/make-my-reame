const questions = require('inquirer');
const fs = require('fs')

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
        message: "Enter Installation Instructions or N/A if there are none"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter Usage Instructions"
    },
    {
        type: "list",
        name: "liscense",
        message: "What liscence is your project under?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU LEsser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter Contribution guidelines or N/A if there are none"
    },
    {
        type: "input",
        name: "tests",
        message: "Enter Test Instructions or N/A if there are none"
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
    readmeTextContent =
 `# ${data.projectName} 
        
## Description
        
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Test](#test)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## License

## Test

${data.test}

## Questions

${data.github}
${data.email}
`
fs.writeFile(`README.md`, readmeTextContent, (err) =>
        err ? console.log(err) : console.log("success!"))
});
