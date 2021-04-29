import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MelloTrainerComponent } from './mello-trainer/mello-trainer.component';
import { RPDeathComponent } from './rpdeath/rpdeath.component';
import { BankedExperienceComponent } from './banked-experience/banked-experience.component';
import { LootTrackerComponent } from './loot-tracker/loot-tracker.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MelloTrainerComponent,
    RPDeathComponent,
    BankedExperienceComponent,
    LootTrackerComponent
  ],
  entryComponents: [
    MelloTrainerComponent,
    RPDeathComponent,
    BankedExperienceComponent,
    LootTrackerComponent
  ]
})
export class ProjectDetailsModule { }
