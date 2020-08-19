import { Zcomp1Component } from './zcomp1/zcomp1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Zcomp2Component } from './zcomp2/zcomp2.component';
import { Zcomp3Component } from './zcomp3/zcomp3.component';


const routes: Routes = [

  {path: 'z1', component:Zcomp1Component},
  {path: 'z2', component:Zcomp2Component},
  {path: 'z3', component:Zcomp3Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZzzModuleRoutingModule { }