// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
const inquirer = require('inquirer');
const fsAsync = require('fs/promises');

// TODO: Create an array of questions for user input


// Needs Name, Title, License, Email, Github
const prompts = [
    {
        type: 'input',
        name: 'title',
        message: 'What would you like your Title to be?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description for your project?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Directions for futire contributions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'List the test instructions.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'How would you like to license your project?',
        choices: ['ISC', 'Apache_2.0', 'MIT', 'no license']
    }
];

// TODO: Create a function to write README file

// Creating readme.md file
function writeToFile(fileName, data) {
    fsAsync.writeFile(path.join(process.cwd(), fileName), data)
};

// Function using inquirer to prompt user for questions

const askQuestions = () => {
    inquirer.prompt(prompts).then((answers) => {
        // Creating readme.md file using generate markdown's answers
        writeToFile('readme.md', generateMarkdown({
            ...answers
        }))
    })
};

// TODO: Create a function to initialize app

// Initializing App
function init() {
    askQuestions()
};

// Function call to initialize app
init();
