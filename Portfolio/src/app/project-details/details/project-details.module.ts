import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MelloTrainerComponent } from './mello-trainer/mello-trainer.component';
import { RPDeathComponent } from './rpdeath/rpdeath.component';
import { SkillCalculatorComponent } from './skill-calculator/skill-calculator.component';
import { LootTrackerComponent } from './loot-tracker/loot-tracker.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MelloTrainerComponent,
    RPDeathComponent,
    SkillCalculatorComponent,
    LootTrackerComponent
  ],
  entryComponents: [
    MelloTrainerComponent,
    RPDeathComponent,
    SkillCalculatorComponent,
    LootTrackerComponent
  ]
})
export class ProjectDetailsModule { }
