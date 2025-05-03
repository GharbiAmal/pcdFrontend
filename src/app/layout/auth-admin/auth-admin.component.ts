import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { AuthuserService } from 'src/app/views/services/authuser.service';

@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css'],
  encapsulation: ViewEncapsulation.None // Désactive l'encapsulation
})
export class AuthAdminComponent implements OnInit {

  constructor(public ap:AuthuserService) { }

  ngOnInit(): void {
  }

}
