const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/Engineer');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const teamMembers = [];

// intializes app markup
function initApp() {
    startHtml();
    addMember();
}
// function used to setup prompts for terminal
function addMember() {
    inquirer.prompt([{
        message: "Enter the team member's name",
        name: name
    },
    {
        type: 'list',
        message: "Pick the team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
    message: "Enter the team member's id",
    name: id
    },
    {
        message: "Enter the team member's email",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if(role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        }else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: "Enter team member's ${roleInfo}",
            name: "roleInfo"
        },
        {
            type: 'list',
            message: "Would you like to add more members to your team?",
            choices: [
                "yes",
                "no"
            ],
            name: 'moreMembers'
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }

            employees.push(newMember);
            addHTML(newMember)
            .then(function() {
                if (moreMembers === 'yes') {
                    addMember();
                }else {
                    finshHtml();
                }
            });
        });
    });
}

initApp();