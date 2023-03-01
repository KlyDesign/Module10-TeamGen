//Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

//Employee Classes
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
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
        console.log(answersManeger)
        const manager = new Manager(name, id, email, officeNumber);
        return manager;
    }
    managerClassCreation(answersManeger);
    member.push(answersManeger);
    await addMember();
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
    if (answersChoice.addMember === 'No') {
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
            name: 'email',
            message: 'Employees email?' ,
        },
        {
            type: 'input',
            name: 'github',
            message: 'Employees GitHub?' ,
        },
    ]);
    const newEngineer = new Engineer(answersEngineer.name, answersEngineer.email, answersEngineer.github);
    member.push(newEngineer);
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
            name: 'email',
            message: 'Employees email?' ,
        },
        {
            type: 'input',
            name: 'school',
            message: 'Employees school?' ,
        },
    ]);
    const newIntern = new Intern(answersIntern.name, answersIntern.email, answersIntern.school);
    member.push(newIntern);
    await addMember();
}

const init = async () => {
    await manyQuestions();
    console.log (member);
}
init();