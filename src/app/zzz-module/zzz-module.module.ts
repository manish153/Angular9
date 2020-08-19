import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZzzModuleRoutingModule } from './zzz-module-routing.module';
import { Zcomp1Component } from './zcomp1/zcomp1.component';
import { Zcomp2Component } from './zcomp2/zcomp2.component';
import { Zcomp3Component } from './zcomp3/zcomp3.component';


@NgModule({
  declarations: [Zcomp1Component, Zcomp2Component, Zcomp3Component],
  imports: [
    CommonModule,
    ZzzModuleRoutingModule
  ]
})
export class ZzzModuleModule { }
