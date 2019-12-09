import utl from '../../helpers/utilities';
import './tech.scss';

const printTech = () => {
  let domString = '';
  domString += `
  <h2>Technology & Skills</h2>
  <div id="skillsChart"></div>
  <div class="meter">
  <span class="web" style="height: 100px"></span>
  <p><i class="fab fa-html5"></i></p>
  </div>
    <p>Adobe CC/Photoshop/Illustrator/InDesign</p>
    <p>Microsoft Office/Word, Excel, Power Point</p>
    <p>Multimedia/Web/GUI Design</p>
    <p>Event Coordination, Planning & Execution</p>
    <p>Social Media Management</p>
    <p>Web Design HTML/CSS/Javascript</p>
    <p>PC/Mac Proficiency</p>
    <p>Photography & Photo Editing</p>
    <p>Proofreading/Editing Design</p>
    <p>Business Communication</p>
    <p>Marketing Analytics</p>
    <p>Copyrighting</p>
  `;
  utl.printToDom('tech', domString);
};

export default { printTech };
