const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

init = () => {
    addManager();
}

addManager = () => {
    inquirer.prompt ([
    {
        type:'input',
        name:'name',
        message:"Please enter the team manager's name."
    },
    {
        type:'input',
        name:'id',
        message:'What is your employee ID?'
    },
    {
        type:'input',
        name:'email',
        message:'What is your email?'
    },
    {
        type:'input',
        name:'officeNumber',
        message:'What is your office number?'
    },
    {
        type:'list',
        name:'continueMembers',
        message:'Would you like to add another team member?',
        choices:[
            'yes',
            'no'
        ]
    }])
    .then(function(data){
        if(data.continueMembers === 'yes'){
            data = new Manager(data.name, data.id, data.email, data.officeNumber, "Manager");
            employees.push(data);
            addMember();
        } else {
            data = new Manager(data.name, data.id, data.email, data.officeNumber, "Manager");
            employees.push(data);
            stopAdd();
        }
    })
}

addMember = () => {
    inquirer.prompt ([
        {
            type:'list',
            name:'role',
            message: "Please select team member's role",
            choices:[
                "Employee",
                "Engineer",
                "Intern"
            ]
        },
        {
            type:'input',
            name:'name',
            message:"Enter team member's name"
        },
        {
            type:'input',
            name:'id',
            message:"Enter team member's ID"
        },
        {
            type:'input',
            name:'email',
            message:"Enter team member's email?"
        }])
    .then(function(data) {
        if (data.role === 'Engineer'){
            inquirer.prompt([
                {
                    type:'input',
                    message: `Enter engineer's Github username`,
                    name: 'roleInfo'
                },
                {
                    type:'list',
                    name:'continueMembers',
                    message:'Would you like to add another team member?',
                    choices:[
                        'yes',
                        'no'
                    ]
                }])
            .then(function(answers){
                data = new Engineer(data.name,data.id,data.email,answers.roleInfo,data.role);
                employees.push(data);
                if(answers.continueMembers === 'yes'){
                    console.log(employees);
                    addMember();
                } else {
                    console.log(employees);
                    stopAdd();
                }
            })

        } else if (data.role === 'Intern'){
            inquirer.prompt([
                {
                    type:'input',
                    message: `Enter intern's school`,
                    name: 'roleInfo'
                },
                {
                    type:'list',
                    name:'continueMembers',
                    message:'Would you like to add another team member?',
                    choices:[
                        'yes',
                        'no'
                    ]
                }])
            .then(function(answers){
                data = new Intern(data.name,data.id,data.email,answers.roleInfo,data.role);
                employees.push(data);
                if(answers.continueMembers === 'yes'){
                    console.log(employees);
                    addMember();
                } else {
                    console.log(employees);
                    stopAdd();
                }
            })
        } else if (data.role === 'Employee'){
            inquirer.prompt([
                {
                    type:'list',
                    name:'continueMembers',
                    message:'Would you like to add another team member?',
                    choices:[
                        'yes',
                        'no'
                    ]
                }])
            .then(function(answers){
                data = new Employee(data.name,data.id,data.email,data.role);
                employees.push(data);
                if(answers.continueMembers === 'yes'){
                    console.log(employees);
                    addMember();
                } else {
                    console.log(employees);
                    stopAdd();
                }
            })
        }

    })
};

stopAdd = () => {
    // const html = `</div
    // </div>
    // </body>
    // </html>`;
    //     fs.appendFile("./output/team.html", html, function(err){
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
    console.log("End");
};

init();
