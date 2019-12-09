import './projects.scss';
import utl from '../../helpers/utilities';

// const projectFilter = (projectsArr) => {
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

// const selectedProjects = [];
// for (let i = 0; i < projects.length; i + 1) {
//   const pro = projects[i];
//   if (pro.available === true) {
//     selectedProjects.push(pro);
//   }
// }

// projectFilter(selectedProjects);

const printProjects = () => {
  let domString = '';
  domString = '<h2 class="text-center">Projects</h2>';
  utl.printToDom('projects', domString);
};

export default { printProjects };
