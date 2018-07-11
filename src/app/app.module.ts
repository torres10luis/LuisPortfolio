import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

const pages: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pages)
    // , BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
