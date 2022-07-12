import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  items:any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    let formData:any = new FormData()
    formData.append("doctorId",localStorage.getItem("doctorId"))
    this.http.post("http://localhost/clinic/doctorAppointments.php" ,formData).subscribe((result:any) => {
      console.log(result)
      if (result.status != "error") {
      this.items = result

      }
    })
  }

}
