// import nav from '../innerNav/innerNav';
import $ from 'jquery';
import projectData from '../../helpers/data/projectData';
import utl from '../../helpers/utilities';
import './projects.scss';

const printProjects = () => {
  let domString = '';
  // domString += nav.innerNav();
  domString += `<h2 class="text-center">PROJECTS</h2>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">`;
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((p) => {
        const techIco = p.technologiesUsed;
        domString += `
        <div class="carousel-item">
        <img src="${p.screenshot}" alt="${p.title}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${p.title}</h5>
            <p>${p.description}</p>
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
        domString += ` <a href="${p.url}" target="_blank"><i class="fas fa-globe fa-2x"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>`;
      });
      domString += `</div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>`;
      utl.printToDom('projects', domString);
      $('.carousel-item').first().addClass(' active');
    })
    .catch((error) => console.error(error));
};

export default { printProjects };
