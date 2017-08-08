import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userBike: Array<any>;
  updatedBike: any;
  constructor(private _listService:ListService, private _router: Router) { }
  
  ngOnInit() {
    this.getCurrentUser()
    this.getUserBike()
  }
  getCurrentUser(){
    this._listService.getCurrent()
      .then( () => console.log('youre logged in'))
      .catch( (err)=> this._router.navigate(['/login']))
  }

  createBike(formData){
    console.log(formData.value)
    this._listService.createBike(formData.value)
      .then( (response) => this.getUserBike() )
      .catch( (err) => console.log(err))
    // formData.reset()
  }
// this.userBike = [response]
  getUserBike(){
    this._listService.getUserBike()
        .then( (response) => this.userBike = response)
        .catch( (err) => console.log(err))
  }

  updateBike(formData){
      console.log(formData.value)
      this._listService.updateUserBike(formData.value)
        .then( () => this.getUserBike())
        .catch( (err) => alert('update failed'))
  } 

  deleteBike(bikeId){
    this._listService.deleteUserBike(bikeId)
        .then( () => this.getUserBike())
        .catch( (err) => alert('delete failed'))
  }

}