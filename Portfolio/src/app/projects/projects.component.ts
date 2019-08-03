import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project/project.service';
import { ProjectCategory } from '../services/project/ProjectCategory';
import { Project } from '../services/project/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  categories: Array<ProjectCategory>;
  websiteProjects: Array<Project> = [
    new Project(null, 'Mars Rovers', null, './assets/imgs/MarsRovers/card.png', ['Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    'A website to explore the images the rovers exploring mars have taken')
  ];

  constructor(private projectService: ProjectService) {
    this.categories = projectService.getCategories();
  }

  ngOnInit() { }

  getProjects(category) {
    return this.projectService.getProjectsByCategory(category);
  }
}
