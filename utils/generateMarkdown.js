// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }

  const badges = {
    'MIT': '![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'BSD 3-Clause': '![BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
    'None': ''
  };
  
  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }

  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'None': ''
  };

return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
}

const link = renderLicenseLink(license);

return `## License

This project is licensed under the [${license}](${link}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  const badge = renderLicenseBadge(response.license);
  const license = renderLicenseSection(response.license);

  return `# ${response.title}
  
  ${badge}
  
  ## Description
  
  ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${response.installation}
  
  ## Usage
  
  ${response.usage}
  
  ${license}
  
  ## Contributing
  
  ${response.contribution}
  
  ## Tests
  
  ${response.test}
  
  ## Questions
  
  If you have any questions, please reach out to me at ${response.email} or visit my [GitHub](https://github.com/${response.github}) for more information.`;
}

export default generateMarkdown;
