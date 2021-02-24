

function addHtml(member) {
  return new Promise(function(resolve, reject) {
      const name = member.getName();
      const role = member.getRole();
      const id = member.getId();
      const email = member.getEmail();
      let data = "";
      if (role === "Engineer") {
          const github = member.getGitHub();
          data = `
          <div class="col-sm-4">
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
</div>
</div>`;
      } else if (role === "Intern") {
          const school = member.getSchool();
          data = `<div class="col-sm-4">
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
       </div>
  </div>`;
      } else {
          const officeNumber = member.getOfficeNumber();
          data = `
          <div class="col-sm-4">
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
            </div>
        </div>`
      }
      console.log("added team member");
    resolve(data)
  });



  
}


function finishHtml() {
  const html = `</div>
  </div>

  </body>
  </html>`;

   fs.appendFile("./src/team.html", html, function(err) {
     if (err) {
         console.log(err);
     };
     console.log("end");
   });
   
  
}

module.exports = addHtml;