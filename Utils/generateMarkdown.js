// function to generate markdown for README
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  console.log(license); 
  let yourLicense = ''
  if(license === 'MIT') {
    yourLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Do What the F*uck You Want to Public License') {
    yourLicense = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (license === 'Artistic License 2.0') {
    yourLicense = '![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]'
  } else if (license === 'Creative Commons Attribution Share Alike 4.0') {
    yourLicense = '![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)]'
  } else if (license === 'The Unlicence') {
    yourLicense = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } 
  
  return yourLicense; 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Licence
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [Licence](#licence)
  6. [Contributions](#contributions)
  7. [Tests](#tests)
  8. [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  Any questions should be directed to: ${data.ghusername}
  // Your questions: ${data.questions}

`;
}
module.exports = generateMarkdown;