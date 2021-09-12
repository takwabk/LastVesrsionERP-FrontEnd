import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import * as moment from "moment";
import { AgriService } from 'src/app/services/agri.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  formClient: FormGroup;
  show = true;
  activities
  systems
  projets
  etats:any=[
  {id:1,nom:"Client En Quotation"},
  {id:2,nom:"Client En Quotation"},
  {id:3,nom:"Contrat Cadre"},

    {id:4,nom:"Client En Conception"},
    {id:5,nom:"Client En Construction"},
    {id:6,nom:"Client En service"}

  ]
  etats1;
  roles

  constructor(
  private fb:FormBuilder,
  private authSrv:AuthService,
  private agriSrv:AgriService,
  private toastr:ToastrService
  ) {}

  ngOnInit() {
    console.log("hiiiiii");

    console.log("etats",this.etats);


    this.formClient = this.fb.group({
      prenom: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.required,
        ],
      ],
      nom: [
        "",
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.required,
        ],
      ],
      etats: "",
      email: ["", [Validators.email, Validators.required]],

      tel: ["", [Validators.required]],
      tel_Domicile: "",
      fonction: ["", [Validators.required]],
      adresse: ["", Validators.required],
      codePostal: ["", Validators.required],
      ville: ["", Validators.required],
      pays: ["France", Validators.required],
      complement:"",





      Src_Client: "",
      Date_src: "",
      Date_StatQ: "",
      Date_StatCC: "",
      Date_StatCp: "",
      Date_StatCs: "",
      Date_StatEs: "",
    });



  }
  signUpClient() {
    this.authSrv.addUser(this.formClient.value).subscribe(
      (data: any) => {
        console.log("data",data);
        console.log("this.formClient.value",this.formClient.value);

        // if (data) this.toastr.success(data.msgsrv);
        // console.log("data error", data.msgsrv);
        // this.formClient.reset();
      },
      // (err:any) => {
      //   let msg = "verifier les champs saisie";
      //   // this.toastr.warning(err.error.msgsrv);
      //   this.toastr.warning(msg);
      // }
    );
  }
  getAllActivites() {
    this.agriSrv.getAllActivites().subscribe((data: any) => {
      this.activities = data;
      console.log("activities", this.activities);
    });
  }
  getAllSystems() {
    this.agriSrv.getAllSystems().subscribe((data: any) => {
      this.systems = data;
      console.log("systems", this.systems);
    });
  }
  getAllProjets() {
    this.agriSrv.getAllProjets().subscribe((data: any) => {
      this.projets = data;
      console.log("projets", this.projets);
    });
  }
  getAllEtas() {
    this.agriSrv.getAllEtas().subscribe((data: any) => {
      this.etats1 = data;
      console.log("etats", this.etats1);
    });
  }
  getAllRoles() {
    this.authSrv.getAllRole().subscribe((data: any) => {
      this.roles = data;

      console.log("roles", this.roles);
    });
  }

  get fnNom() {
    return this.formClient.get("nom");
  }
  get fnPrenom() {
    return this.formClient.get("prenom");
  }

  get fnEmail() {
    return this.formClient.get("email");
  }
  get fnTel() {
    return this.formClient.get("tel");
  }

  get fnFonction() {
    return this.formClient.get("fonction");
  }

  get fnCodePostal() {
    return this.formClient.get("codePostal");
  }

  get fnVille() {
    return this.formClient.get("ville");
  }

  get fnPays() {
    return this.formClient.get("pays");
  }
  toggleshow() {
    this.show = !this.show;
  }

  listenEtat(value:any) {
    console.log("event.target.value : ",  value);
    let d = Date.now();
    let date = moment(d).format("lll");
    enum DateTypes {
      Date_StatQ = "Client En Quotation",
      Date_StatCC = "Contrat Cadre",
      Date_StatCp = "Client En Conception",

      Date_StatCs = "Client En Construction",
      Date_StatEs = "Client En service",
    }

    //this.formClient.reset();
    this.formClient.get("Date_StatQ").setValue("");
    this.formClient.get("Date_StatEs").setValue("");
    this.formClient.get("Date_StatCp").setValue("");
    this.formClient.get("Date_StatCs").setValue("");
    this.formClient.get("Date_StatCC").setValue("");
    const formControlName = Object.keys(DateTypes).find(
      (key) => DateTypes[key] === value
    );
    this.formClient.get(formControlName).setValue(date);
  }
}

