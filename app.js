const fs = require('fs');
const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2);
const [naMe, github] = profileDataArgs;

/*
// notice the lack of parenthesis around the `profileDataArr` parameter?
const printProfileData = profileDataArr => { 
    //this. . .
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    //Is the same as this. . .
    profileDataArr.forEach((profileItem) => console.log(profileItem)); //takes two arguments
};

printProfileData(profileDataArgs);
*/

fs.writeFile('index.html', generatePage(naMe, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to to see the output!');
});

