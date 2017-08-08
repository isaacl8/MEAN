import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs';

@Injectable()
export class ListService {

  constructor(private _http: Http) { }
  getCurrent(){
      return this._http.get('/api/current')
          .map( (user: Response) => user.json())
          .toPromise()
    }

  createBike(bike){
    //   console.log('is this running')
      return this._http.post('/api/bike', bike)
          .map( (response: Response) => response.json())
          .toPromise()
  }

  getUserBike(){
      // console.log('helloooo')
      return this._http.get('/api/bikes')
          .map( (response: Response) => response.json())
          .toPromise()
  }

  updateUserBike(update){
    // console.log(update)
     return this._http.put('/api/bike', update)
           .map( (response: Response) => response.json())
           .toPromise()
  }

  deleteUserBike(theId){
    console.log(theId)
    return this._http.delete('/api/bike/'+ theId)
           .map( (response: Response) => response.json())
           .toPromise()
  }
}