// create a link to HTML creation
const generateHTML = require('./src/generateHTML');

// create team profiles with classes
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('.lib/Intern');

// state node modules needed, npm file systems and inquirer
const fs = require ('fs');
const inquirer = require('inquirer');

// create team array
const teamArray = [];

// start of prompts asking user for input into node
const addManager = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager's name!");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID!")
                    return false;
                } else {
                    return true;
                }
                }
            },
            

    ])
}

