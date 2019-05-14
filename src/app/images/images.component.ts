import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry, Asset } from 'contentful';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public images: images[] = [];

  constructor(
    // private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    this.contentfulService.getImages().then(assets => {
      return assets.map(asset => {
        this.images.push({
          tablet: 'http:' + asset.fields.file.url,
          mobile: 'http:' + asset.fields.file.url,
          desktop: 'http:' + asset.fields.file.url,
          path: '',
          link: '',
          alt: 'Reel - Save to Buy what you Love',
          title: 'Reel Hero 1'
        });
        console.log(this.images);
        console.log('banner1 equivalent', this.images[0]);
        return this.images;
      });
    });

    // getImages() {
    //   this.contentfulService.getImages().then(images => {
    //     this.images = images;
    //     console.log(images);
    //     return images;
    //   });
    // }
  }
}
