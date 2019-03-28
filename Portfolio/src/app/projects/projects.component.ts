import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project/project.service';
import { ProjectCategory } from '../services/project/ProjectCategory';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  categories: IterableIterator<ProjectCategory>;

  constructor(private projectService: ProjectService) {
    this.categories = projectService.getCategories();
  }

  ngOnInit() { }

  getProjects(category) {
    return this.projectService.getProjectsByCategory(category);
  }
}
