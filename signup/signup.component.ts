import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  register(name:any,surname:any,email:any,password:any) {
    let data = new FormData();
    data.append("name",name);
    data.append("surname",surname);
    data.append("email",email);
    data.append("password",password);

    if (name == "" || surname == "" || email == "" || password == "") {
      $(".status").text("Please enter fill");
    } else {
      this.http.post("http://localhost/clinic/register.php", data, {responseType: "json"}).subscribe((result:any) => {
      console.log(result)
      if(result["status"]=="ok") {
        $("#inputName").val("");
        $("#surname").val("");
        $("#email").val("");
        $("#inputPassword").val("");
        $(".status").text("Register successfully");

      } else if(result["status"]="already") {
        $(".status").text("Already exist email");
      } 
      else {
        $(".status").text("Register error");
      }
    })
    }
  }

}
 