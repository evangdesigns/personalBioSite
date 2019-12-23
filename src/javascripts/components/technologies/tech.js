import skillsData from '../../helpers/data/skillsData';
import utl from '../../helpers/utilities';
import './tech.scss';

const printTech = () => {
  let domString = '';
  domString += `<h2>TECHNOLOGIES</h2>
  <div class="d-flex justify-content-center graph">`;
  skillsData.getSkills()
    .then((skills) => {
      skills.forEach((s) => {
        domString += `
        <div class="outer-div">
        <div class="meter">
        <span style="height:${s.proficiency}%;"></span>
        </div>
        <p><i class="${s.icon} fa-2x"></i></p>
        </div>`;
      });
      domString += '</div>';
      utl.printToDom('tech', domString);
    })
    .catch((error) => console.error(error));
};

export default { printTech };
