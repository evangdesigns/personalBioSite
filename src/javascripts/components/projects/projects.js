import projectData from '../../helpers/data/projectData';
import utl from '../../helpers/utilities';
import './projects.scss';

const printProjects = () => {
  let domString = `<h2 class="text-center>PROJECTS</h2>
  <div class="d-flex flex-wrap justify-content-center">`;
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((p) => {
        domString += `<div class='projectCard'>
        <div class='projectTitle'>
          <h4>${p.title}</h4>
        </div>
        <div class='projectInfo'>
          <center>
            <img src='${p.screenshot}' alt='${p.title}'>
          </center>
          <div class='projectDeets'>
            <p>${p.description}</p>
            <h6>TECHNOLOGIES:</h6>
            <p>${p.technologiesUsed}</p>
          </div>
        </div>
        <button class="btn btn-secondary btn-block" href='${p.url}'>CHECK IT OUT</button>
      </div>
      `;
      });
      domString += '</div>';
      utl.printToDom('projects', domString);
    })
    .catch((error) => console.error(error));
};

export default { printProjects };
