import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { SearchCourse } from '../models/course.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-searchcourse',
  templateUrl: './searchcourse.component.html',
  styleUrls: ['./searchcourse.component.css']
})
export class SearchcourseComponent implements OnInit {
  SearchCourse:any;
  CourseData:any;
  Technology:any;
  search=new SearchCourse();
  List:any;
  constructor(private router:Router,private _userservice:UserService,private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.SearchCourse = this.formbulider.group({
      Technology:['', [Validators.required]],
      From:['', [Validators.required]],
      To:['', [Validators.required]]
    });

    this.Technology = this.formbulider.group({
      Technology:['', [Validators.required]]
    }); 
    const user=this.Data();
    this._userservice.GetCourse('').subscribe(
      (response:any) => {   
          
          const user = response;
          if (user !="No Data Found") {
            this.List=response;
            console.log(this.List);          }
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

  get f(){
    return this.SearchCourse.controls;
  }
  get Tech() {
    return this.SearchCourse.get('Technology') as FormControl;
  }
  get from() {
    return this.SearchCourse.get('From') as FormControl;
  }
  get to() {
    return this.SearchCourse.get('To') as FormControl;
  }
  Data(): SearchCourse {
    this.search.Technology=this.Tech.value;
    this.search.Startdate=this.from.value;
    this.search.Enddate=this.to.value;
    return this.search;
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
  onSubmit(){
    const user=this.Data();
    
    this._userservice.getCourse(user).subscribe(
      (response:any) => {
        
          console.log(response);
          const user = response;
          if (user !="[]") {
            this.CourseData=response;
            console.log(this.CourseData);          }
          else
          {
            this.showalert("Data Not Fount","warning","");
          }
      },
      (err:any)=>{
        
console.log(err.statuscode);
this.showalert("Course not found with the search data","warning","");
      }
  );
  }

}
