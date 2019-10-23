import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfNeumComponent, PerfHidrComponent } from './components';
import { RepuestosComponent } from './components/repuestos/repuestos.component';
import { EmpujMallaComponent } from './components/empuj-malla/empuj-malla.component';
import { VigaComponent } from './components/viga/viga.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfNeumComponent,
    PerfHidrComponent,
    RepuestosComponent,
    EmpujMallaComponent,
    VigaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
