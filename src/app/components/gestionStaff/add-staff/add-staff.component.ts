import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AgriService } from "src/app/services/agri.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-add-staff",
  templateUrl: "./add-staff.component.html",
  styleUrls: ["./add-staff.component.css"],
})
export class AddStaffComponent implements OnInit {
  formStaff: FormGroup;
  constructor(
    private agriSrv: AgriService,
    private fb: FormBuilder,
    private authSrv: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.formStaff = this.fb.group({
      prenom: "",

      nom: "",
      email: "",
      fonction: "",
      manager: "",
      dateEmbauche: "",
      Complement_adresse: "",
      tel: "",
      cp: "",
      ville: "",
      pays: "",
      tel2: "",
      email2: "",
      contactUrgence1: "",
      contactUrgence2: "",
      contactUrgence3: "",
      rue: "",
      secteur: "",
      role: "",
    });
  }
  signUpStaff() {
    this.authSrv.signUpStaff(this.formStaff.value).subscribe(
      (data: any) => {
        if (data) this.toastr.success(data.msgsrv);
        console.log("data error", data.msgsrv);
        this.formStaff.reset();
      },
      (err) => {
        let msg = "verifier les champs saisie";
        // this.toastr.warning(err.error.msgsrv);
        this.toastr.warning(msg);
      }
    );
  }
}
