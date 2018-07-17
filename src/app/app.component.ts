import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GalleryComponent]

})
export class AppComponent {
  title = 'app';
  loadedFeature: string;
  @Output() featureSelected = new EventEmitter<string>();

  constructor() {

  }

   prompts(event) {
    const userInput = alert('My email is example@email.com');
      console.log(userInput);
   }

   navigate(feature: string) {
    console.log('set new feature:', feature);
    this.loadedFeature = feature;
  }

  selectFeature(feature: string) {
    this.featureSelected.emit(feature);
  }


}



