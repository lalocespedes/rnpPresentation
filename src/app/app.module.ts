import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfNeumComponent, PerfHidrComponent } from './components';
import { RepuestosComponent } from './components/repuestos/repuestos.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfNeumComponent,
    PerfHidrComponent,
    RepuestosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
