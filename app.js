const profileDataArgs = process.argv.slice(2, process.argv.length);
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


//this function returns a string. recall html is string with markup language
//notice absence of return. recall implicit return (only performing one action)

const generatePage = (userName, githubName) => {
    return `
        Name: ${userName}
        Github: ${githubName}
    `;
};

console.log(generatePage("Jane", "janehub"));
console.log(naMe, github);
console.log(generatePage(naMe, github));

