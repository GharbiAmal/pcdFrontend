import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  
  helper=new JwtHelperService()

  dataUser={
    nom:'',
    email:'',
    id:'',
    role:''

  }

  logedIn:boolean=false
  constructor(private http:HttpClient) { }

  registre(body:any){
    return this.http.post('http://localhost:3000/user/register',body)
  }

  login(data:any){
    return this.http.post('http://localhost:3000/user/login',data)
  }


  SaveToken(token:any,id:any,nom:any,email:any,role:any){
    localStorage.setItem('token',token)
    localStorage.setItem('id',id)
    localStorage.setItem('role',role)

    localStorage.setItem('nom',nom)
    localStorage.setItem('email',email)


    this.dataUser.nom=nom
    this.dataUser.email=email


     this.logedIn=true

  }

  userLoggedIn(){
    let token =localStorage.getItem('token') 

    
    let role = localStorage.getItem('role')

    if(role=='User')
    {
     return true

    } else{
     return false
    }
 }

 getDataFromToken(){
  let token =localStorage.getItem('token')
  if (token){
    let data = JSON.parse(window.atob(token.split('.')[1]))
    return data;
  }

 }

 getOneUser(id:any){  
  return this.http.get('http://localhost:3000/user/getuser/'+id)
}

 //edit profil 
 updateUser(id:string,newprofil:any){
  return this.http.patch('http://localhost:3000/user/updateUser/'+id,newprofil)

}

updatepassword(id:string,newPassword:any){
  return this.http.patch('http://localhost:3000/updatePassword/'+id,newPassword)

}



 createFeedback(feed:any){
  return this.http.post('http://localhost:3000/createfeedback',feed)
}

getFeedbackByIdUser(id:any){  
  return this.http.get('http://localhost:3000/onefeedbackbyuser/'+id)
}

}
