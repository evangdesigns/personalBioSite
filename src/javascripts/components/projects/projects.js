import projectData from '../../helpers/data/projectData';
import utl from '../../helpers/utilities';
import './projects.scss';

const printProjects = () => {
  let domString = `<h2 class="text-center">PROJECTS</h2>
  <div class="justify-content-center">`;
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((p) => {
        const techIco = p.technologiesUsed;
        domString += `<hr><div class="container projectCard">
        <h4>${p.title}</h4>
        <center>
          <img src='${p.screenshot}' alt="${p.title}">
        </center>
        <p>${p.description}</p>
        <h6>TECHNOLOGIES:</h6>
        <p>`;
        techIco.forEach((i) => {
          domString += `
          <i class="${i} fa-2x"></i>`;
        });
        domString += `</p>
        <div class="text-center">
          <a href="${p.githubUrl}" target="_blank"><i class="fab fa-github-square fa-3x"></i></a>
          <a href="${p.url} target="_blank"><i class="fas fa-globe fa-3x"></i></a>
        </div>
      </div>
      `;
      });
      domString += '</div>';
      utl.printToDom('projects', domString);
    })
    .catch((error) => console.error(error));
};

export default { printProjects };
