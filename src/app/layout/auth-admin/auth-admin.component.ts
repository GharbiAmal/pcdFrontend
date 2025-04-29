import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css'],
  encapsulation: ViewEncapsulation.None // Désactive l'encapsulation
})
export class AuthAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
