import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/services/authuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.css']
})
export class AddfeedbackComponent implements OnInit {


  messageError: string = '';

  id:any

feed:any

dataArray:any=[]

  constructor(private ap: AuthuserService, private router: Router) { 
    this.id=localStorage.getItem('id')

    this.ap.getFeedbackByIdUser(this.id).subscribe(res=>{
      this.dataArray=res
    },err=> console.log(err)
    )
  }

  ngOnInit(): void { }

  addfeedback(f: any) {
    if (f.valid) {
      const data = {
        description: f.value.description,  // Get description from form value
        idUser: this.ap.getDataFromToken()?.id
      };
    this.ap.createFeedback(data).subscribe(
      res => {
        Swal.fire({
          title: 'Added successfully',
          text: 'Your feedback has been added.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          timer: 2000
        }).then(() => {
          this.router.navigate(['/user/feedback']);
        });
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.messageError = err.error;
      }
    );
  } }

 



}
