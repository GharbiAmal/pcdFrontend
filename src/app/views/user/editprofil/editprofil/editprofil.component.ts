import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthuserService } from 'src/app/views/services/authuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editprofil',
  templateUrl: './editprofil.component.html',
  styleUrls: ['./editprofil.component.css']
})
export class EditprofilComponent implements OnInit {

  nom :any
  email :any
  id:any

  dataPassword={
    currentPassword:'',
    newPassword: '',
    confirmPassword: '',
    id:''
    }

  user:any;
  messageSuccess=''
 
  messageErr=''
  constructor(public ap:AuthuserService) {
    this.nom=localStorage.getItem('nom')
     this.email=localStorage.getItem('email')
     this.id=localStorage.getItem('id')
   }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');

    if (userId) {
      this.ap.getOneUser(userId).subscribe(
        (user: any) => {
          this.user = user;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
  update(f:any){
    let data = f.value
    this.ap.updateUser(this.id,data).subscribe(response=>{
      
      console.log(response)
      this.user.nom=data.nom
      this.user.email=data.email
      Swal.fire({
        title: 'Profile successfully updated',
        text: 'You can reconnect to properly save your changes',
        icon: 'success',

        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
           
        } 
      }) 
     }, (err:HttpErrorResponse)=>{
       console.log(err.message)
       this.messageErr=err.error

    }) 
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
    this.id=localStorage.getItem('id')
    this.ap.updatepassword(this.id,data).subscribe(response=>{
      console.log(response)
      this.user.password=data.newPassword
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
