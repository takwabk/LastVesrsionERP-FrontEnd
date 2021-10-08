import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isAdmin:boolean=false
  constructor(private auth:AuthService) { }

  ngOnInit(): void {


    let user=this.auth.getDecodedToken()
    console.log("Currrentuseeer",user);

if(user.role==="Admin"){
  this.isAdmin=true;

}
else{

this.isAdmin=false

  }



}
}
