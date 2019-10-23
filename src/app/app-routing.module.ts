import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfNeumComponent, PerfHidrComponent, RepuestosComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'perfneum',
    component: PerfNeumComponent
  },
  {
    path: 'perfhidr',
    component: PerfHidrComponent
  },
  {
    path: 'repuestos',
    component: RepuestosComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
