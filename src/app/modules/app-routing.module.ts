import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkzoneComponent} from '../components/workzone/workzone.component';
import {HomepageComponent} from '../components/home/homepage/homepage.component';

const routes: Routes = [
  {path: 'chat', component: WorkzoneComponent},
  {path: 'home', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
