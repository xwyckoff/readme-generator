const inquirer = require("inquirer");

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Project title: ',
            name: 'title'
        },

        {
            type: 'input',
            message: 'Project description: ',
            name: 'description'
        },

        {
            type: 'input',
            message: 'Installation instructions:',
            name: 'instructions'
        },

        {
            type: 'input',
            message: 'Usage information: ',
            name: 'usageInfo'
        },

        {
            type: 'input',
            message: 'Contribution guidelines: ',
            name: 'contGuides'
        },

        {
            type: 'input',
            message: 'Test instructions: ',
            name: 'testInfo'
        },

        {
            type: 'list',
            message: 'Select license: ',
            choices: [
                'Apache License 2.0',
                'GNU General Public License 3.0',
                'MIT License',
                'BSD 2 License',
                'BSD 3 License',
                'Boost Software License',
                'Creative Commons Zero',
                'Eclipse Public License',
                'GNU Affero General Public License',
                'GNU General Public License 2.0',
                'GNU Lesser General Public License',
                'Mozilla Public License',
                'The Unlicense'
            ],
            name: 'license'
        },

        {
            type: 'input',
            message: 'GitHub username: ',
            name: 'username'
        },

        {
            type: 'input',
            message: 'Email address: ',
            name: 'email'
        }
    ])