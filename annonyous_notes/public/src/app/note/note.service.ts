import { Injectable } from '@angular/core'; //this is automatically create 
import { Http } from '@angular/http'; //will need to import 
import 'rxjs'; //will need to be imported
@Injectable()
export class NoteService { 

  constructor(private _http: Http) { } //_http is a var storing Http and is able to be accessed with this._http

  getAllNotes(){
  	return this._http.get('/api/notes')
  		.map( data => data.json())
  		.toPromise();
  }

  createNote(note){
  	return this._http.post('/api/notes', note) //whenever you are using a service you need to have promise
  		.map( data => data.json())
  		.toPromise();
  }
}
