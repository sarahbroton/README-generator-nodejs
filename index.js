// array of questions for user
var answers = []; 
const userResponses = (''); 
const userInfo = (''); 
// const inquirerResponse = (''); 
// const data = (''); 

// = [
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Utils/generateMarkdown'); 

// ];

// TODO: Create an array of questions for user input
questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Write a description of your project',
        name: 'description'
    },
    
    {
        type: 'input',
        message: 'If applicable, describe the steps required to install your project for the Installation section. If none, type in N/A.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples of your project for the Usage section.',
        name: 'usage'
    },
    {   type: 'input', 
        message: 'List Your collaborators, if any, with links to their Github profiles. If you used any third-party assets that require attribution list them here.  If you followed tutoritals, include links to those as well.', 
        name: 'credits'
    }, 
    {
        type: 'list',
        message: 'Choose a licence for this project.',
        choices: ['MIT', 'Do What the F*ck You Want to Public License', 'Artistic License 2.0', 'Creative Commons Attribution Share Alike 4.0', 'Unlicence'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'If applicable, provide guidelines on how other developes can contribute to your project.',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Any questions',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'What should the filename for this readme be?',
        name: 'fileName'
    }, 

    {   type: 'input', 
        message: 'What is your GitHub username?', 
        name: 'ghusername'

    }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data);
}

function init() {
    inquirer
    .prompt(questions)
    .then((inquirerResponse) => {
        console.log(inquirerResponse); 
        console.log("making readme"); 
        writeToFile(`${inquirerResponse.fileName}.md`, generateMarkdown(inquirerResponse))
    })
    .catch((err) => {
        console.log(err); 
    });
}


init();

// *****************KEEPING THE BELOW COMMENTED OUT & WANT TO KEEP IT FOR MY RECORDS*************
//****** *********** code that DOES NOT work/i was so close :)************************************** 
// fs.writeFile('log.txt', answers, (err) =>   
//         err ? console.error(err) : console.log('Success!'))
// function init () {
//     inquirer.prompt(questions)
//     .then((inquirerResponse, data) => {   
//         console.log("Making ReadMe");
//         fs.writeFileSync("generateMarkdown.js", inquirerResponse, data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// console.log('generateMarkdown')
//         const markdown = generateMarkdown(userResponses, userInfo);
//         console.log(markdown);

// init();
// ***************************************************************************************

// // function to initialize program
// function init() {
//     // TODO: Create a function to initialize app
//     function init() { }

// }

// // function call to initialize program
// // Function call to initialize app
// init();