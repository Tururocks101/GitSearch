import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilecomponentComponent } from './profilecomponent/profilecomponent.component';
import { NotFoundComponent } from './Error/not-found/not-found.component'

const routes: Routes = [
  {path: "", pathMatch:"full", redirectTo:"/home"},
  {path: "home", component:ProfilecomponentComponent},
  {path: "404", component:NotFoundComponent},
  {path: "**", redirectTo:"/404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
