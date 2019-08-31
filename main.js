console.log('This is my portfolio. There are many others like it, but this one is mine');

const projects = [
    {
        title: 'Cool Project', 
        screenshot: 'http://gotoflashgames.com/files/file/033.jpg', 
        description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
        available: true,
        url: 'https://github.com/evangdesigns/petAdoption', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: 'https://github.com/evangdesigns/petAdoption',
    },
    {
        title: 'PB&J', 
        screenshot: 'http://gotoflashgames.com/files/file/033.jpg', 
        description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
        available: false,
        url: 'https://github.com/evangdesigns/productCards', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: 'https://github.com/evangdesigns/productCards',
    }  
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };
  
  const projectFilter = (projectsArr) => {
    let domString = ''
    for (let i = 0; i < projectsArr.length; i ++) {
        const pro = projectsArr[i]
        domString += `
            <div class='projectCard'>
                <div class="projectTitle">
                        <h1>${pro.title}</h1>
                </div>
                <div class="projectInfo">
                    <center>
                        <img src="${pro.screenshot}" alt="${pro.title} the ${pro.description}">
                    </center>
                    <div class="projectDeets">
                        <h4>DESCRIPTION:</h4>
                        <p>${pro.description}</p>
                        <h4>TECHNOLOGIES:</h4>
                        <p>${pro.technologiesUsed}</p>
                    </div>
                </div>
                <button href="${pro.url}">CHECK IT OUT</button>
            </div>
            `   
    };
    printToDom('projectsPage', domString);
  };

const selectedProjects = [];
    for(let i = 0; i < projects.length; i ++) {
        const pro = projects[i];
        if (pro.available === true ) {
            selectedProjects.push(pro)
        }
    }
// pass smaller list of pies back into placePies
projectFilter(selectedProjects);