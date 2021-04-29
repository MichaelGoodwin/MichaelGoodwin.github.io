// tslint:disable:max-line-length
import { Project } from './Project';
import { ProjectCategory } from './ProjectCategory';
import { BankedExperienceComponent } from 'src/app/project-details/details/banked-experience/banked-experience.component';
import { LootLoggerComponent } from 'src/app/project-details/details/loot-logger/loot-logger.component';

const imageFolder = '/assets/imgs/';

export default [
  new Project(BankedExperienceComponent, 'Banked Experience', ProjectCategory.RuneLite, imageFolder + 'BankedExperience/card.png', ['java', 'swing', 'gradle'],
    'Calculates the experience a player has stored from the items inside their bank.'),
  new Project(LootLoggerComponent, 'Loot Tracker', ProjectCategory.RuneLite, imageFolder + 'LootLogger/card.png', ['java', 'swing', 'gradle'],
    'Logs loot received from monsters, players, and activities to the local device.'),
];
