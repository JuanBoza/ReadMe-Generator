const inquirer = require("inquirer"); 
const fs = require("fs"); 
const generateMarkdown = require("./utils/generateMarkdown.js")



const questions = [
        {
            type: 'input', 
            name: 'projectTitle',
            message: 'What is the title of your project?', 
        }, 
        {
            type: 'input', 
            name: 'description',
            message: 'Input a description of your project:', 
        }, 
        {
            type: 'input', 
            name: 'Table of Contents',
            message: 'Input your Table of Contents:', 
        }, 
        {
            type: 'input', 
            name: 'installation',
            message: 'Input the installation process: ', 
        }, 
        {
            type: 'input', 
            name: 'usage',
            message: 'What is your project used for?', 
        }, 
        {
            type: 'input', 
            name: 'license',
            message: 'Licenses used throughout the project?', 
            choices: [
                'afl-3.0',
	            'apache-2.0',
	            'artistic-2.0',
	            'bsl-1.0',
	            'bsd-2-clause',
	            'bsd-3-clause',
	            'bsd-3-clause-clear',
	            'cc',
	            'cc0-1.0',
	            'cc-by-4.0',
	            'cc-by-sa-4.0',
	            'wtfpl',
	            'ecl-2.0',
	            'epl-1.0',
	            'epl-2.0',
	            'eupl-1.1',
	            'agpl-3.0',
	            'gpl',
	            'gpl-2.0',
	            'gpl-3.0',
	            'lgpl',
	            'lgpl-2.1',
	            'lgpl-3.0',
	            'isc',
	            'lppl-1.3c',
	            'ms-pl',
	            'mit',
	            'mpl-2.0',
	            'osl-3.0',
	            'postgresql',
	            'ofl-1.1',
                'ncsa',
                'unlicense',
	            'zlib',
                    ]
        }, 
        {
            type: 'input', 
            name: 'Contributors ',
            message: 'List of those that have contributed to the project:', 
        }, 
        {
            type: 'input', 
            name: 'Tests',
            message: 'What tests have been ran on the project?', 
        },
        {
            type: 'input', 
            name: 'Questions',
            message: 'Any Questions?', 
        },
        {
            type: 'input',
            name: 'username:', 
            message: 'Enter you github username and link to profile:',
        },
        {
            type: 'input',
            name: 'contactInfo',
            message: 'Enter project contact information',
        },

     
    ];
    

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      writeToFile("README.md", generateMarkdown.generateMarkdown(answers));
    });
}

init();

