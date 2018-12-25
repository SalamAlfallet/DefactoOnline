import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {ManageService} from '../manage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 users=[];
  constructor(private manageService :ManageService,private route:Router) { }
  loginForm =new FormGroup({
    username:new FormControl(null),
    password:new FormControl(null)
  
  })

  ngOnInit() {
    this.manageService.getUsers().subscribe(pro => this.users=pro);
  }
  errorName="";
  errorpass=""

  submitForm(){
    // if(this.loginForm.controls.username.errors.required ){
    //   this.errorName="name required "}
    //   if(this.loginForm.controls.password.errors.required ){
    //     this.errorpass="password required"}
        
    for(let data of this.users){
if(data.username===this.loginForm.value.username && data.password===this.loginForm.value.password){
  
    //    }
alert("sucsses");
this.route.navigate(['/AppComponent']);}
else{
  alert("invalid user name or password");

}


    }

 //   alert(this.loginForm.value.username);
  }




  //  ///// Reactive Form///////////
  //  myform=new FormGroup({
  //   name:new FormControl(null,[Validators.required,Validators.minLength(10)]),
  //   age:new FormControl(null,[Validators.required])
  
  // })
  // error=""
  // isclickedSubmit=false
  // submitForm(){
  //   this.isclickedSubmit=true

  //    if(this.myform.controls.name.errors.required){
  //     this.error="name required"
  //    }

  //    if(this.myform.controls.name.errors.touched){
  //     this.isclickedSubmit=true
  // }
  //   console.log(this.myform)
  // }

}
