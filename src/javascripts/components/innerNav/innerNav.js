import './innerNav.scss';

const innerNav = () => {
  const nav = `
  <nav class="navbar navbar-light navbar-expand justify-content-center">
    <div id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">TECHNOLOGIES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PROJECTS</a>
        </li>
      </ul>
    </div>
  </nav>`;
  return nav;
};

export default { innerNav };
