import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppError } from '../common/app-error';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  errMsgConfirm;
  errMsgEmail;
  errMsgPwd;
  submitted: boolean;
  rember: boolean;
  invalidLogin: Boolean;
  msgError: AppError;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private authSrv: AuthService ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.minLength(1), Validators.required]],
    });

    // if (localStorage.getItem("email")) {
    //   this.formLogin.get("email").setValue(localStorage.getItem("email"));
    // }
  }
  login() {
    console.log("logiiiin");
    //   if (this.formLogin.valid)
    this.authSrv.login(this.formLogin.value).subscribe(
      (data: any) => {
        console.log(data);
        if (data) {
          let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
          this.router.navigate([returnUrl || "/projet"]);
        } else {
          this.invalidLogin = true;
        }
      },
      (error) => {
        if (error.originalError.error.msgsrv) {
          this.msgError = error.originalError.error.msgsrv;
          console.log(this.msgError);
        }
      }
    );
  }

  get fnEmail() {
    return this.formLogin.get("email");
  }
  get fnPwd() {
    return this.formLogin.get("password");
  }
}
