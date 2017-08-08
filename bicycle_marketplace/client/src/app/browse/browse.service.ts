import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class BrowseService {

  constructor(private _http: Http) { }

  getAllBikeees(){
    // console.log('hello get all bikes??')
    return this._http.get('/api/bike')
        .map( (response: Response) => response.json())
        .toPromise()
  }

  getUserInfozzz(userId){
    // console.log(userId)
    return this._http.get('/api/bike/' + userId)
        .map( (response : Response) => response.json())
        .toPromise()
  }
    deleteUserBike(theId){
    console.log(theId)
    return this._http.delete('/api/bike/'+ theId)
           .map( (response: Response) => response.json())
           .toPromise()
  }
}