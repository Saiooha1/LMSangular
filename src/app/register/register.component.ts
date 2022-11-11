import { Component, OnInit } from '@angular/core';
import { Register } from '../models/login.model';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userSubmitted!: boolean;
  user=new  Register();
  registrationForm:any;
  constructor(private _adminService:AdminService,private formbulider: FormBuilder,private router:Router) { }
  

  ngOnInit(): void {
    this.createUser();
  }

  createUser() {
    this.registrationForm = this.formbulider.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]      
    }, { validators: this.passwordMatchingValidatior });
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

  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? "" :
        {notmatched: true};
}


  onReset() {
    this.userSubmitted = false;
    this.registrationForm.reset();
}
userData(): Register {
     this.user.Name= this.name.value;
     this.user.Email= this.email.value;     
     this.user.Password= this.password.value;
  return this.user;
}
  get f(){
    return this.registrationForm.controls;
  }

  get name() {
    return this.registrationForm.get('name') as FormControl;
}

get email() {
    return this.registrationForm.get('email') as FormControl;
}
get password() {
    return this.registrationForm.get('password') as FormControl;
}
get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
}
onSubmit(  )
  {
    const register=this.userData();  
    this._adminService.register(register).subscribe(
      (response:any) => {
          const user = response;
          debugger;
          if (user ==true) {
            
              this.showalert("user register successfully!","success", '/login');
          }
          else
          {
            this.showalert("Data Not Fount","warning", '');
          }
      },
      (err:any)=>{
        this.showalert("something went wronge!","warning", "");
      }
  );
  }

}
