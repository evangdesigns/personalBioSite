import $ from 'jquery';
import 'bootstrap';
import bio from './components/bio/bio';
import tech from './components/technologies/tech';
import projects from './components/projects/projects';
import '../styles/main.scss';

const init = () => {
  bio.printBio();
  tech.printTech();
  projects.printProjects();
};

init();

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

const collapseAll = () => {
  bioPage.slideUp();
  techPage.slideUp();
  projPage.slideUp();
};

const navControl = (e) => {
  const clicker = e.target.id;
  if (clicker === 'navToBio') {
    showBio();
  } else if (clicker === 'navToTechnologies') {
    showTech();
  } else if (clicker === 'navToProjects') {
    showProj();
  } else if (clicker === 'myName') {
    collapseAll();
  }
};

$('.navToBio').click(navControl);
$('.navToTechnologies').click(navControl);
$('.navToProjects').click(navControl);
$('#myName').click(navControl);
