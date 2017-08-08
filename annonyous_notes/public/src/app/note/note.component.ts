import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service'; //this is imported cause this component will be making a call to the Api/Database
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
	notes: Array<any>;
	errors: Array<any> = [];
  constructor(private _noteService: NoteService) { } // Make sure to make the service private to not allow public access to  the sevice.

  ngOnInit() {
  	this.getAllNotes();
  }

  getAllNotes(){
  	this._noteService.getAllNotes() //this is accessing the service and utilizing the promise
  		.then( notes => this.notes = notes)
  		.catch( err => this.errors = err)
  }

  createNote(note){ //this is accessing the service and utilizing the promise
  	this._noteService.createNote(note)
  		.then( response => {
  			console.log(response)
  			this.getAllNotes()
  		})
  		.catch( err => {
  			this.errors = JSON.parse(err._body);
  			console.log(this.errors);
  		})
  }

}
