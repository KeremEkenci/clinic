import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

    this.http.post("http://localhost/clinic/login.php",data, {responseType:"json"}).
    subscribe((result:any) => {
      console.log(result["name"])
      console.log(result)
      if (result["status"]=="error") {
        $(".status").text("Login error");
      } else if(result["status"]=="ok") {
        localStorage.setItem("name",result["name"]);
        localStorage.setItem("userId",result["id"]);
        $(".status").text("Login successfully");
        this.router.navigateByUrl("appoipment");
        
      }
    })
  }

}
