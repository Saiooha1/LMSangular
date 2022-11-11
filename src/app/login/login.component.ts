import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { AdminService } from '../services/admin.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  loginData=new Login();
  constructor(private formbulider: FormBuilder,private router:Router,private _adminService:AdminService) { }

  ngOnInit(): void {
   this.loginForm = this.formbulider.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]     
    });
  }
  get f(){
    return this.loginForm.controls;
  }

  login(): Login {
this.loginData.Password=this.password.value;
this.loginData.email=this.email.value;
 return this.loginData;
}
get email() {
  return this.loginForm.get('email') as FormControl;
}
get password() {
  return this.loginForm.get('password') as FormControl;
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

onsubmit(){
  const userData = this.login();
  

  this._adminService.Authenticate(userData).subscribe(
    (response: any) => {      
      const Auth = response;
      if (Auth.token != "") {        
        localStorage.setItem('token',((Auth.token??"")));
        if (Auth.token != "") 
        {
          this._adminService.GetUser(userData).subscribe(
            (response: any) => {
             
              const user = response[0];
              if (user != "") {
                localStorage.setItem('ID', user.id ?? "");
                localStorage.setItem('Name', user.name ?? "");
                localStorage.setItem('Role', user.role ?? "");
                
                if (user.role == "Admin") 
                {                 
                  this.showalert("Login Success as Admin","success", '/course');
              }
                else
                {                  
                  this.showalert("Login Success as User","success", '/searchcourse');
                }
        
              }      
               else
                      {
        
        }
                  },
        (err: any) => {
        
        }
              );
      }
        else
        {
        }

      }      
       else
              {
//this.showalert("Data Not Fount", "warning", this.router.navigate(['/login']));
}
          },
(err: any) => {
//this.showalert("Data Not Fount", "warning", this.router.navigate(['/login']));
}
      );
}

}
