import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoipment',
  templateUrl: './appoipment.component.html',
  styleUrls: ['./appoipment.component.css']
})
export class AppoipmentComponent implements OnInit {

  name:any = localStorage.getItem("name");
  doctors:any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get("http://localhost/clinic/allDoctors.php").subscribe((result:any)=> {
      console.log(result)
      this.doctors = result
    })
  }


}
