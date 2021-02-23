const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/Engineer');
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const addHtml = require('./dist/pageTemplate');


const teamMembers = [];
let members = "";




// array used to setup prompts for terminal
const addMember = () => {
     inquirer.prompt([
        {
        type: 'input',
        name: "name",
        message: "Enter the team member's name:",
    },
    {
        type: 'list',
        message: "Pick the team member's role:",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
    message: "Enter the team member's id:",
    name: "id"
    },
    {
        message: "Enter the team member's email:",
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
            message: `Enter team member's ${roleInfo}`,
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

             teamMembers.push(newMember);
             console.log(teamMembers);
            addHtml(newMember)
            .then(function(data) {
                console.log(data)

                members += data
                if (moreMembers === 'yes') {
                    addMember();
                }else {
                   let html = startHtml(members);
                   finishHtml(html)
                }
            });
        });
    });
}

// function renderHtml(memberArray) {
//     startHtml();
//     for (const member of memberArray) {
//         addHtml(member);
//     }
//     finishHtml(html);
// }


function startHtml(members) {
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
<div class="row">
${members}
</div>
</body>
</html>
`;
fs.writeFile("./src.team.html", html, function(err) {
    if (err) {
        console.log(err);
    }
});

return html

}




function finishHtml(html) {
    // const html = `</div>
    // </div>
    
    // </body>
    // </html>`;

    
    fs.appendFile("./src/team.html", html, function(err) {
        if (err) {
            console.log(err);
        };
      });
     console.log("end");
    
}

 


// intializes app markup
  function initApp() {   
    startHtml();
    addMember();
}



// addMember();
// startHtml();
 //addHtml("hello")
// .then(function() {
//     finishHtml();
// });



initApp();