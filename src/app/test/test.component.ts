import { State } from './../state.enum';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import {of,Observable, forkJoin, fromEvent,Subject} from 'rxjs'
import {map,tap, mergeMap,takeWhile} from 'rxjs/operators'

interface Person {
  name: string,
  location: string
}

interface Company {
  companyName: string,
  companyLocation: string
}




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})



export class TestComponent implements OnInit {

    constructor(private svc : DataService) { }
  

  person1:{
    name: string,
    dob:string
  }

  btn99: any;
  div: any;
  subject: any;


  ngOnInit() {
    //this.svc.getAllUsers();
    this.person1 = {name:'mmmm',dob:'1231312'}


    const person: Person ={
      name:'manish',
      location:'portland'
    }

    const company: Company ={
      companyName:'MyCompany',
      companyLocation:'California'      
    }

    // let person$ : Observable<Person> = of(person);
    // person$.pipe(
    //   tap(test => console.log('test' , test))
    // )
    // .subscribe(data => console.log(data))    

    //observable created from an object using 'of' 
    let person1$: Observable<Person> = of(person);
    let company$: Observable<Company> = of(company);
    
    const combined = forkJoin(person1$,company$);
    combined.subscribe((data)=>console.log(data));

    let counter =0;
    const test = fromEvent(document.getElementById('btn'),'click')
    
    test.pipe(takeWhile(()=>counter<3))
    .subscribe((data) => {console.log('clicked in the component',counter)
    counter++
    });
    
    //self created observable
    let tt = Observable.create((observer:any)=>{
        observer.next('test from a self created observable');
    })
    tt.subscribe((data)=>console.log(data));

    
    // test.pipe(takeWhile(()=> counter <3))
    // .subscribe(()=> {console.log('clicked... event captured in the component',counter)
    // counter++;
    // })

    this.btn99 = document.getElementById('btn99');
    this.div = document.querySelector('div');
    this.subject = new Subject();

    
    this.btn99.addEventListener('click',()=>this.subject.next('clicked button'));
    this.subject.subscribe((value)=> this.div.textContent = value);




  }


  onSave($event){
    console.log("save button clicked" +$event);
  }

  onGet(){
    let temp$ = this.svc.getAllUsers();
    temp$.pipe()
    .subscribe((data)=>console.log(data))
    
  }
    
}
