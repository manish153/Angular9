import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import{ChildComponent} from './child/child.component'


const routes: Routes = [
  {path: 'test', component:TestComponent},
  {path: 'test2', 
  component:Test2Component,
  children:[{
    path:'child',
    component:ChildComponent
  }
  ]

  },
  {path: 'test3', component:Test3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

