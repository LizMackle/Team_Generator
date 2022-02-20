// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

const Manager = require('./src/Manager');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');

const createHtml = require('./src/html/create-html');

inquirer.prompt([
    // Ask user which team member they want to add
    // Type of team member: Manager, Egineer, Intern
    {
        type: 'list',
        message: 'What role would you like to add?',
        name: 'role',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
        ]
    },
    // Name
    {
        type: 'input',
        message: 'What is the employees name?',
        name: 'name',
    },
    // ID
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees ID number?',
    },
    // Email
    {
        type: 'input',
        name: 'email',
        message: 'What is the employees email?',
    },

    // Unique question
    // Manager
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Managers office number?',
        when: (answers) => answers.role === 'Manager',
    },
    // Engineer
    {
        type: 'input',
        name: 'github',
        message: 'What is the Engineers Github?',
        when: (answers) => answers.role === 'Engineer',
    },
    // Intern
    {
        type: 'input',
        name: 'school',
        message: 'Where does the Intern go to school?',
        when: (answers) => answers.role === 'Intern',
    },
    // Ask if user would like to add another team member
    {
        type: 'confirm',
        name: 'addAnotherMember',
        message: 'Would you like to add another team member?',
    }
])

    .then((answers) => {

        // Creates new employee
        if (answers.role === 'Manager') {
            employees.push(
                new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            )
            );
        }

        if (answers.role === 'Engineer') {
            employees.push(
                new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github
                )
            );
        }

        if (answers.role === 'Intern') {
            employees.push(
                new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school
                )
            );
        }

        // Ask if user would like to add another team member
        // if yes - repeat 
        if (answers.addAnotherMember) {
            return prompt();
        } else {

            // if no - generate html 
            const html = generateHtml(employees);

            fs.writeFileSync(__dirname + '/dist/generated.html', html, 'utf-8');

            process.exit(0);
        }
    });

prompt();
