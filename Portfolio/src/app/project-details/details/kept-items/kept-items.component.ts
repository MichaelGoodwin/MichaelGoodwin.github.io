import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAlbum, Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-kept-items',
  templateUrl: './kept-items.component.html',
  styleUrls: ['../details.css', './kept-items.component.css']
})
export class KeptItemsComponent implements OnInit, OnDestroy {
  public images: Array<string[]> = [
    ['/assets/imgs/KeptItems/default.png', 'Default UI with no factors affecting the player'],
    ['/assets/imgs/KeptItems/normal.gif', 'Updated UI with interactive buttons'],
    ['/assets/imgs/KeptItems/uim.gif', 'Some factors don\'t matter for specific account types.']
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
