import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ecomitems',
  templateUrl: './ecomitems.component.html',
  styleUrl: './ecomitems.component.css'
})
export class EcomitemsComponent {
  newData=[
    {
      id: 1003,
      name: 'vedant',
      age: 28
    },
    { id: 1004, name: 'Atul', age: 27 },
    { id: 1005, name: 'Bina', age: 34 },
    
  ]
  items=[];
 itemService:any=inject(UserService)
ngOnInit(){
  this.itemService.getItems().subscribe((result:any)=>{
    this.items=result;
    console.log(this.items)
  })

  this.itemService.addItems(this.newData).subscribe((result:any)=>{
    console.log(result)
  })

  this.itemService.deleteItems().subscribe((result:any)=>{
    console.log(result)
  })


  this.itemService.updateItems().subscribe((result:any)=>{
    console.log(result)
  })


}


}
