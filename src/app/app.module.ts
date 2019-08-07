import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent} from "./nav/nav-bar.component"
import { Error404Component } from './errors/404.component'

@NgModule({
  declarations: [
    EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent
    ,Error404Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
