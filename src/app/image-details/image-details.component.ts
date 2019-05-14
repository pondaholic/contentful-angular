import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { ImagesComponent } from '../images/images.component';

@Component({
  providers: [ImagesComponent],
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image: Entry<any>;

  constructor(
    private getImages: ImagesComponent,
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    // this.getImages.getImages();
    // console.log(this.getImages.getImages);
  }

  // gotToList() {
  //   this.router.navigate(['/images']);
  // }
}
