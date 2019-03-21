import { Component, Type } from '@angular/core';

export class Project {
  component: Type<any>;
  title: string;
  id: string;
  image: string;
  languages: string[];
  templateUrl: string;
  description: string;

  constructor(component: Type<any>, title: string, image: string, languages: string[], description: string) {
    this.component = component;
    this.title = title;
    this.id = title.toLowerCase().replace(' ', '-');
    this.image = image;
    this.languages = languages;
    this.description = description;
  }
}
