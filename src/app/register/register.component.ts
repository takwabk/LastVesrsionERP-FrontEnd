import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formClient: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.formClient = this.formbuilder.group({
      nom: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      prenom: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.required,
        ],
      ],
      email: ["", [Validators.email, Validators.required]],
      tel: [
        "",
        [
          Validators.required,
          Validators.pattern("(0|\\+33|0033)[1-9][0-9]{8}"),
        ],
      ],
      password: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.required,
        ],
      ],
      confirm_password: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.required,
          // PasswordValidators.checkPasswords,
        ],
      ],
    });
  }

  signUpClient() {
    let user = this.formClient.value;

    user.role = "User";
    console.log("form", this.formClient.value);
    this.authService.register(user).subscribe(
      (data: any) => {
        console.log("data", data);

        if (data)
          this.toastr.success(
            data.email +
              "enregistrer avec suuces verifiez votre adress mail :) "
          );

        this.formClient.reset();

        this.router.navigate(["/login"]);
      },
      (err) => {
        this.toastr.warning(err.error.msgsrv);
      }
    );
  }

  get fnNom() {
    return this.formClient.get("nom");
  }

  get fnTel() {
    return this.formClient.get("tel");
  }
  get fnPassword() {
    return this.formClient.get("password");
  }

  get fnEmail() {
    return this.formClient.get("email");
  }

  get fnConfirmPassword() {
    return this.formClient.get("confirm_password");
  }
  get fnPrenom() {
    return this.formClient.get("prenom");
  }

}
