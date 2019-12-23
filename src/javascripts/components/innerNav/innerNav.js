import './innerNav.scss';
import 'bootstrap';

const innerNav = () => {
  let domString = '';
  domString += `<div class="innerNav">
  <nav class="navbar navbar-dark navbar-expand justify-content-center">
    <div id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <button class=" btn btn-link nav-link navToBio" href="#">ABOUT</button>
        </li>
        <li class="nav-item">
        <button class=" btn btn-link nav-link navToTechnologies" href="#">TECHNOLOGIES</button>
        </li>
        <li class="nav-item">
        <button class=" btn btn-link nav-link navToProjects" href="#">PROJECTS</button>
        </li>
      </ul>
    </div>
  </nav>
  </div>`;
  return domString;
};

export default { innerNav };
