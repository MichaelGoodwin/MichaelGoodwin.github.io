import { Injectable } from '@angular/core';
import { Project } from './Project';
import PROJECTS from './Projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProjectById(id: string): Project {
    return PROJECTS.find(p => p.id === id);
  }
}
