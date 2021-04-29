import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-loot-logger',
  templateUrl: './loot-logger.component.html',
  styleUrls: ['../details.css', './loot-logger.component.css']
})
export class LootLoggerComponent implements OnInit, OnDestroy {
  public images: Array<string[]> = [
    ['/assets/imgs/LootLogger/config.png', 'Config options that affect the UI layout. Can sort items by Name, ID, price, or stack value.'],
    ['/assets/imgs/LootLogger/ui.gif', 'Example of how the UI looks with the default settings and some loot'],
    ['/assets/imgs/LootLogger/barrows.png', 'Example UI with Item breakdown and hide uniques enabled'],
    ['/assets/imgs/LootLogger/replay.gif', 'Replay loot functionality']
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
