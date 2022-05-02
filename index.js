const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const jest = require('jest');

// Locations
const template = require('./src/template');
const DIST_DIR = path.resolve(__dirname, 'dist');
const output = path.join(DIST_DIR, 'index.html');

// Constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Team Members
const teamMembers = [];

// Master Function
function gitMembers() {

    // Manager function
    function gitManager() {
        console.log("Let's meet the team!");
        inquirer.prompt([
            {
             type: "input",
             name: "managerName",
             message: "What is the manager's name?",  
             validate: answer => {
                 if(answer !== "") {
                     return true;
                 }
                 return "Please enter a valid name!";
            } 
            },
            {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID number?",  
            validate: answer => {
                if(answer !== "") {
                    return true;
                    }
                return "Please enter a valid ID number!";
            } 
            },
            {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",  
            validate: answer => {
                if(answer !== "") {
                    return true;
                }
                return "Please enter a valid email!";
            } 
            },
            {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number (no spaces or characters)?",  
            validate: answer => {
                let pass = answer.match( /^[1-9]\d*$/ );
                if(pass) {
                    return true;
                }
                return "Please enter a valid phone number!";
            } 
            }
        ])
            .then(answers => {
                const manager = new Manager(
                    answers.managerName,
                    answers.managerId,
                    answers.managerEmail,
                    answers.managerOfficeNumber
                );
                teamMembers.push(manager);
                addMember();
            });
    }
    function addMember() {
        inquirer.prompt([
            {
            type: "list",
            name: "memberChoice",
            message: "Would you like to add another team member?",
            choices: [
                "Engineer",
                "Intern",
                "Finished adding members!"
            ]    
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    gitEngineer();
                    break;
                case "Intern":
                    gitIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }
    function gitEngineer() {
        inquirer.prompt([
            {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return " Please enter a valid name!"
            }
            },
            {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
            }
                return " Please enter a valid ID!"
            }
            },
            {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
            }
                return " Please enter a valid email!"
            }
            },
            {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
            }
                return " Please enter a valid username!"
            }
            }
        ])
        .then(answers => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGithub
            );
            teamMembers.push(engineer);
            addMember();
        });
    }

    function gitIntern() {
        inquirer.prompt([
            {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return " Please enter a valid name!"
            }
            },
            {
            type: "input",
            name: "internId",
            message: "What is the intern's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true;
            }
                return " Please enter a valid ID!"
            }
            },
            {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true;
            }
                return " Please enter a valid email!"
            }
            },
            {
            type: "input",
            name: "internSchool",
            message: "What school did the intern attend?",
            validate: answer => {
                if (answer !== "") {
                    return true;
            }
                return " Please enter a valid school!"
            }
            }
        ])
        .then(answers => {
            const intern = new Intern(
                answers.internName,
                answers.internId,
                answers.internEmail,
                answers.internSchool,
            );
            teamMembers.push(intern);
            addMember();
        });
    }
    function generateHTML(){
        console.log("Generating Team Profile!");
        fs.writeFileSync(output, template(teamMembers), "utf-8");
    }
    gitManager();
}
gitMembers();