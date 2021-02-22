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

function startHtml() {
const html = `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Team Generator</title>
    </head>
    <body>

    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">My Team</span>
    </div>
  </nav>
<div class="container">
<div class="row">`;
fs.writeFile("./src/team.html", html, function(err) {
    if (err) {
        console.log(err);
    }
});
console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = memeber.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const github = member.getGitHub();
            data = `<div class="col-6">
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title"><strong>${name}</strong></h5>
    <h5 class="card-subtitle mb-2 text-muted">Engineer</h5>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${id}</li>
    <li class="list-group-item">Email: ${email}</li>
    <li class="list-group-item">GitHub: ${github}</li>
  
    </ul>
  </div>
</div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-sm-6">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"><strong>${name}</strong></h5>
                <h5 class="card-subtitle mb-2 text-muted">Intern</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            
                </ul>
         </div>
    </div>`;
        } else {
            const officeNumber = member.getOfficeNumber();
            data = `<div class="col-sm-6">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title"><strong>${name}</strong></h5>
              <h5 class="card-subtitle mb-2 text-muted">Manager</h5>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: ${email}</li>
              <li class="list-group-item">Office number: ${officeNumber}</li>
            
              </ul>
            </div>
          </div>`
        }
        console.log("added team member");
        fs.appendFile("./src/team.html", data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });



    
}









initApp();