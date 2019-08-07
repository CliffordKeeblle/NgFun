import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `    
    <nav-bar><img src="assets/images/dev.png" alt="logo" height ="100em" /></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = 'app';
}
