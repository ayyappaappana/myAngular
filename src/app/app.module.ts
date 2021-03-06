import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { PopupModule } from 'ng2-opd-popup';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleService } from './people.service';
import { PersonDetailsComponent } from './person-details/person-details.component';

//import {appRouterModule} from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { ListviewComponent } from './listview/listview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AnimationComponent } from './animation/animation.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,//new routing module
    PopupModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    TasksComponent,
    ListviewComponent,
    NavBarComponent,
    CarouselComponent,
    AnimationComponent,
    PopupComponent
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
