import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthuserService } from '../../../services/authuser.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  dataReceived:any
   messageError:any
  constructor(private aps:AuthuserService, private route:Router) { }

  ngOnInit(): void {
  }
  loginuser(f:any){
    let data=f.value

    this.aps.login(data).subscribe(response=>{
       this.dataReceived=response
       this.aps.SaveToken(this.dataReceived.token,this.dataReceived.id,this.dataReceived.nom,this.dataReceived.email,this.dataReceived.role)
          console.log(this.dataReceived)
          this.route.navigate(['/user/chatbot'])
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageError=err.error.error
     })   
    
  }

}
