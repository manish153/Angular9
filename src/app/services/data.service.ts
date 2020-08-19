import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER="http://localhost:3000"

  constructor(private http : HttpClient) { }

  public getAllUsers(){
  //   let obs$ = this.http.get('http://localhost:3000/users/allusers');
  //   obs$.subscribe((response) => console.log(response));

    // return this.http.get('http://localhost:3000/users/allusers')   
    return this.http.get(`${this.REST_API_SERVER}/users/allusers`)   
  }
}