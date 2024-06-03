import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BoutiqueHComponent } from './boutique-h/boutique-h.component';
import { InstituteHComponent } from './institute-h/institute-h.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { CoursesComponent } from './courses/courses.component';
import { GarmentComponent } from './garment/garment.component';
import { CollectionComponent } from './collection/collection.component';
import { AdminHComponent } from './admin-h/admin-h.component';
import { CoursepageComponent } from './coursepage/coursepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoutiqueHComponent,
    InstituteHComponent,
    ContectUsComponent,
    CoursesComponent,
    GarmentComponent,
    CollectionComponent,
    AdminHComponent,
    CoursepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
