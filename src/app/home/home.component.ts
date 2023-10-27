import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from '../backend-access.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'templateforms';
  userList : any=[];
  expresponse : string = "";
  constructor(private http:HttpClient, private baccess : BackendAccessService)
  {
  }
  addUser(udata:any)
  {
     this.expresponse = this.baccess.addUser(udata);    
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
    this.userList = this.baccess.getAllUsers();
  }

}
