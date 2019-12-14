import skillsData from '../../helpers/data/skillsData';
import utl from '../../helpers/utilities';
import './tech.scss';

const printTech = () => {
  let domString = `<h2>TECHNOLOGY & SKILLS</h2>
  <div class="d-flex justify-content-center align-items-baseline">`;
  skillsData.getSkills()
    .then((skills) => {
      skills.forEach((s) => {
        domString += `<div class="meter class="align-items-basline">
        <span style="height:${s.proficiency}%;"></span>
        <p><i class="${s.icon} fa-2x"></i></p>
        </div>`;
      });
      domString += '</div>';
      utl.printToDom('tech', domString);
    })
    .catch((error) => console.error(error));
};

export default { printTech };
