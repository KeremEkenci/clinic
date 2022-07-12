import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-doctor',
  templateUrl: './get-doctor.component.html',
  styleUrls: ['./get-doctor.component.css']
})
export class GetDoctorComponent implements OnInit {

  id:any;
  doctor:any = [];

  constructor(
    private http:HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap.get("id"))
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    let formData = new FormData();
    formData.append("id",this.id);

    this.http.post("http://localhost/clinic/getDoctors.php",formData).subscribe((result:any)=>{
      console.log(result)
      this.doctor = result
    })
  }

  getAppoinment(id:any,date:any,time:any,text:any) {
    if (date == "" || time =="" ) {
      $(".status").text("please enter date and time");
    } else {
      let formData:any = new FormData();
      formData.append("doctorId", id);
      formData.append("patientId", localStorage.getItem("userId"));
      formData.append("date", date);
      formData.append("time", time);
      formData.append("text", text);
      this.http.post("http://localhost/clinic/getAppoipment.php",formData).subscribe((result:any)=>{
        console.log(result)
        if (result.status == "ok") {
          $(".status").text("get appointment successfully, please wait 2 secondss");
          setTimeout(() => {
          this.router.navigateByUrl("appoipment");
          }, 2000);
        }
      })
  
    }
    
  }

}
