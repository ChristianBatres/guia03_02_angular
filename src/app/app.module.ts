import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { VentasComponent } from './ventas/ventas.component';
@NgModule({
  declarations: [
    AppComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
