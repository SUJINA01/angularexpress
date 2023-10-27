import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendAccessService {
  userList : any=[];
  data : any;
  expresponse : string = "";

  constructor(private http:HttpClient)
  {
  }
  addUser(udata:any) : any
  {
    this.http.post('http://localhost:3000/insert',udata.value).subscribe((response)=>
    {
      this.expresponse=response.toString();
    });
    return this.expresponse;
    
  }
  updateUser(udata:any)
  {
    this.http.put('http://localhost:3000/update',udata.value).subscribe((response)=>
    {
      //this.data =response;
      //console.log(this.data);
      this.expresponse=response.toString();
    });
    //  console.log("added");
    
  }
  getAllUsers()
  {
    this.http.get('http://localhost:3000/getAll').subscribe((response)=>
    {
      this.userList=response;
      console.log(this.userList);
    });
    return this.userList;

  }

}
