// tslint:disable:max-line-length
import { Project } from './Project';
import { MelloTrainerComponent } from 'src/app/project-details/details/mello-trainer/mello-trainer.component';
import { RPDeathComponent } from 'src/app/project-details/details/rpdeath/rpdeath.component';

const imageFolder = '/assets/imgs/';

export default [
  new Project(MelloTrainerComponent, 'Mello Trainer', imageFolder + 'MelloTrainer/card.png', ['lua', 'html', 'css'],
    'A FiveM (GTA 5) tool used to spawn vehicles/weapons, control the time & weather, and more customization'),
  new Project(RPDeathComponent, 'RPDeath',  imageFolder + 'RPDeath/card.png', ['lua'],
    'A FiveM script that prevents automatic respawning for role-playing purposes'),
];
