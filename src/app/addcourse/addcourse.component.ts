import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { course } from '../models/course.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  Course:any;
  CourseData=new course();
  constructor(private _adminservice:AdminService,private formbulider: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.Course = this.formbulider.group({
      Technology: ['', [Validators.required]],
      CourseName: ['', [Validators.required]],
      CourseStartDate: ['', [Validators.required]],
      CourseEndDate: ['', [Validators.required]] });
  }  
  get Technology() {
    return this.Course.get('Technology') as FormControl;
  }
  get CourseName() {
    return this.Course.get('CourseName') as FormControl;
  }
  get CourseStartDate() {
    return this.Course.get('CourseStartDate') as FormControl;
  }
  get CourseEndDate() {
    return this.Course.get('CourseEndDate') as FormControl;
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

  Data(): course {
    this.CourseData.technology=this.Technology.value;
    this.CourseData.courseName=this.CourseName.value;
    this.CourseData.courseStartDate=this.CourseStartDate.value;
    this.CourseData.courseEndDate=this.CourseEndDate.value;
    
     return this.CourseData;
    
    }

    get f(){
      return this.Course.controls;
    }

  onSubmit()
  {
    const CourseData=this.Data();
    this._adminservice.AddCourse(CourseData).subscribe(
      (response:any) => {
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
             
              this.showalert("Course Added Successfully!","success", '/course');
          }
          else
          {
            //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
          }
      },
      (err:any)=>{
        this.showalert("Something went wronge","error", "");
      }
  );
  }
}

