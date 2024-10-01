// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        message: (colors.brightMagenta)('What is the title of your project?'),
        name: 'title',
    },
    {
        message: (colors.brightMagenta)('Provide a description of your project.'),
        name: 'description',
    },
    {
        message: (colors.brightMagenta)('What are the installation instructions for your project?'),
        name: 'installation',
    },
    {
        message: (colors.brightMagenta)('How is your project used?'),
        name: 'usage',
    },
    {
        message: (colors.brightMagenta)('What are the contribution guidelines for your project?'),
        name: 'contribution',
    },
    {
        message: (colors.brightMagenta)('What are the test instructions for your project?'),
        name: 'test',
    },
    {
        type: 'list',
        message: (colors.brightMagenta)('Which license does your project use?'),
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
        name: 'license',
    },
    {
        message: (colors.brightMagenta)('What is your GitHub username?'),
        name: 'github',
    },
    {
        message: (colors.brightMagenta)('What is your email address?'),
        name: 'email',
    },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponses) => {
        console.log('Generating README...');
        fs.writeFileSync('README.md', generateMarkdown(inquirerResponses));
    })
    .catch((error) => {
        console.error(error);
    });
}

// Function call to initialize app
init();
