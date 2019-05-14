import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../environments/environment';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContentfulService {
  // private imageURL: string;
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  });

  constructor() {}

  getImages(query?: object): Promise<Entry<any>[]> {
    return this.client.getAssets().then(assets => {
      console.log(assets.items);
      return assets.items;
    });
  }

  // getAssets(query?: object): Promise<Entry<any>[] {
  // 	return client.getAssets().then(assets => {
  // 		assets.items.map(asset => const imageURL = asset.fields.file.url)
  // 	})
  // }

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
