// import nav from '../innerNav/innerNav';
import utl from '../../helpers/utilities';
import './bio.scss';

const printBio = () => {
  const domString = '<p class="text-center">I am a highly driven, Graphic Artist and Marketeer with over 10 years of continuous achievement in marketing and graphic design. I am seeking ever-increasing challenges in creative fields, aiming to exploit my extensive expertise in the fields of software design and development.</p>';
  utl.printToDom('bio', domString);
};

export default { printBio };
