const questions = require('inquirer');
// const fs = require('fs')

questions.prompt([
    {
        type: "confirm",
        name: "needIstallation",
        message: "Is there any installation instructions?",
        default: "no"
    },
    {
        type: "confirm",
        name: "installation",
        message: "Does your project require npm packages?",
        when: (answers) => answers.needIstallation
    },
    {
        type: "input",
        name: "npms",
        message: "What is your username?",
    }
])


// .then ((answers) => {
//     if(answers.isInstallation){
//         questions.prompt({
//             type: "input",
//             name: "installation",
//             message: "Enter Installation Instructions"
//             })
//     }
//     questions.prompt([
//         {
//             type: "Input",
//             name: "giveName",
//             message: "What is your name?"
//             }
//     ])
// })

// questions.prompt([
//     {
//         type: "input",
//         name: "projectName",
//         message: "Hello, Please enter your project name!"
//     },
//     {
//         type: "input",
//         name: "type",
//         message: "What type of project is it?"
//     },
//     {
//         type: "input",
//         name: "description",
//         message: "This project is meant to..."
//     },
//     {
//         type: "confirm",
//         name: "isInstallation",
//         message: "Is there any installation instructions?"
//     },
//     {
//         type: "input",
//         name: "installation",
//         message: "Enter Installation Instructions",
//         when: function(answers) {
            
//         }
//     },
//     {
//         type: "input",
//         name: "usage",
//         message: "Please enter Usage Instructions"
//     },
//     {
//         type: "list",
//         name: "license",
//         message: "What liscence is your project under?",
//         choices: ["Apache 2.0", "MIT", "BSD 2-Clause", "BSD 3-Clause", "GNU Affero General Public License v3.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0"]
//     },
//     {
//         type: "list",
//         name: "licenseColor",
//         message: "Choose a color for your license badge",
//         choices: ["red", "orange", "yellow", "yellowgreen", "brightgreen","green", "blue", "lightgrey"]
//     },
//     {
//         type: "input",
//         name: "contributing",
//         message: "Enter Contribution guidelines or N/A if there are none"
//     },
//     {
//         type: "input",
//         name: "tests",
//         message: "Enter Test Instructions or N/A if there are none"
//     },
//     {
//         type: "input",
//         name: "github",
//         message: "Please enter your GitHub profile link"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "Please enter your email address"
//     }
// ]).then((data) => {
//     readmeTextContent =
//  `# ${data.projectName} 
        
// ## Description
        
// ${data.description}

// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [Contributing](#contributing)
// - [License](#license)
// - [Test](#test)
// - [Questions](#questions)

// ## Installation

// ${data.installation}

// ## Usage

// ${data.usage}

// ## Contributing

// ${data.contributing}

// ## License

// ![License](https://img.shields.io/badge/License-${data.license}-${data.licenseColor}.svg)

// ## Test

// ${data.test}

// ## Questions

// ${data.github}
// ${data.email}
// `
// fs.writeFile(`README.md`, readmeTextContent, (err) =>
//         err ? console.log(err) : console.log("success!"))
// });
