import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
})
export class DoctorProfileComponent implements OnInit {
  profile: any = [];
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {
    var id: any = localStorage.getItem('doctorId');
    let data = new FormData();
    data.append('id', id);
    this.http
      .post('http://localhost/clinic/getDoctorProfile.php', data, {
        responseType: 'json',
      })
      .subscribe((result: any) => {
        this.profile = result;
      });
  }

  updateProfile(name: any, surname: any, email: any, password: any, description:any, area:any, cost:any) {
    console.log(name);
    if (name == '' || surname == '' || email == '' || password == '' || description == "" || area == "" || cost == "") {
      $('.status').text('please enter fields');
    } else {
      var id: any = localStorage.getItem('doctorId');
      let data = new FormData();
      data.append('id', id);
      data.append('name', name);
      data.append('surname', surname);
      data.append('email', email);
      data.append('password', password);
      data.append('description', description);
      data.append('area', area);
      data.append('cost', cost);

      this.http
        .post('http://localhost/clinic/update-doctor-profile.php', data, {
          responseType: 'json',
        })
        .subscribe((result: any) => {
          if(result.status=="ok") {
              $(".status").text("updated profile");
          } else  {
            $(".status").text("update error");

          }
        })
  }
}

  deleteProfile() {
    var id: any = localStorage.getItem('doctorId');
    let data = new FormData();
    data.append('id', id);
    this.http
      .post('http://localhost/clinic/deleteDoctorProfile.php', data, {
        responseType: 'json',
      })
      .subscribe((result: any) => {
        console.log(result);
        if(result=="ok") {
          setTimeout(() => {
            $(".status2").text("delete profile, redirecting to login page");
            this.router.navigateByUrl("login-doctor");
          }, 2000);
        } else {
          $(".status").text("error, after try it")
        }
      });
  }
}
