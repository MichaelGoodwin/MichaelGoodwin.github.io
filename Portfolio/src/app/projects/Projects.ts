// tslint:disable:max-line-length
import { Project } from './Project';

const imageFolder = '/assets/imgs/';

export default [
  new Project('Mello Trainer', imageFolder + 'MelloTrainer/card.png', ['lua', 'html', 'css'],
    'A FiveM (GTA 5) tool used to spawn vehicles/weapons, control the time & weather, and more customization'),
  new Project('RPDeath',  imageFolder + 'RPDeath/card.png', ['lua'],
    'A FiveM script that prevents automatic respawning for role-playing purposes'),
];
