const { execSync } = require('child_process');
const moment = require('moment');


let startDate = moment("2024-10-14"); 
let numDays = 5;

for (let i = 0; i < numDays; i++) {
    let currentDate = startDate.clone().add(i, 'days').format('YYYY-MM-DDTHH:mm:ssZ');
    console.log(`Making commit for date: ${currentDate}`);

    execSync(`git commit --date="${currentDate}" -m "Automated commit for ${currentDate}"`);
    execSync('git push');

    console.log(`Commit for ${currentDate} successfully pushed.`);
}
