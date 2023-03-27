const inquirer = require("inquirer");

function generateReadme({title, description, instructions, usageInfo, contGuides, testInfo, license, username, email}){
    return `
    # ${title}

    # Description
    ## ${description}

    # Installation Instructions
    ## ${instructions}

    # Usage
    ## ${usageInfo}

    # Contribution Guidelines
    ## ${contGuides}

    # Test Instructions
    ## ${testInfo}

    # License
    ## ${title} is licensed under the ${license}

    # Questions
    ## Direct any additional questions to my GitHub or Email
    ## My GitHub: https://github.com/${username}
    ## My Email: ${email}
    `
}

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
                'Creative Commons Zero License',
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