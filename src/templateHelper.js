htmlOut= "";

//figure out how to take inquirer answers and make them into html


const GeneratedHTML = (team) => {
    const GenerateManager = (manager) => {
        return `
        <div class="card col-3 m-3">
            <div class="card-header display-6 text-white bg-success">
                ${manager.name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: ${manager.getRole()}</li>
                <li class="list-group-item">Office: ${manager.getOfficeNumber}</li>
            </ul>
        </div>
        `  
    }
}


module.exports = page => {
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

                ${GeneratedHTML(team)}
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </body>
    </html>`
}