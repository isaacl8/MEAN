import { Component, OnInit } from '@angular/core';
import { BrowseService } from './browse.service';
import { ListService } from './../list/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  bikes: any;
  contact: boolean;
  user: any;
  constructor(private _browseService:BrowseService, 
              private _listService: ListService,
              private _router: Router) { }
  ngOnInit() {
    this.getAllBikes()
    this.getCurrentUser()
  }

  getAllBikes(){
    this._browseService.getAllBikeees()
        .then( (response) => this.bikes = response)
        .catch( (err) => console.log('getting all bikes did not work'))
  }

  contactInfo(theID){
        this.contact = true;
        this._browseService.getUserInfozzz(theID)
            .then ( (response) => this.bikes.append = alert('Name: ' + response[0]._user.name + ' '  + 'Email: '))
            .catch( (err) => console.log('info didnt work'))
  }

  getCurrentUser(){
    this._listService.getCurrent()
      .then( (response) => this.user = response)
      .catch( (err)=> this._router.navigate(['/login']))
  }

    deleteBike(bikeId){
    this._listService.deleteUserBike(bikeId)
        .then( () => this.getAllBikes())
        .catch( (err) => alert('delete failed'))
  }

}
