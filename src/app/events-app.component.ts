import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    Hello Cliff
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'app';
}
