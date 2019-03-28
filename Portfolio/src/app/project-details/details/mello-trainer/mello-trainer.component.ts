import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lightbox, IAlbum, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-mello-trainer',
  templateUrl: './mello-trainer.component.html',
  styleUrls: ['../details.css', './mello-trainer.component.css']
})
export class MelloTrainerComponent implements OnInit, OnDestroy {
  public images: string[] = [
    '/assets/imgs/MelloTrainer/card.png',
    '/assets/imgs/MelloTrainer/vehicle-options.png',
    '/assets/imgs/MelloTrainer/weapons.png',
    '/assets/imgs/MelloTrainer/generic.png',
    '/assets/imgs/MelloTrainer/version-check.png'
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
