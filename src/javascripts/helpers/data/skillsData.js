import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSkills = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/skills.json`)
    .then((response) => {
      const demSkills = response.data;
      const skills = [];
      Object.keys(demSkills).forEach((fbId) => {
        demSkills[fbId].id = fbId;
        skills.push(demSkills[fbId]);
      });
      resolve(skills);
    })
    .catch((error) => reject(error));
});

export default { getSkills };
