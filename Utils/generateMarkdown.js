// function to generate markdown for README
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  console.log(license);
  let yourLicense = ''
  if (license === 'MIT') {
    yourLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Do What the F*uck You Want to Public License') {
    yourLicense = '![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)'
  } else if (license === 'Artistic License 2.0') {
    yourLicense = '![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)'
  } else if (license === 'Creative Commons Attribution Share Alike 4.0') {
    yourLicense = '![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)'
  } else if (license === 'The Unlicense') {
    yourLicense = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
  }

  return yourLicense;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// https://choosealicense.com/appendix/

function renderLicenseLink(license) {
  let yourLicenseLink = ''
  if (license === 'MIT') {
    yourLicenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Do What the F*uck You Want to Public License') {
    yourLicenseLink = 'https://choosealicense.com/licenses/wtfpl/'
  } else if (license === 'Artistic License 2.0') {
    yourLicenseLink = 'https://choosealicense.com/licenses/artistic-2.0/'
  } else if (license === 'Creative Commons Attribution Share Alike 4.0') {
    yourLicenseLink = 'https://choosealicense.com/licenses/cc-by-sa-4.0/'
  } else if (license === 'The Unlicense') {
    yourLicenseLink = 'https://choosealicense.com/licenses/unlicense/'
  }

  return yourLicenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  let yourLicenseDescription = ''
  if (license === 'MIT') {
    yourLicenseDescription = 'MIT License'
  } else if (license === 'Do What the F*uck You Want to Public License') {
    yourLicenseDescription = 'Do What the F*uck You Want to Public License'
  } else if (license === 'Artistic License 2.0') {
    yourLicenseDescription = 'Artistic License 2.0'
  } else if (license === 'Creative Commons Attribution Share Alike 4.0') {
    yourLicenseDescription = 'Creative Commons Attribution Share Alike 4.0'
  } else if (license === 'The Unlicense') {
    yourLicenseDescription = 'Unlicense'
  }

  return yourLicenseDescription;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## License
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Credits](#credits)
  5. [License Details](#license-details)
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
  
  ## License Details
  - You choose:  ${renderLicenseSection(data.license)}
  - License details can be found at ${renderLicenseLink(data.license)}
  - For additional details on your license, please visit https://choosealicense.com/appendix/

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  * Any questions should be directed to: ${data.ghusername}
  * Your questions: ${data.questions}

`;
}
module.exports = generateMarkdown;