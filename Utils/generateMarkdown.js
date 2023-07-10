// function to generate markdown for README
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let licenceType = license.data.license[0]; 
  let yourLicence = ''
  if(licenseType === 'MIT') {
    yourLicence = '[!License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (licenceType === 'Educational Community LIcense v 2.0'){
    yourLicence = '[License: Educationl Community](https://img.shield.io/badge/(needtocompletethis)'
  } else if (licenceType === 'Do What the F*uck You Want to Public License') {
    yourLicence = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (licenceType === 'Artistic License 1.0') {
    yourLicence = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]'
  } else if (licenseType === 'Creative Commons Attribution Share Alike 4.0') {
    yourLicence = '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)]'
  } else if (licenseType === 'The Unlicence') {
    yourLicence = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else {
    license.license = "N/A"
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
`;
}
module.exports = generateMarkdown;