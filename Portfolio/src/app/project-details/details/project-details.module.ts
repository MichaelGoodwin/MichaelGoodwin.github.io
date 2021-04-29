import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BankedExperienceComponent } from './banked-experience/banked-experience.component';
import { LootLoggerComponent } from './loot-logger/loot-logger.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BankedExperienceComponent,
    LootLoggerComponent
  ],
  entryComponents: [
    BankedExperienceComponent,
    LootLoggerComponent
  ]
})
export class ProjectDetailsModule { }
