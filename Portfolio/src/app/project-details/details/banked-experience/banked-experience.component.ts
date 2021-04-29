import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-banked-experience',
  templateUrl: './banked-experience.component.html',
  styleUrls: ['../details.css', './banked-experience.component.css']
})
export class BankedExperienceComponent implements OnInit, OnDestroy {
  public images: Array<string[]> = [
    ['/assets/imgs/BankedExperience/config.png', 'Configuration Options'],
    ['/assets/imgs/BankedExperience/ui.gif', 'UI Design and functionality'],
    ['/assets/imgs/BankedExperience/herblore.png', 'Example of a calculated skill'],
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
    this.lightboxConfig.centerVertically = true;
    this.lightboxConfig.fitImageInViewPort = true;
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
