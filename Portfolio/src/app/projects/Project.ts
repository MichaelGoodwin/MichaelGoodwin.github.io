export class Project {
  title: string;
  id: string;
  image: string;
  languages: string[];
  description: string;

  constructor(title: string, image: string, languages: string[], description: string) {
    this.title = title;
    this.id = title.toLowerCase().replace(' ', '-');
    this.image = image;
    this.languages = languages;
    this.description = description;
  }
}
