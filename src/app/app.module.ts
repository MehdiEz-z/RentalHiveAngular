import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentalhiveComponent } from './rentalhive/rentalhive.component';
import { MaterielComponent } from './materiel/materiel.component';
import {HttpClientModule} from "@angular/common/http";
import { DemandeComponent } from './demande/demande.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalhiveComponent,
    MaterielComponent,
    DemandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
