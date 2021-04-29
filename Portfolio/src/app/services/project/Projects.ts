// tslint:disable:max-line-length
import { Project } from './Project';
import { ProjectCategory } from './ProjectCategory';
import { MelloTrainerComponent } from 'src/app/project-details/details/mello-trainer/mello-trainer.component';
import { RPDeathComponent } from 'src/app/project-details/details/rpdeath/rpdeath.component';
import { BankedExperienceComponent } from 'src/app/project-details/details/banked-experience/banked-experience.component';
import { LootTrackerComponent } from 'src/app/project-details/details/loot-tracker/loot-tracker.component';

const imageFolder = '/assets/imgs/';

export default [
  new Project(BankedExperienceComponent, 'Banked Experience', ProjectCategory.RuneLite, imageFolder + 'BankedExperience/card.png', ['java', 'swing', 'gradle'],
    'Calculates the experience a player has stored from the items inside their bank.'),
  new Project(LootTrackerComponent, 'Loot Tracker', ProjectCategory.RuneLite, imageFolder + 'LootTracker/card.png', ['java', 'swing', 'gradle'],
    'Records loot received from monsters, players, and activities and displays it in a side panel'),

  new Project(MelloTrainerComponent, 'Mello Trainer', ProjectCategory.FiveM, imageFolder + 'MelloTrainer/card.png', ['lua', 'html', 'css'],
    'A FiveM tool used to spawn vehicle/weapons, control the time & weather, and much more customization'),
  new Project(RPDeathComponent, 'RPDeath', ProjectCategory.FiveM, imageFolder + 'RPDeath/card.png', ['lua'],
    'A FiveM script that prevents automatic respawning for role-playing purposes'),
];
