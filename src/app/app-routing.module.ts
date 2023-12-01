import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RentalhiveComponent} from "./rentalhive/rentalhive.component";
import {MaterielComponent} from "./materiel/materiel.component";

const routes: Routes = [
  {path: 'rentalhive', component: RentalhiveComponent},
  {path: 'materiel', component: MaterielComponent},
  {path: '', component: RentalhiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
