import utl from '../../helpers/utilities';
import './bio.scss';

const printBio = () => {
  const domString = `
  <div class="d-flex justify-content-center align-middle bioInfo">
    <div>
      <img src="https://github.com/evangdesigns/personalBioSite/blob/master/src/images/headshot.jpg?raw=true" alt="Evan Grabenstein headshot" />
    </div>
    <div>
    <p class="align-middle">It was a cool, but sunny day in June. All the weather reports called for clear skies, and contrary to popular belief, I'm not one to waste gorgeous weather inside binge watching Glee. So I strapped on my boots and helmet, hopped on my motorcycle, and went to find the elusive third Dragon Ball the state of Tennessee so openly boasts on it's flag.</p>

    <p>About an hour into my euphoria, I noticed dark clouds gathering in the distance. I thought, "Wow?! I've been riding this whole time in 4th gear?! I should change up." Then I thought, "This can't be?! The meteorologist said we would have perfect weather today. And they are NEVER wrong." I continued on my current heading—more in hope than expectation—that I would come out of this dry and unscathed. Within a matter of minutes however, I found myself in a torrential rain rivaled only to the monsoon season of the South Pacific.</p>

    <p>When I finally arrived back within the safety of my garage—my poor bike Virginia and I, soaked to our carburetors—I remember feeling... not mad, but disappointed. It was 2019 and telling the weather was still more like guessing than prediction. Shortly after beginning my wallowing in disappointment, I felt my phone buzzing in my pocket. I look to find a push notification that Jerry liked my picture, and another from my weather app telling me "It's currently raining."</p>

    <p>And so began my quest, to teach myself necessary tools to make the most rockin fondu and to develop an app that warns you of impending doom in the form of inclimate weather in real-time.</p>
    </div>
    </div>`;
  utl.printToDom('bio', domString);
};

export default { printBio };
