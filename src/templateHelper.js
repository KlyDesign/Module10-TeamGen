GenerateTeam = async (data) => {
    htmlOut= [];
    for (let i = 0; i < data.length; i++) {
        const employee = await data[i];
        const role = await employee.getRole();
        if (role === "Manager") {
            htmlOut += await GenerateManager(employee);
        }
        if (role === "Engineer") {
            htmlOut += await GenerateEngineer(employee);
        }
        if (role === "Intern") {
            htmlOut += await GenerateIntern(employee);
        }
    }
    return GeneratedPage(htmlOut);
}
const GenerateManager = async (manager) => {
    return `
    <div class="card col-3 m-3">
        <div class="card-header display-6 text-white bg-success">
            ${manager.name} //  <br>${manager.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: ${manager.email}</li>
            <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    `  
}
const GenerateEngineer = async (engineer) => {
    return `
    <div class="card col-3 m-3">
        <div class="card-header display-6 text-white bg-success">
            ${engineer.name} // <br>${engineer.getRole()}    
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.getRole()}</li>
            <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
        </ul>
    </div>
    `
}
const GenerateIntern = async (intern) => {
    return `
    <div class="card col-3 m-3">
        <div class="card-header display-6 text-white bg-success">
            ${intern.name} // <br>${intern.getRole()}
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
    `
}
const GeneratedPage =  async (htmlOut) => {
    return `<!doctype html>
    <html lang="en">
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        </head>
        <body>
        <nav class="container-fluid mx-auto justify-content-center navbar navbar-light bg-success">
            <span class="navbar-brand text-white mb-0 fs-1 ">My Team</span>
        </nav>
        <br>
        <div class="container-fluid mx-auto col-10">
            <div class = "row justify-content-between">
            ${htmlOut}
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </body>
    </html>`
}
module.exports = GenerateTeam;