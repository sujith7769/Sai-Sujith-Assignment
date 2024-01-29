import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
loginForm = this.fb.group({
  username: ['',Validators.required],
  password: ['',Validators.required,]
});

constructor(private fb: FormBuilder,private http:HttpClient,public router:Router) {}

onSubmit() {
  const values ={
    username:this.loginForm.value.username,
    password:this.hashPassword(this.loginForm.value.password),
    grant_type:"password"
  }
  this.router.navigateByUrl('home')
  this.http.post('https://apiv2stg.promilo.com/user/oauth/token',values,).subscribe(
    (data) => console.log(data),
    error => console.log(error)
  );
}
hashPassword(password:any)
{
const sha256Hash = CryptoJS.SHA256(password);
return sha256Hash.toString(CryptoJS.enc.Hex)
}
passwordvalidator(control: any)
{
  const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  return passwordregex.test(control.value) ? null : {invalidPassword:true}
}
}
