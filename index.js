//Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

//Employee Classes
const Manager = require('./lib/Manager');

const Employee = require('./lib/Employee');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Questions Function for inquirer

const questions = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:   'Employee name?',
        },
        {
            type: 'input',
            name: 'id' ,  
            message: 'Employee id?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Employees email?' ,
        },
        {
            type: 'list',
            name: 'role',
            message: 'Employee Role?',
            choices: ['Engineer', 'Intern',    'Manager']
        }
    ]);
    ///make models and fisll with somethingg to sorts managers interns out
    // manager needs office number get role to be overwritten
    // engineer neefs github gets role to be overwrittes
    //  i ntern needs  school get ro le to be overwri tten
    return answers;
}