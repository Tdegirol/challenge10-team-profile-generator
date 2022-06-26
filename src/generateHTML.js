const startHTML = addTeam => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    </head>
    <body>
        <header>TEAM PROFILE</header>
        <div class="container">
            <div class="row">
                ${generateTeam(addTeam)}
            </div>    
        </div>
    </body>
    </html>`
}

const managerHTML = manager => {
   return  `<div class="col-lg-3 col-md-6 col-sm-9">
        <div class="card">
            <h5 class="card-header bg-primary text-white">${manager.name}<br /><br />${manager.role}</h5>
                <div class="card-body">
                    <ul class="list-group-item">ID: ${manager.id}</ul>
                    <ul class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></ul>
                    <ul class="list-group-item">Office Number: ${manager.officeNumber}</ul>
                </div>
        </div>
    </div>`
}

const engineerHTML = engineer => {
    return `<div class="col-lg-3 col-md-6 col-sm-9">
        <div class="card">
            <h5 class="card-header bg-primary text-white">${engineer.name}<br /><br />${engineer.role}</h5>
                <div class="card-body">
                    <ul class="list-group-item">ID: ${engineer.id}</ul>
                    <ul class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></ul>
                    <ul class="list-group-item">Github: <a href = "https://github.com/${engineer.github}">https://github.com/${engineer.github}</a></ul>
                </div>
        </div>
    </div>`
}

const internHTML = intern => {
    return `<div class="col-lg-3 col-md-6 col-sm-9">
        <div class="card">
            <h5 class="card-header bg-primary text-white">${intern.name}<br /><br />${intern.role}</h5>
                <div class="card-body">
                    <ul class="list-group-item">ID: ${intern.id}</ul>
                    <ul class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></ul>
                    <ul class="list-group-item">School: ${intern.school}</ul>
                </div>
        </div>
    </div>`
}

const employeeHTML = employee => {
   return `<div class="col-lg-3 col-md-6 col-sm-9">
        <div class="card">
            <h5 class="card-header bg-primary text-white">${employee.name}<br /><br />${employee.role}</h5>
                <div class="card-body">
                    <ul class="list-group-item">ID: ${employee.id}</ul>
                    <ul class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></ul>
                </div>
        </div>
    </div>`
}

const generateTeam = employees => {
    let teamArr  = []
    teamArr.push(employees.filter(employee => employee.getRole() === 'Manager').map(manager => managerHTML(manager)))

    teamArr.push(employees.filter(employee => employee.getRole() === 'Engineer').map(engineer => engineerHTML(engineer)).join(""))

    teamArr.push(employees.filter(employee => employee.getRole() === 'Intern').map(intern => internHTML(intern)).join(""))
    teamArr.push(employees.filter(employee => employee.getRole() === 'Employee').map(emp => employeeHTML(emp)).join(""))

    return teamArr.join("")
}

module.exports = startHTML;