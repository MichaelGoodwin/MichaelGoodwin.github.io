import { Component, OnInit } from '@angular/core';
import { Project } from './Project';
import PROJECTS from './Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor() { }

  ngOnInit() { }
}
