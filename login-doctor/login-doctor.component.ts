import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    $('.error').css('display', 'none');
    $('.success').css('display', 'none');
  }

  login(email:any, password:any) {
    let data = new FormData();
    data.append("email",email);
    data.append("password",password);

    this.http.post("http://localhost/clinic/loginDoctor.php",data, {responseType:"json"}).
    subscribe((result:any) => {
      console.log(result)
      if (result["status"]=="error") {
        $(".status").text("Login error");
      } else if(result["status"]=="ok") {
        localStorage.setItem("doctorId",result["id"])
        this.router.navigateByUrl("/doctor-home");
        $(".status").text("Login successfully");
      }
    })
  }

}
