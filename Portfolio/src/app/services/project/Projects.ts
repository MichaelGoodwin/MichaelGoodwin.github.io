// tslint:disable:max-line-length
import { Project } from './Project';
import { MelloTrainerComponent } from 'src/app/project-details/details/mello-trainer/mello-trainer.component';
import { RPDeathComponent } from 'src/app/project-details/details/rpdeath/rpdeath.component';
import { SkillCalculatorComponent } from 'src/app/project-details/details/skill-calculator/skill-calculator.component';

const imageFolder = '/assets/imgs/';

export default [
  new Project(MelloTrainerComponent, 'Mello Trainer', imageFolder + 'MelloTrainer/card.png', ['lua', 'html', 'css'],
    'A FiveM tool used to spawn vehicles/weapons, control the time & weather, and more customization'),
  new Project(RPDeathComponent, 'RPDeath',  imageFolder + 'RPDeath/card.png', ['lua'],
    'A FiveM script that prevents automatic respawning for role-playing purposes'),
  new Project(SkillCalculatorComponent, 'SkillCalculator', imageFolder + 'SkillCalculator/card.png', ['java'],
    'Expands upon the existing RuneLite "SkillCalculator" plugin by adding Planner and Banked Experience functionality'),
];
