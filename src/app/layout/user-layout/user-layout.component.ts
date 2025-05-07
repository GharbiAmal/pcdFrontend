import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  constructor(public ap:AuthuserService, private route:Router) { }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('nom')
    localStorage.removeItem('email')
    localStorage.removeItem('id')
    localStorage.removeItem('role')
 
 
 
    this.route.navigate(['/user/home'])
  }
}
