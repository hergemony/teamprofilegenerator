function createHTML(teamMembers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="/dist/assets/styles.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron text-white mb-3">
                    <h1 class="text-center">MEET THE TEAM</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${createTeam(teamMembers)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

function createTeam(teamMembers) {
        function createManager(manager) {
            return `
            <div class = "card employee-card manager-card">
                <div class = "card-header text-center">
                    <h2 class = "card-title">${manager.getName()}</h2>
                    <h4 class = "card-title">Role: ${manager.getRole()}</h4>
                </div>
                <div class = "card-body">
                    <ul class = "list-group">
                        <li class = "list-group-item">ID: ${manager.getId()}</li>
                        <li class = "list-group-item">Email: <a href= "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class = "list-group-item">Phone Number: <a href = "tel: ${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                    </ul>
                </div>
            </div>
        `;};
        function createEngineer(engineer) {
            return `
            <div class = "card employee-card engineer-card">
                <div class = "card-header text-center">
                    <h2 class = "card-title">${engineer.getName()}</h2>
                    <h4 class = "card-title">Role: ${engineer.getRole()}</h4>
                </div>
                <div class = "card-body">
                    <ul class = "list-group">
                        <li class = "list-group-item">ID: ${engineer.getId()}</li>
                        <li class = "list-group-item">Email: <a href= "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class = "list-group-item">GitHub: <a href = "https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
                    </ul>
                </div>
            </div>
        `;};
        function createIntern(intern) {
            return `
            <div class = "card employee-card intern-card">
                <div class = "card-header text-center">
                    <h2 class = "card-title">${intern.getName()}</h2>
                    <h4 class = "card-title">Role: ${intern.getRole()}</h4>
                </div>
                <div class = "card-body">
                    <ul class = "list-group">
                        <li class = "list-group-item">ID: ${intern.getId()}</li>
                        <li class = "list-group-item">Email: <a href= "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class = "list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>    
        `;};
        const html = [];
        html.push(teamMembers
            .filter(employee => employee.getRole() === 'Manager')
            .map(manager => createManager(manager))
            );
        html.push(teamMembers
            .filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => createEngineer(engineer))
            .join("")
            );
        html.push(teamMembers
            .filter(employee => employee.getRole() === 'Intern')
            .map(intern => createIntern(intern))
            .join("")
            );
        return html.join("")
}
module.exports = createHTML;