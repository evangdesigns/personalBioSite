import './projects.scss';
import utl from '../../helpers/utilities';

const printProjects = () => {
  console.log('this is where my projects go');
  utl.printToDom('projects', console);
};

export default { printProjects };
