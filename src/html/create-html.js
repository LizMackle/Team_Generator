// Create Manager card
function createManager(manager) {
    return `
    <div class="col-4">
    <div class="card-body bg-secondary text-white">
      <h3 class="card-title">${manager.name}</h3>
        <p><h4><i class="bi bi-person-circle"></i> Manager</h4></p>
        <div class="card-text p-3 mt-4 bg-white text-dark font-weight-bold">
        <p class="employee-id">Employee ID: ${manager.id}</p>
        <p class="employee-email">Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
        <p class="office-number">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
  </div>
`;
}

// Create Engineer card
function createEngineer(engineer) {
    return `
    <div class="col-4">
    <div class="card-body bg-secondary text-white">
        <h3 class="card-title">${engineer.name}</h3>
            <p><h4><i class="bi bi-eyeglasses"></i> Engineer</h4></p>
            <div class="card-text p-3 mt-4 bg-white text-dark font-weight-bold">
            <p class="employee-id">Employee ID: ${engineer.id}</p>
            <p class="employee-email">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
`;
}

// Create Intern card
function createIntern(intern) {
    return `
    <div class="col-4">
    <div class="card-body bg-secondary text-white">
        <h3 class="card-title">${intern.name}</h3>
            <p><h4><i class="fa fa-graduation-cap" aria-hidden="true"></i> Intern</h4></p>
            <div class="card-text p-3 mt-4 bg-white text-dark font-weight-bold">
            <p class="employee-id">Employee ID: ${intern.id}</p>
            <p class="employee-email">Email: <a href="mailto: ${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
`;
}

// Generate data for HTML
createHtml = (data) => {
    generateHTML = [];
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = createManager(employee);
            generateHTML.push(managerCard);
        }

        if (role === "Engineer") {
            const engineerCard = createEngineer(employee);
            generateHTML.push(engineerCard);
        }

        if (role === "Intern") {
            const internCard = createIntern(employee);
            generateHTML.push(internCard);
        }
    }

const employeeCards = generateHTML.join("");
const generateCards = createTeamProfile(employeeCards);
return generateCards;
};

// Final HTML output 
const createTeamProfile = function (employeeCards) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous" />
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header>
        <nav class="p-3 mb-5 bg-info text-center">
            <h1 class="text-white text-uppercase font-weight-bold" id="header">Team Profile</h1>
        </nav>
    </header>

    <div class="container pt-4">
        <div class="row justify-content-center">
        ${employeeCards}
        </div>
    </div>

    <footer class="p-3 navbar fixed-bottom bg-info justify-content-center font-weight-bold text-white"> ❤️ Made by
        Liz Mackle</footer>
</body>

</html>
`;
}

module.exports = createHtml
