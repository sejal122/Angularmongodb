import { Component, inject,NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrl: './alldata.component.css'
})
export class AlldataComponent {
users=[];

userService:any=inject(UserService);
ngOnInit(){
this.userService.getData().subscribe((result:any)=>{
  this.users=result;
  console.log(this.users)
})


}
}
