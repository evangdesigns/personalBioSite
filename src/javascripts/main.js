import 'bootstrap';

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const projectFilter = (projectsArr) => {
  let domString = '';
  domString = '<h1 class="text-center">Projects</h1>';
  for (let i = 0; i < projectsArr.length; i + 1) {
    const pro = projectsArr[i];
    domString += `
      <div class='projectCard'>
        <div class='projectTitle'>
          <h1>${pro.title}</h1>
        </div>
        <div class='projectInfo'>
          <center>
            <img src='${pro.screenshot}' alt='${pro.title} the ${pro.description}'>
          </center>
          <div class='projectDeets'>
            <h4>DESCRIPTION:</h4>
            <p>${pro.description}</p>
            <h4>TECHNOLOGIES:</h4>
            <p>${pro.technologiesUsed}</p>
          </div>
        </div>
        <button href='${pro.url}'>CHECK IT OUT</button>
      </div>
      `;
  }
  printToDom('projectsPage', domString);
};

const selectedProjects = [];
for (let i = 0; i < projects.length; i + 1) {
  const pro = projects[i];
  if (pro.available === true) {
    selectedProjects.push(pro);
  }
}

projectFilter(selectedProjects);


const bioPage = document.getElementById('bioPage');
const techPage = document.getElementById('technologiesPage');
const projPage = document.getElementById('projectsPage');

const showBio = () => {
  bioPage.classList.remove('hide');
  techPage.classList.add('hide');
  projPage.classList.add('hide');
};

const showTech = () => {
  bioPage.classList.add('hide');
  techPage.classList.remove('hide');
  projPage.classList.add('hide');
};

const showProj = () => {
  bioPage.classList.add('hide');
  techPage.classList.add('hide');
  projPage.classList.remove('hide');
};

const navControl = (e) => {
  if (e.target.id === 'navToBio') {
    showBio();
  } else if (e.target.id === 'navToTechnologies') {
    showTech();
  } else if (e.target.id === 'navToProjects') {
    showProj();
  }
};

const eventListen = () => {
  const x = document.getElementsByClassName('jumbotron');
  for (let i = 0; i < x.length; i += 1) {
    const current = x[i];
    current.addEventListener('click', (e) => {
      navControl(e);
    });
  }
};

eventListen();
document.getElementById('navToBio').addEventListener('click', navControl);
document.getElementById('navToTechnologies').addEventListener('click', navControl);
document.getElementById('navToProjects').addEventListener('click', navControl);
