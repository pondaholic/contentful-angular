import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';

import { RouterModule, Routes } from '@angular/router';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { ContentfulService } from './contentful.service';

const routes: Routes = [
  { path: '', redirectTo: '/images', pathMatch: 'full' },
  { path: 'images', component: ImagesComponent },
  { path: 'images/:id', component: ImageDetailsComponent }
];

@NgModule({
  declarations: [AppComponent, ImagesComponent, ImageDetailsComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), AppRoutingModule],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule {}
