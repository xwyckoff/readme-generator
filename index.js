const inquirer = require("inquirer");
const licenses = [
    {
        name: 'Apache 2.0',
        badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
        link: 'https://opensource.org/licenses/Apache-2.0'
    },

    {
        name: 'GNU General Public 3.0',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        link: 'https://www.gnu.org/licenses/gpl-3.0'
    },

    {
        name: 'MIT',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        link: 'https://opensource.org/licenses/MIT'
    },

    {
        name: 'BSD 2-Clause',
        badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
        link: 'https://opensource.org/licenses/BSD-2-Clause'
    },

    {
        name: 'BSD 3-Clause',
        badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
        link: 'https://opensource.org/licenses/BSD-3-Clause'
    },

    {
        name: 'Boost Software',
        badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
        link: 'https://www.boost.org/LICENSE_1_0.txt'
    },

    {
        name: 'Creative Commons Zero',
        badge: 'https://licensebuttons.net/l/zero/1.0/80x15.png',
        link: 'http://creativecommons.org/publicdomain/zero/1.0/'
    },

    {
        name: 'Eclipse Public',
        badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
        link: 'https://opensource.org/licenses/EPL-1.0'
    },

    {
        name: 'GNU Affero General Public',
        badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
        link: 'https://www.gnu.org/licenses/agpl-3.0'
    },

    {
        name: 'GNU General Public 2.0',
        badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
        link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
    },

    {
        name: 'GNU Lesser General Public',
        badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
        link: 'https://www.gnu.org/licenses/lgpl-3.0'
    },

    {
        name: 'Mozilla Public',
        badge: 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
        link: 'https://www.gnu.org/licenses/lgpl-3.0'
    },

    {
        name: 'The Unlicense',
        badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
        link: 'http://unlicense.org/'
    }
]

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
    ## ${title} is licensed under the ${license} license

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
                'Apache 2.0',
                'GNU General Public 3.0',
                'MIT',
                'BSD 2-Clause',
                'BSD 3-Clause',
                'Boost Software',
                'Creative Commons Zero',
                'Eclipse Public',
                'GNU Affero General Public',
                'GNU General Public 2.0',
                'GNU Lesser General Public',
                'Mozilla Public',
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