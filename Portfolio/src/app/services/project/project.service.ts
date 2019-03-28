import { Injectable } from '@angular/core';
import { Project } from './Project';
import PROJECTS from './Projects';
import { ProjectCategory } from './ProjectCategory';

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

  getProjectsByCategory(category: ProjectCategory): Project[] {
    return PROJECTS.filter(p => p.category === category);
  }

  getCategories() {
    const c = new Set<ProjectCategory>();
    for (const p of PROJECTS) {
      c.add(p.category);
    }

    return Array.from(c.values());
  }
}
