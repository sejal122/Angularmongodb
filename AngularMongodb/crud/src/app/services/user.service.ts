import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 apiurl="http://localhost:8080";
//   newData={
//   id:500,
//   name:'newDATA',
//   email:'new@gmail.com'
// }

 httpClient=inject(HttpClient)
  constructor() { }

  getData(){
    return this.httpClient.get(this.apiurl + '/data')
    //http://localhost:8080/data
  }
  getItems(){
    return this.httpClient.get(this.apiurl + '/items')
    //http://localhost:8080/items
  }
  addItems(newData:any){
    return this.httpClient.post(this.apiurl + '/add',newData)
  }

  deleteItems(){
    return this.httpClient.delete(this.apiurl + '/delete')
  }
  updateItems(){
    return this.httpClient.put(this.apiurl + '/update',{name:'Akshay'})
  }
}
