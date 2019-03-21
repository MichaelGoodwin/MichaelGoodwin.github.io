import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectContainerDirective } from './directives/project-container.directive';
import { ProjectDetailsModule } from './project-details/details/project-details.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    ProjectContainerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
