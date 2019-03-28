import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-skill-calculator',
  templateUrl: './skill-calculator.component.html',
  styleUrls: ['../details.css', './skill-calculator.component.css']
})
export class SkillCalculatorComponent implements OnInit, OnDestroy {
  public images: string[] = [
    '/assets/imgs/SkillCalculator/card.png',
    '/assets/imgs/SkillCalculator/agility.gif',
    '/assets/imgs/SkillCalculator/construction.png',
    '/assets/imgs/SkillCalculator/default.png',
    '/assets/imgs/SkillCalculator/updated-ui.gif',
    '/assets/imgs/SkillCalculator/herblore-fallthrough.gif'
  ];
  private album: Array<IAlbum> = [];

  constructor(
    private lightbox: Lightbox,
    private lightboxConfig: LightboxConfig) {
    for (const img of this.images) {
      this.album.push({src: img, thumb: img});
    }

    // set default config
    this.lightboxConfig.fadeDuration = 1;
   }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.lightbox.close();
  }

  open(index: number): void {
    console.log(this.images[index]);
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
