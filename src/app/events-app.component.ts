import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <h1><img src="assets/images/dev.png" alt="logo" height ="100em" />  Code Therapy</h1>
    <events-list></events-list>

  `
})
export class EventsAppComponent {
  title = 'app';
}
