import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });

  constructor() {}

  getImages(query?: object): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'heroBannerImage'
          },
          query
        )
      )
      .then(res => {
        console.log(res.items[0]);
        // console.log(res.items[0].fields.heroImage.fields.file.url);
        return res.items[0];
      });
  }

  // getCourse(courseId): Promise<Entry<any>> {
  //   return this.client
  //     .getEntries(
  //       Object.assign(
  //         {
  //           content_type: 'heroBannerImage'
  //         },
  //         { 'sys.id': courseId }
  //       )
  //     )
  //     .then(res => res.items[0]);
  // }
}
