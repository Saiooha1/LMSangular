import { Injectable } from '@angular/core';
import {HandleError} from '../http-error-handler.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler } from '../http-error-handler.service';
import { Observable } from 'rxjs';
import { Login,Register } from '../models/login.model';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { course } from '../models/course.model';
const companybaseUrl =environment.companybaseUrl;
const baseUrl=environment.baseUrl;
const coursebaseUrl=environment.coursesbaseUrl;
const admincourse=environment.AdminCoursebaseUrl;

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
});
const httpOptions = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('AdminService');
   }

   Authenticate(user: Login):Observable<any> {    
    return this.http.post((baseUrl),user,httpOptions) .pipe();
  }
   GetUser(user: Login):Observable<any> {    
    return this.http.post((companybaseUrl+'login'),user,httpOptions) .pipe();
  }


  register(data:Register):Observable<Register>
  {   
    return this.http.post((companybaseUrl+'register'),data,httpOptions) .pipe();
  }
  DeleteCourse(Id:any):Observable<any>
  {    
    return this.http.delete((admincourse+'delete?courseId='+Id),httpOptions) .pipe();
  }   
  ActiveCourse(Id:any):Observable<any>
  {   
    return this.http.get((admincourse+'activate?courseId='+Id),httpOptions) .pipe();
  }
  AddCourse(data:course):Observable<course>
  {    
    return this.http.post((admincourse+'addcourse'),data,httpOptions) .pipe();
  }
  GetCourse(isActive:any):Observable<any>
  {    
    return this.http.get((admincourse+'getCourse?isActive='+isActive),httpOptions) .pipe();
  }
}
