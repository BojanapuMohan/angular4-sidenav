import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes,RouterModule} from '@angular/router';

import 'hammerjs';

import { FormsModule }    from '@angular/forms';

import {HttpModule} from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NewCmpComponentComponent } from './components/new-cmp-component/new-cmp-component.component';

import { SlideMenuModule } from './components/navbars';




const appRoutes: Routes = [
         {
            path: 'new-cmp',
            component: NewCmpComponentComponent
         },
      ];


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    SlideMenuModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
