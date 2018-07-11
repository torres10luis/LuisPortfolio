import { GalleryComponent } from './gallery/gallery.component';
import { Component } from '@angular/core';

// import {trigger, state, animate, transition, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GalleryComponent],
  // animations: [
  //   trigger('myAwesomeAnimation', [
  //     state('small', style({
  //       transform: 'scale(1)',
  //   })),
  //   state('large', style({
  //       transform: 'scale(1.2)',
  //   })),
  //   transition('small => large', animate('100ms ease-in')),
  //   ]),

  // ]

})
export class AppComponent {
  title = 'app';

  constructor() {

  }

  prompts(event) {
    prompt('You have requested to contact me please enter your email');
     console.log(event);

  }

  // tslint:disable-next-line:no-inferrable-types
  // state: string = 'small';
  // event: Event;

  // animateMe() {
  //   this.state = (this.state === 'small' ? 'large' : 'small');
}



