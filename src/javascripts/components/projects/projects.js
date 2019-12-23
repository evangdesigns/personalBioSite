// import nav from '../innerNav/innerNav';
import projectData from '../../helpers/data/projectData';
import utl from '../../helpers/utilities';
import './projects.scss';

const printProjects = () => {
  let domString = '';
  // domString += nav.innerNav();
  domString += `<h2 class="text-center">PROJECTS</h2>
  <div class="justify-content-center">`;
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((p) => {
        const techIco = p.technologiesUsed;
        domString += `
        <div class="container projectCard">
          <h4 class="text-center">${p.title}</h4>
          <center>
            <img src='${p.screenshot}' alt="${p.title}">
          </center>
          <p class="text-center">${p.description}</p>
          <div class="d-flex justify-content-center">
            <div>
              <h5 class="text-center">TECHNOLOGIES</h5>
              <p class="text-center">`;
        techIco.forEach((i) => {
          domString += `
              <i class="${i} fa-2x"></i>`;
        });
        domString += `</p>
            </div>
            <div class="col-1"></div>
            <div>
              <h5 class="text-center">CHECK IT OUT</h5>
              <p class="text-center">`;
        if (p.githubUrl === 'null') {
          domString += '';
        } else {
          domString += `<a href="${p.githubUrl}" target="_blank"><i class="fab fa-github-square fa-2x"></i></a>`;
        }
        domString += ` <a href="${p.url} target="_blank"><i class="fas fa-globe fa-2x"></i></a>
              </p>
            </div>
          </div>
        </div><hr>
      `;
      });
      domString += '</div>';
      utl.printToDom('projects', domString);
    })
    .catch((error) => console.error(error));
};

export default { printProjects };
