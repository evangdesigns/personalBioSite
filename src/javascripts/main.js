import $ from 'jquery';
import 'bootstrap';
import bio from './components/bio/bio';
import tech from './components/technologies/tech';
import '../styles/main.scss';

const init = () => {
  bio.printBio();
  tech.printTech();
};

init();

// const projectFilter = (projectsArr) => {
//   let domString = '';
//   domString = '<h1 class="text-center">Projects</h1>';
//   for (let i = 0; i < projectsArr.length; i + 1) {
//     const pro = projectsArr[i];
//     domString += `
//       <div class='projectCard'>
//         <div class='projectTitle'>
//           <h1>${pro.title}</h1>
//         </div>
//         <div class='projectInfo'>
//           <center>
//             <img src='${pro.screenshot}' alt='${pro.title} the ${pro.description}'>
//           </center>
//           <div class='projectDeets'>
//             <h4>DESCRIPTION:</h4>
//             <p>${pro.description}</p>
//             <h4>TECHNOLOGIES:</h4>
//             <p>${pro.technologiesUsed}</p>
//           </div>
//         </div>
//         <button href='${pro.url}'>CHECK IT OUT</button>
//       </div>
//       `;
//   }
//   printToDom('projectsPage', domString);
// };

// const selectedProjects = [];
// for (let i = 0; i < projects.length; i + 1) {
//   const pro = projects[i];
//   if (pro.available === true) {
//     selectedProjects.push(pro);
//   }
// }

// projectFilter(selectedProjects);


const bioPage = $('#bio');
const techPage = $('#tech');
const projPage = $('#projects');

const showBio = () => {
  bioPage.delay(500).slideToggle();
  techPage.slideUp();
  projPage.slideUp();
};

const showTech = () => {
  bioPage.slideUp();
  techPage.delay(500).slideToggle();
  projPage.slideUp();
};

const showProj = () => {
  bioPage.slideUp();
  techPage.slideUp();
  projPage.delay(500).slideToggle();
};

const navControl = (e) => {
  const clicker = e.target.id;
  if (clicker === 'navToBio') {
    showBio();
  } else if (clicker === 'navToTechnologies') {
    showTech();
  } else if (clicker === 'navToProjects') {
    showProj();
  }
};

$('#navToBio').on('click', navControl);
$('#navToTechnologies').on('click', navControl);
$('$navToProjects').o('click', navControl);
