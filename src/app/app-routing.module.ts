import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoutiqueHComponent } from './boutique-h/boutique-h.component';
import { InstituteHComponent } from './institute-h/institute-h.component';
import { CollectionComponent } from './collection/collection.component';
import { GarmentComponent } from './garment/garment.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursepageComponent } from './coursepage/coursepage.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path:"boutique",component: BoutiqueHComponent
  },
  {
    path:"institute",component: InstituteHComponent
  },
  {
    path:"boutique/collection",component: CollectionComponent
  },
  {
    path:"boutique/garment",component: GarmentComponent
  },
  {
    path:"contect-us",component: ContectUsComponent
  },
  {
    path:"institute/courses",component: CoursesComponent
  },
  {
    path:"coursepage",component: CoursepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
