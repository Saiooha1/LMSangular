import { Injectable } from '@angular/core';
import { HandleError } from '../http-error-handler.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler } from '../http-error-handler.service';
import { environment } from 'src/environments/environment';
import { SearchCourse } from '../models/course.model';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
export class UserService {

  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('UserService');
   }
   getCourse(data:SearchCourse):Observable<SearchCourse>
  {    
    return this.http.post((coursebaseUrl+'info/get'),data,httpOptions) .pipe();
  }
  GetCourse(isActive:any):Observable<any>
  {    
    return this.http.get((admincourse+'getCourse?isActive='+isActive),httpOptions) .pipe();
  }
}
