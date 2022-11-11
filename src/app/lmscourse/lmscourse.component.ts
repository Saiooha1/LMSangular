import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-lmscourse',
  templateUrl: './lmscourse.component.html',
  styleUrls: ['./lmscourse.component.css']
})
export class LmscourseComponent implements OnInit {
  
  
  List:any;
  constructor(private _adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this._adminService.GetCourse('').subscribe(
      (response:any) => {        
          const user = response;
          if (user !="No Data Found") {           
            this.List=user;
           }
          else
          {
            //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
          }
      },
      (err:any)=>{     
console.log(err.statuscode);
        //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
      }
  );
  }

  Active(id:any,status:any){
    debugger;
    if(status=='1'){
    this._adminService.DeleteCourse(id).subscribe(
      (response:any) => {        
         
          const user = response;
          if (user !="No Data Found") {
            this.showalert("De-activated Successfully","success", "/course");
          }
          else
          {
            //this.showalert("Data Not Fount","warning","");
          }
      },
      (err:any)=>{
         this.showalert("Something went wronge","warning", "");
      }
  );}
  else{
    this._adminService.ActiveCourse(id).subscribe(
      (response:any) => {        
          
          const user = response;
          if (user !="No Data Found") {
            this.showalert("Activated Successfully","success", "/course");
          }
          else
          {
            //this.showalert("Data Not Fount","warning","");
          }
      },
      (err:any)=>{
        this.showalert("Something went wronge","warning", "");
      }
  );
  }
  }

  showalert(msg:string, type:any,url:any)
{  
  if(type=="success"){
    swal('',msg,type).then(function(){
      window.location=url;
    });    
  }else{
    swal('',msg,type);
  }
}

  

}
