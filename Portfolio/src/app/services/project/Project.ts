import { Type } from '@angular/core';
import { ProjectCategory } from './ProjectCategory';

export class Project {
  component: Type<any>;
  title: string;
  category: ProjectCategory;
  id: string;
  image: string;
  languages: string[];
  templateUrl: string;
  description: string;
  url: string;

  constructor(component: Type<any>, title: string, category: ProjectCategory,
              image: string, languages: string[], description: string, url: string) {
    this.component = component;
    this.title = title;
    this.id = title.toLowerCase().replace(' ', '-');
    this.category = category;
    this.image = image;
    this.languages = languages;
    this.description = description;
    this.url = url;
  }
}
