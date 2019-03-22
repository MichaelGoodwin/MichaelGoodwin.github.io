
import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ProjectService } from '../services/project/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../services/project/Project';
import { ProjectContainerDirective } from '../directives/project-container.directive';

@Component({
  selector: 'app-project-details',
  // Used to display current project component dynamically
  template: `<div class="container">
              <ng-container appProjectContainer></ng-container>
            </div>`
})
export class ProjectDetailsComponent implements OnInit {
  private project: Project;

  @ViewChild(ProjectContainerDirective) projectContainer;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = this.projectService.getProjectById(id);

    if (!this.project) {
      this.router.navigate(['/projects']);
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.project.component);

    const viewContainerRef = this.projectContainer.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
   }
}
