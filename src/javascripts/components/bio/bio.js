// import nav from '../innerNav/innerNav';
import utl from '../../helpers/utilities';
import './bio.scss';

const printBio = () => {
  const domString = `<div class="d-flex flex-wrap justify-content-center bioInfo">
  <img src="../../../images/headshot.jpg" alt="Evan Grabenstein headshot" />
  <p class="text-center">I am a highly driven, Graphic Artist and Marketeer with over 10 years of continuous achievement in marketing and graphic design. I am seeking ever-increasing challenges in creative fields, aiming to exploit my extensive expertise in the fields of software design and development.</p>
  </div>`;
  utl.printToDom('bio', domString);
};

export default { printBio };
