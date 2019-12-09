import './innerNav.scss';

const innerNav = () => {
  let nav = '';
  nav += `
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" id="navToBio">BIO</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navToTechnologies">TECHNOLOGIES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="navToProjects">PROJECTS</a>
        </li>
      </ul>`;
  return nav;
};

export default { innerNav };
