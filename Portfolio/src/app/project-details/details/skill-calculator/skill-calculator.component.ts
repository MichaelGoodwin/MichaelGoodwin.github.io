import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-skill-calculator',
  templateUrl: './skill-calculator.component.html',
  styleUrls: ['../details.css', './skill-calculator.component.css']
})
export class SkillCalculatorComponent implements OnInit, OnDestroy {
  public images: Array<string[]> = [
    ['/assets/imgs/SkillCalculator/default-ui.gif', 'Default UI look'],
    ['/assets/imgs/SkillCalculator/updated-ui.gif', 'Updated UI look'],
    ['/assets/imgs/SkillCalculator/herblore-fallthrough.gif', 'Activity toggle with linked items updating'],
    ['/assets/imgs/SkillCalculator/agility.gif', 'Planner functionality with level limiting'],
    ['/assets/imgs/SkillCalculator/construction.png', 'Banked Experience'],
  ];
  private album: Array<IAlbum> = [];

  constructor(
    private lightbox: Lightbox,
    private lightboxConfig: LightboxConfig) {
    for (const image of this.images) {
      const img = image[0];
      const caption = image.length > 1 ? image[1] : '';
      this.album.push({src: img, thumb: img, caption});
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
    this.lightbox.open(this.album, index);
  }

  close(): void {
    this.lightbox.close();
  }
}
