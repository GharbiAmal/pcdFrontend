import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  dataPassword={
    currentPassword:'',
    newPassword: '',
    confirmPassword: '',
    id:''
    }
    messageSuccess=''
    messageErr:any
    id:any
    dataUser:any;
  constructor(private route:ActivatedRoute, public ap:AuthuserService) { 
    this.route.params.subscribe(params=>this.id=params['id'])
      this.id =this.route.snapshot.paramMap.get('id')
      this.ap.getOneUser(this.id).subscribe(res=>{
        this.dataUser=res
      })
  }

  ngOnInit(): void {
  }


  getPassword(id:any){
    this.messageSuccess=''
    this.dataPassword.id=id   
  }

  changePassword(f:any){
    let data = f.value
    if (this.dataPassword.newPassword !== this.dataPassword.confirmPassword) {
      this.messageErr=`The new password and the confirmation password do not match.`
      return;
    }     
    this.id =this.route.snapshot.paramMap.get('id')
    this.ap.updatepassword(this.id,data).subscribe(response=>{
      console.log(response)
      this.dataUser.password=data.newPassword
      Swal.fire({
        title: 'Password successfully changed',
        text: "It's a good idea to log out from all other phones and computers and check the recent changes to your account.",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        }
      })

    },(err:HttpErrorResponse)=>{

      console.log(err.message)
      //alert('An error occurred while changing your password. Please try again later.')
      Swal.fire({
        title: 'Error',
        text: "Enter your old password correctly",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        }
      })
    })
  }

  visible:boolean = true;
  visible2:boolean = true;
  visible3:boolean = true;
  changetype:boolean =true;
  changertype:boolean =true;
  modiftype:boolean =true;

  viewpass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  viewpass2(){
    this.visible2 = !this.visible2;
    this.changertype = !this.changertype;
  }

  viewpass3(){
    this.visible3 = !this.visible3;
    this.modiftype = !this.modiftype;
  }
  handleClear(){
    this.dataPassword.confirmPassword = ''
  }

}
