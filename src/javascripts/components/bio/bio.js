import utl from '../../helpers/utilities';
import './bio.scss';

const printBio = () => {
  const domString = `
  <div class="d-flex justify-content-center align-middle bioInfo">
    <div>
      <img src="https://github.com/evangdesigns/personalBioSite/blob/master/src/images/headshot.jpg?raw=true" alt="Evan Grabenstein headshot" />
    </div>
    <p class="align-middle">I am a highly driven, Graphic Artist and Marketeer with over 10 years of continuous achievement in marketing and graphic design. I am seeking ever-increasing challenges in creative fields, aiming to exploit my extensive expertise in the fields of software design and development.</p>
  </div>`;
  utl.printToDom('bio', domString);
};

export default { printBio };
