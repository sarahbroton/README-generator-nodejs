// array of questions for user
var answers = []; 

// = [
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// ];

// TODO: Create an array of questions for user input
inquirer
    .prompt ([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Project title',
    },


    {
        type: 'input',
        message: 'What are title of your sections?',
        name: 'Section title(s)'

    },
    {
        type: 'input',
        message: 'Write a description of your project',
        name: 'Project Description'
    },
    {
        type: 'input',
        message: 'If applicable, enter in your table of contents.  If none, type in N/A',
        name: 'Table of Contents'
    },
    {
        type: 'input',
        message: 'If applicable, describe the steps required to install your project for the Installation section. If none, type in N/A.',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples of your project for the Usage section.',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'Choose a licence for this project.',
        choices: ['MIT', 'Educational Community Licence v 2.0', 'Do What the F*ck You Want to Public License', 'Artistic License 2.0', 'Creative Commons Attribution Share Alike 4.0', 'Unlicence'],
        name: 'License'
    },
    {
        type: 'input',
        message: 'If applicable, provide guidelines on how other developes can contribute to your project.',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
        name: 'Tests'
    },
    {
        type: 'input',
        message: 'Any questions',
        name: 'Questions'
    }

])

// }
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    
// }

// // function to initialize program
// function init() {
//     // TODO: Create a function to initialize app
//     function init() { }

// }

// // function call to initialize program
// // Function call to initialize app
// init();