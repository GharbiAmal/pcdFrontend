import { Component, OnInit } from '@angular/core';
import { AuthuserService } from '../../../services/authuser.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmpass:any
  
  messageError:any
  constructor(private ap:AuthuserService, private route:Router) { }

  ngOnInit(): void {
  }

  registre(f:any){
    let data=f.value
    this.ap.registre(data).subscribe(data=>{
      this.route.navigate(['/user/login'])
 
 
      Swal.fire({
       title: 'Registre avec succées',
       text: "Vous étes enregistré dans notre site!",
       icon: 'success',
       confirmButtonColor: '#3085d6',
       timer:2000
 
     })
      console.log(data)
 
     },(err:HttpErrorResponse)=>{
     console.log(err)
     this.messageError=err.error.error})
  }

}
