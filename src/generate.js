let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    
    <header>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Team Generator</h1>
              <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
          </div>
    </header>

    <main>
`

const generateHTML = (arr) => {
    arr.forEach(employee => {
        switch(employee.getRole()){
            case "Manager":
            managerCard(employee);
            break;

            case "Engineer":
            engineerCard(employee);
            break;

            default:
            internCard(employee);
            break;
        }
    });
    return html+= `
    </main>
    
    </body>
    </html>`
};

const managerCard = (manager) => {
    return html +=
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"> ${manager.getName()} </h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${manager.getRole()} </h6>
        <div class = "card" style="width: 18rem;">
        <ul class ="list-group list-group-flush>
            <li class="list-group-item">${manager.getId()}</li>
            <li class="list-group-item">${manager.getEmail()}</li>
            <li class="list-group-item">${manager.getOfficeNumber()}</li> 
        </ul>
    </div>
</div>`
}

const engineerCard = (engineer) => {
    return html +=
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"> ${engineer.getName()} </h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${engineer.getRole()} </h6>
        <div class = "card" style="width: 18rem;">
        <ul class ="list-group list-group-flush>
            <li class="list-group-item">${engineer.getId()}</li> 
            <li class="list-group-item">${engineer.getEmail()}</li>
            <li class="list-group-item">${engineer.getGitHub()}</li>
        </ul>
    </div>
</div>`
}

const internCard = (intern) => {
    return html +=
    `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"> ${intern.getName()} </h5>
        <h6 class="card-subtitle mb-2 text-muted"> ${intern.getRole()} </h6>
        <div class = "card" style="width: 18rem;">
        <ul class ="list-group list-group-flush>
            <li class="list-group-item">${intern.getId()}</li> 
            <li class="list-group-item">${intern.getEmail()}</li>
            <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
    </div>
</div>`
}




    module.exports = generateHTML