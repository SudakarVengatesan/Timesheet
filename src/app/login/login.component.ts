import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  forgotPasswordModal = false;
  loginForm = new FormControl();
  username:string='';
  password:string = '';
  showPassword = false;

  constructor(private toastr: ToastrService,public login:LoginService) { }

  ngOnInit() {

  }

  signin(){
    this.login.signin(this.username,this.password).subscribe((res)=>{
      console.log(res);
    },
    (error)=>{
      console.log(error);
    });
     
  }

  showSuccess() {
    if (this.username === '' && this.password === '') {
      this.toastr.error('Error', 'Check your username and password');
    } else {
      this.toastr.success('Hello, world!', 'Success!');
    }
  }

  openForgotPasswordModal() {
    this.forgotPasswordModal = true;
  }

  closeForgotPasswordModal() {
    this.forgotPasswordModal = false;
  }

  refreshPage() {
    location.reload();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  sendMail() {
    if (this.email === '') {
      this.toastr.error('Please enter your email or Check your mail.', 'Error');
    } else {
      this.toastr.success('Email sent successfully!', 'Success');
    }
  }
}
