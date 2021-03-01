function generateMarkdown(data) {
  return `# ${data.title}



Title of project
 ${data.projectTitle}

Description 
 ${data.description}

Installation Process 
 ${data.installation}

Projects intended use 
 ${data.usage}

Licenses Used 
 ${data.license}

Names of contributors
 ${data.contributors}

Tests 
 ${data.tests}

Any Questions
 ${data.questions}

Github username
 ${data.username}

Contact information
${data.contactInfo}

  `; 

}

export default generateMarkdown; 