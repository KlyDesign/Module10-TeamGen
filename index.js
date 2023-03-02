//Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const templateHelper = require('./src/templateHelper');

//Employee Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const member = [];
//Questions Function for inquirer
//many maneger questions lol thought it was funny 
const manyQuestions = async () => {
    const answersManeger = await inquirer.prompt([
        { 
            type: 'input',
            name: 'name',
            message: 'Manager name?',
        },
        { 
            type: 'input',
            name: 'id',
            message: 'Manager id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Manager email?' ,
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Manager office number?' ,
        },
    ]);
    const managerClassCreation = async (DATA) => {
        const { name, id,  email, officeNumber} = DATA;
        const manager = new Manager(name, id, email, officeNumber);
        member.push(manager);
    }
    managerClassCreation(answersManeger);
}

const addMember = async () => {
    const answersChoice = await inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Add another member?',
            choices: ['Engineer', 'Intern', 'No']
        },
    ]);
    if (answersChoice.addMember === 'Engineer') {
        await engineerQuestions();
    }
    if (answersChoice.addMember === 'Intern') {
        await internQuestions();
    }
    else if (answersChoice.addMember === 'No') {
        return
    }
}

const engineerQuestions = async () => {
    const answersEngineer = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name?',
        },
        { 
            type: 'input',
            name: 'id',
            message: 'Employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employees email?' ,
        },
        {
            type: 'input',
            name: 'github',
            message: 'Employees GitHub?' ,
        },
    ]);

    const EngineerClassCreation = async (DATA) => {
        const { name, id,  email, github} = DATA;
        const engineer = new Engineer(name, id, email, github);
        member.push(engineer);
    }
    EngineerClassCreation(answersEngineer);
    await addMember();
}

const internQuestions = async () => {
    const answersIntern = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name?',
        },
        { 
            type: 'input',
            name: 'id',
            message: 'Employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employees email?' ,
        },
        {
            type: 'input',
            name: 'school',
            message: 'Employees school?' ,
        },
    ]);
    const InternClassCreation = async (DATA) => {
        const { name, id,  email, school} = DATA;
        const intern = new Intern(name, id, email, school);
        console.log(intern);
        member.push(intern);
    }
    InternClassCreation(answersIntern);
    await addMember();
}


const init = async () => {
    await manyQuestions();
    await addMember();
    const html = await templateHelper(member);
    console.log(html);

 }
init();