import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";

import { BehaviorSubject } from "rxjs";
import { AgriService } from "src/app/services/agri.service";
import { conditionallyCreateMapObjectLiteral } from "@angular/compiler/src/render3/view/util";
import { TestBed } from "@angular/core/testing";
// import * as $ from "jquery";
declare var $: any;

@Component({
  selector: "app-fiche-client",
  templateUrl: "./fiche-client.component.html",
  styleUrls: ["./fiche-client.component.css"],
})
export class FicheClientComponent implements OnInit {
   @ViewChild("f", { static: false }) form: NgForm;

  clients;
  id;
  infos;
  newFiche: any[] = [];
  infotrie;
  infotrie2;
  infotrie3;
  infotrie4;
  infotrie5: any;
  res3;
  res4;
  MO_MS;
  Nm3_CH4_t_MO;

  prod ;
  prod1 ;
  prod2 ;
  prod3 ;
  prod4 ;
  prod5 ;

  division;

  eventType = "";
  formFiche: FormGroup;
  base_prix;
  options: any = [
    { data: "MB", name: "MB" },
    { data: "MS", name: "MS" },
  ];
  prix: any;
  bases;
  t_MB_an;
  t_MS_an;
  somme_MS;
  somme_MB;
  tt_heure_annee;
  debit_horaire_Nm3_CH4_an;
  debit_horaire_injecte_Nm3_CH4_an;
  pvoir_calorfiq_sup_CH4;
  s_tt_KWH_h;
  heure_fonction;
  enrg_KWH_an;
  enrg_MWH_an;
  enrg_GWH_an;
  effluent_elevage;
  Tarif_debut_contrat1;
  Tarif_debut_contrat2;
  Recette_vente_biomethane;
  vente_digestat;
  taux_interet_obligatoire;
  Montant_annuel_redevance;
  fumier;
  fumiers: any = [
    { data: "couverte", value: "couverte" },
    { data: "non couverte", value: "non couverte" },
  ];
  Mois_fumiere;
  mois_Silo;
  Densite_Silo;
  hauteur_Silo;

  Densite_Fumier;

  hauteur_Fumier;
  pluviometre;
  evaporation;
  ventes: any = [
    { data: "oui", value: "oui" },
    { data: "non", value: "non" },
  ];
  Prix_digestat_Liquide;
  Prix_digestat_Solide;
  Quantite_digestat_Liquide;
  Quantite_digestat_Solise;
  Recette_vente_digestat;
  installation_beneficie_aide_Agence_environnement_maitrise_energie;
  installations: any = [
    { data: "oui", name: "oui" },
    { data: "non", name: "non" },
  ];
  Date_signature_contrat_achat_biomethane;
  tarif_debut_contrat;
  Financement_Fonds_Propres;
  financements: any = [
    { data: "oui", value: "oui" },
    { data: "non", value: "non" },
  ];

  Pourcentage_FP_Financer;

  Montant_finance_FP_Finance;
  Montant_pret_bancaire;
  ERIBOR;
  Taux_interet_annuel;
  selected: Date;
  infofilter;
  Description;
  f13;
  F14;
  f11;
  f15;
  f16;
  sum1;
  sum2;
  sum3;

  //Feuille Digestat
  tas_ensilage_Fumier;
  tas_ensilage_Silo;
  recup_eaux_uses_Fumier;
  recup_eaux_uses_Silo;
  total_eaux_uses = 0;
  culture;
  autres;
  voie_unite;
  digistat_brut;
  digistat_liquide;
  digistat_solide;
  Terrain_culture_dedie;
  autre_terrain;
  Quantite_fraction_liquide;
  Quantite_fraction_solide;
  digistat_liquide_requis;
  digistat_solide_requis;

  digistat_liquide_exedent;
  digistat_solide_exedent;
  isVisible : boolean = false;

  //**
  @Output() scenarioEmetteur = new EventEmitter<string>();

  constructor(
    private agriSrv: AgriService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    console.log("base_prix", this.base_prix);
    this.tt_heure_annee = "8760";
    this.pvoir_calorfiq_sup_CH4 = "10.80";
    this.heure_fonction = "8200";
    this.Tarif_debut_contrat1 = "9.63";
    this.vente_digestat = "";
    this.tarif_debut_contrat = "9.47";
    this.taux_interet_obligatoire = "8%";
    this.ERIBOR = 0;
    this.Montant_annuel_redevance = "0.0£";
    this.Mois_fumiere = 1.5;
    this.mois_Silo = 18;
    this.Densite_Silo = 0.7;
    this.hauteur_Silo = 6.0;
    this.pluviometre = 900;
    this.evaporation = "40";
    this.Densite_Fumier = 0.5;

    this.hauteur_Fumier = 1.5;
    this.hauteur_Silo = 6;
    this.f11 = 0;
    this.f15 = 0;
    this.autre_terrain = 0;
    this.Quantite_fraction_liquide = 30;
    this.Quantite_fraction_solide = 12;

    // this.formFiche = this.fb.group({
    //   IC1: "",
    //   IC2: "",
    //   IC3: "",
    //   Description: "",
    //   Effluent_Delevage: "",
    //   unite: "",
    //   Taux_de_Presence_Rendement_par_ha: "",
    //   uMB_an: "",
    //   Unitee: "",
    //   Type: "",
    //   MS: "",
    //   MO_MS: "",
    //   Nm3_CH4_t_MO: "",
    //   Commentaire: "",
    //   Nm3_CH4_t_MB: "",
    //   Biogaz_m3_tMO: "",
    //   CH4percentMS: "",
    //   Nm3_CH4_m3_tMO: "",
    //   u_N_t: "",
    //   u_P2O5_t: "",
    //   u_K2O_t: "",
    //   t_MB_an: "",
    //   t_MS_an: "",
    //   Nm3_CH4_an: "",
    //   TOTAL_TMB: "",
    //   S_tt_exp_II: "",
    //   S_tt_Autre_III: "",
    //   GR_tt: "",
    //   S_tt: "",
    //   ration: "",
    //   N: "",
    //   P: "",
    //   K: "",
    //   base_prix: "",
    //   prix: "",
    //   t_MB: "",
    //   $_t_MS: "",
    //   prix_intrants_MB: "",
    //   prix_intrants_MS: "",
    //   volume_Nm3_CH4_an: "",
    //   tt_heure_annee: "8760",

    //   debit_horaire_Nm3_CH4_an: "",
    //   debit_horaire_injecte_Nm3_CH4_an: "",
    //   pvoir_calorfiq_sup_CH4: "",
    //   s_tt_KWH_h: "",
    //   heure_fonction: "8200",

    //   enrg_KWH_an: "",
    //   enrg_MWH_an: "",
    //   enrg_GWH_an: "",
    // });

    this.id = this.route.snapshot.params["id"];

    this.agriSrv.getClientById(this.id).subscribe((data) => {
      this.clients = data;
      console.log("client", this.clients);
    });
    this.getFichesInfo();
  }
  // AddFicheClient() {
  //   this.agriSrv.createFiche(this.formFiche.value).subscribe(
  //     (data: any) => {
  //       if (data) this.toastr.success("Saved with success");
  //       console.log("data error", data.msgsrv);
  //       this.formFiche.reset();
  //     },
  //     (err) => {
  //       let msg = "verifier les champs saisie";
  //       // this.toastr.warning(err.error.msgsrv);
  //       this.toastr.warning(msg);
  //     }
  //   );
  // }




  listenBase(event) {
    console.log("eveeeeeeeeeeeeent", event);
    this.bases = this.base_prix.find((x) => x.data == event);
    console.log("bases1", this.bases);
  }

  listenType(event) {
    console.log("eveeeeeeeeeeeeent", event);
    this.eventType = event;

    this.infotrie2 = this.infos
      .filter((x) => x.IC1 == event)
      .map((item) => item.IC2)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
  listenIc1(event) {
    this.infotrie3 = this.infos
      .filter((x) => x.IC2 == event)
      .map((item) => item.IC3)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
  listenIc2(event) {
    this.infotrie4 = this.infos
      .filter((x) => x.IC3 == event)
      .map((item) => item.Description)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
desc
  listenDesc(event) {
this.desc=event
    this.infotrie5 = this.infos.find((x) => x.Description == event);
    console.log("nnn", this.infotrie5);

    (this.infofilter = this.infotrie5.map((item) => item.MS)),
      console.log("info", this.infos);
    console.log("this.infooooo", this.infofilter);
    //delete this.fiche.descrptin_id
  }
  listenQuantute(event){
    console.log("305",event
    );

    this.infotrie5 = this.infos.find((x) => x.Description == this.desc);
    console.log("ingo5",this.infotrie5);

    this.prod = this.produit(
      parseFloat(this.infotrie5.uMB_an.replace(",", ".")),
      +parseFloat(event),
      +this.infotrie5.Taux_de_Presence_Rendement_par_ha.replace("%", "") / 100
    );
    console.log("ppp",this.prod);

this.t_MB_an=(this.prod).toFixed(2);


this.prod1 = this.produit2(
  +this.prod,
  +this.infotrie5.MS.replace(",", ".").replace("%", "") / 100
);


this.t_MS_an=this.prod1.toFixed(2);



this.prod2 = this.produit3(
  +this.infotrie5.Nm3_CH4_t_MO,
  +this.infotrie5.MO_MS.replace(",", ".").replace("%", "") / 100,
  +this.infotrie5.MS.replace(",", ".").replace("%", "") / 100,
  +this.prod
);
this.Nm3_CH4_an=(this.prod2)

this.KWe_h=this.produit(
  +this.prod2,
  10.8,0.4
);
console.log("kwh",this.KWe_h);

this.KWe_h=this.KWe_h.toFixed(2)


  }

  getFichesInfo() {
    this.agriSrv.getfichesInfo().subscribe((data: any) => {
      this.infos = data;
      console.log("info",this.infos);


      this.infotrie = this.infos
        .map((item) => item.IC1)
        .filter((value, index, self) => self.indexOf(value) === index);
    });
  }

  uMB_an;
  Taux_de_Presence_Rendement_par_ha;
  quantite;
  description;

  sum_of_Animal_TMB = 0;
  sum_of_vegTable_TMB = 0;
  sum_of_Autre_TMB = 0;
  TOTAL_TMB = 0;

  sum_of_Animal_TMS = 0;
  sum_of_vegTable_TMS = 0;
  sum_of_Autre_TMS = 0;
  TOTAL_TMS = 0;
  //
  sum_of_Animal_NM3 = 0;
  sum_of_vegTable_NM3 = 0;
  sum_of_Autre_NM3 = 0;
  TOTAL_NM3 = 0;
  MS;
  volume_Nm3_CH4_an;
  Nm3_CH4_an;
  KWe_h;
  somme_KWH;
  Effluent_Delevage;
  res2;
  val;
  valuesaveContent;
  resetForm() {
    this.form.reset();
  }
  formValue
  arrayForm=[]
  saveContent(value) {
    console.log("val val saveContent",value);



    let v = value;
    this.valuesaveContent = value;
    console.log("valuesaveContent", this.valuesaveContent);

    v.unite = this.infotrie5.unite;
    this.Effluent_Delevage = v.Effluent_Delevage =

      this.infotrie5.Effluent_Delevage;
    this.Taux_de_Presence_Rendement_par_ha =
      v.Taux_de_Presence_Rendement_par_ha =
        this.infotrie5.Taux_de_Presence_Rendement_par_ha;
    this.uMB_an = v.uMB_an = this.infotrie5.uMB_an;
    v.Unitee = this.infotrie5.Unitee;
    v.Type = this.infotrie5.Type;

    this.MS = v.MS = this.infotrie5.MS;

    console.log("aaaa", this.infofilter);
    // this.t_MB = v.t_MB;
    // this.t_MS = v.t_MS;

    this.MO_MS = v.MO_MS = this.infotrie5.MO_MS;
    this.quantite = v.quantite;

    this.description=v.description;
    v.Nm3_CH4_t_MO = this.infotrie5.Nm3_CH4_t_MO;
    v.CH4percentMS = this.infotrie5.CH4percentMS;
    v.u_P2O5_t = this.infotrie5.u_P2O5_t;
    v.u_K2O_t = this.infotrie5.u_K2O_t;
    v.u_N_t = this.infotrie5.u_N_t;

    v.Commentaire = this.infotrie5.Commentaire;

    this.base_prix = v.base_prix;
    console.log("basePris", v.base_prix);

    //  this.infotrie3=this.listenIc2(this.infotrie2)
    //  this.infotrie5=this.listenDesc(this.infotrie3)

    this.prod = this.produit(
      +v.uMB_an.replace(",", "."),
      +v.quantite,
      +v.Taux_de_Presence_Rendement_par_ha.replace("%", "") / 100
    );

    //  v.Commentaire=this.prod
    this.t_MB_an = this.prod.toFixed(2);
    console.log("tmb", v.t_MB_an);

    this.prod1 = this.produit2(
      +v.t_MB_an,
      +v.MS.replace(",", ".").replace("%", "") / 100
    );


    this.t_MS_an = v.t_MS_an = this.prod1.toFixed(2);
    // console.log("Prod1", this.prod1);
    this.prod2 = this.produit3(
      +v.Nm3_CH4_t_MO,
      +v.MO_MS.replace(",", ".").replace("%", "") / 100,
      +v.MS.replace(",", ".").replace("%", "") / 100,
      +v.t_MB_an
    );

    this.Nm3_CH4_an = v.Nm3_CH4_an = this.prod2.toFixed(2);

    this.KWe_h=this.produit(
      +v.Nm3_CH4_an,
      10.8,0.4
    );
    console.log("kkkkkkkkkk",this.KWe_h);

    this.KWe_h=v.KWe_h=this.KWe_h.toFixed(2);
    // console.log("Prod2", this.prod2);
    this.prod3 = this.produit2(+v.t_MB_an, +v.u_N_t.replace(",", "."));

    v.N = this.prod3.toFixed(2);

    //P
    this.prod4 = this.produit2(+v.t_MB_an, +v.u_P2O5_t.replace(",", "."));

    v.P = this.prod4.toFixed(2);
    //K
    this.prod5 = this.produit2(+v.t_MB_an, +v.u_K2O_t.replace(",", "."));

    v.K = this.prod5.toFixed(2);
    console.log("v", v);
    // let body = {
    //   Description: v.Description,

    //   MS: v.MS,
    //   Taux_de_Presence_Rendement_par_ha: v.Taux_de_Presence_Rendement_par_ha,
    //   effluent_elevage: v.effluent_elevage,
    //   uMB_an: v.uMB_an,
    //   MO_MS: v.MO_MS,

    //   Nm3_CH4_t_MO: v.Nm3_CH4_t_MO,
    // };
    // console.log("body", body);

    this.newFiche.push(v);
    this.form.reset()


    this.volume_Nm3_CH4_an = this.newFiche
      .filter((x) => x.Nm3_CH4_an)
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.Nm3_CH4_an),
        0
      );

    console.log("voluùe", this.volume_Nm3_CH4_an);
//somme kwh
this.somme_KWH = this.newFiche
.filter((x) => x.KWe_h)
.reduce(
  (accumulator, current) => accumulator + parseFloat(current.KWe_h),
  0
);

console.log("som_KWH", this.somme_KWH);
//somme MS
this.somme_MS = this.newFiche
      .filter((x) => x.t_MS_an)
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.t_MS_an),
        0
      );

    console.log("somme_MB", this.somme_MS);
    //Somme MB
    this.somme_MB = this.newFiche
      .filter((x) => x.t_MB_an)
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.t_MB_an),
        0
      );

    console.log("somme_MB", this.somme_MB);



    this.debit_horaire_Nm3_CH4_an = this.quotion(
      this.volume_Nm3_CH4_an,
      this.tt_heure_annee
    ).toFixed(2);

    console.log("debit", this.debit_horaire_Nm3_CH4_an);

    this.debit_horaire_injecte_Nm3_CH4_an = this.produit2(
      this.debit_horaire_Nm3_CH4_an,
      0.92
    ).toFixed(2);

    this.scenarioEmetteur.emit( this.debit_horaire_injecte_Nm3_CH4_an)
    console.log("debit555", this.debit_horaire_injecte_Nm3_CH4_an);
    this.Taux_interet_annuel = this.ERIBOR + 0.0215;
    console.log("Taux_interet_annuel", this.Taux_interet_annuel);

    this.s_tt_KWH_h = this.produit2(
      this.debit_horaire_injecte_Nm3_CH4_an,
      this.pvoir_calorfiq_sup_CH4
    );
    console.log("s_tt_KWH_h", this.s_tt_KWH_h);
    this.enrg_KWH_an = this.produit2(
      this.s_tt_KWH_h,
      this.heure_fonction
    ).toFixed(2);
    console.log("enrg_KWH_an", this.enrg_KWH_an);
    this.enrg_MWH_an = this.quotion(this.enrg_KWH_an, 1000).toFixed(2);
    console.log("enrg_MWH_an", this.enrg_MWH_an);
    this.enrg_GWH_an = this.quotion(this.enrg_MWH_an, 1000).toFixed(2);
    console.log("enrg_MWH_an", this.enrg_GWH_an);

    this.Tarif_debut_contrat2 = this.quotion(this.Tarif_debut_contrat1, 100);

    this.Recette_vente_biomethane = this.produit2(
      this.Tarif_debut_contrat2,
      this.s_tt_KWH_h
    );

    this.sum_of_Animal_TMB = this.newFiche
      .filter((x) => x.IC1 == "1.Animal")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.t_MB_an),
        0
      );

    // var res = this.sum_of_Animal_TMB.toFixed(2);
    console.log("sum", this.sum_of_Animal_TMB);
    //bloc Digestat Calcul
    let p = this.produit2(12, this.Mois_fumiere);
    if (this.Densite_Fumier != 0 && p != 0 && this.hauteur_Fumier != 0) {
      let q = this.quotion(this.sum_of_Animal_TMB, this.Densite_Fumier);

      let q1 = this.quotion(q, p);
      this.tas_ensilage_Fumier = this.quotion(q1, this.hauteur_Fumier).toFixed(
        2
      );
    }
    //Calcul de tas_ensilage_Silo
    let x1 = this.produit2(12, this.mois_Silo);
    if (this.Densite_Silo != 0 && x1 != 0 && this.hauteur_Silo != 0) {
      let q = this.quotion(this.sum_of_Animal_TMB, this.Densite_Silo);

      let q1 = this.quotion(q, x1);
      this.tas_ensilage_Silo = this.quotion(q1, this.hauteur_Silo).toFixed(2);
    }
    //Calcul de recup_eaux_uses_Fumier
    let p2 = this.produit2(
      parseFloat(this.tas_ensilage_Fumier),
      parseFloat(this.pluviometre)
    );

    let p3 = 1 - this.evaporation / 100;

    this.recup_eaux_uses_Fumier = this.produit2(p2, p3);

    //Calcul recup_eaux_uses_Silo
    let p4 = this.produit2(
      parseFloat(this.tas_ensilage_Silo),
      parseFloat(this.pluviometre)
    );
    this.recup_eaux_uses_Silo = this.produit2(p4, p3);
    //Calcul de total eaux usées

    this.total_eaux_uses =
      this.recup_eaux_uses_Fumier + this.recup_eaux_uses_Silo;
    console.log("this.total_eaux_uses ", this.total_eaux_uses);

    this.sum_of_vegTable_TMB = this.newFiche
      .filter((x) => x.IC1 == "2.Vegetal")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.t_MB_an),
        0
      );

    this.sum_of_Autre_TMB = this.newFiche
      .filter((x) => x.IC1 == "3.Autres")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.t_MB_an),
        0
      );

    this.TOTAL_TMB =
      this.sum_of_Animal_TMB + this.sum_of_Autre_TMB + this.sum_of_vegTable_TMB;

    this.res2 = Number(this.TOTAL_TMB).toFixed(2);

    console.log("ressss", this.res2);

    this.sum_of_Animal_TMS = this.newFiche
      .filter((x) => x.IC1 == "1.Animal")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.t_MS_an),
        0
      );

    this.sum_of_vegTable_TMS = this.newFiche
      .filter((x) => x.IC1 == "2.Vegetal")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.t_MS_an),
        0
      );

    this.sum_of_Autre_TMS = this.newFiche
      .filter((x) => x.IC1 == "3.Autres")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.t_MS_an),
        0
      );

    this.TOTAL_TMS =
      this.sum_of_Animal_TMS + this.sum_of_Autre_TMS + this.sum_of_vegTable_TMS;
    this.res3 = Number(this.TOTAL_TMS).toFixed(2);

    //
    this.sum_of_Animal_NM3 = this.newFiche
      .filter((x) => x.IC1 == "1.Animal")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.Nm3_CH4_an),
        0
      );

    this.sum_of_vegTable_NM3 = this.newFiche
      .filter((x) => x.IC1 == "2.Vegetal")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.Nm3_CH4_an),
        0
      );

    this.sum_of_Autre_NM3 = this.newFiche
      .filter((x) => x.IC1 == "3.Autres")
      .reduce(
        (accumulator, current) => accumulator + parseFloat(current.Nm3_CH4_an),
        0
      );

    this.TOTAL_NM3 =
      this.sum_of_Animal_NM3 + this.sum_of_vegTable_NM3 + this.sum_of_Autre_NM3;
    this.res4 = Number(this.TOTAL_NM3).toFixed(2);
    //Division
    console.log("v.t_MB_an", parseFloat(v.t_MB_an));
    console.log("this.TOTAL_TMB", this.res2);

    this.division = this.quotion(v.t_MB_an, this.res2);
    console.log("this.division", this.division);
    v.ration = this.division;
    //calcule de N

    // this.sum_of_Animal_TMB != 0 &&

    this.sum1 =
      this.sum_of_Animal_TMB +
      this.sum_of_vegTable_TMB +
      this.total_eaux_uses +
      this.sum_of_Autre_TMB;
    this.sum2 =
      this.sum_of_Animal_TMS +
      this.sum_of_vegTable_TMS +
      this.f11 +
      this.sum_of_Autre_TMS;
    if (this.sum1 != 0) this.sum3 = this.quotion(this.sum2, this.sum1);
    else {
      this.sum3 = 0;
    }
    this.digistat_brut = this.produit2(0.9, this.sum1);
    this.digistat_liquide = this.produit2(0.8, this.digistat_brut);
    this.digistat_solide = this.produit2(0.2, this.digistat_brut);
    console.log("eventType", this.eventType);

    if (this.eventType === "2.Vegetal") {
      this.Terrain_culture_dedie = this.newFiche
        .filter((x) => x.quantite && x.IC1 == "2.Vegetal")
        .reduce(
          (accumulator, current) => accumulator + parseFloat(current.quantite),
          0
        );
      console.log("Terrain_culture_dedie", this.Terrain_culture_dedie);
    } else {
      this.Terrain_culture_dedie = 0;
    }

    this.digistat_liquide_requis = this.produit2(
      this.Quantite_fraction_liquide,
      this.Terrain_culture_dedie + this.autre_terrain
    );
    this.digistat_solide_requis = this.produit2(
      this.Quantite_fraction_solide,
      this.Terrain_culture_dedie + this.autre_terrain
    );
    this.digistat_liquide_exedent =
      this.digistat_liquide - this.digistat_liquide_requis;
    this.digistat_solide_exedent =
      this.digistat_solide - this.digistat_solide_requis;

    //F16
    if (
      this.sum_of_Autre_TMB != 0 &&
      this.sum_of_vegTable_TMB != 0 &&
      this.sum_of_Animal_TMB != 0
    ) {
      this.f16 = this.quotion(this.sum_of_Autre_TMS, this.sum_of_Autre_TMB);

      this.F14 = this.quotion(
        this.sum_of_vegTable_TMS,
        this.sum_of_vegTable_TMB
      );
      this.f13 = this.quotion(this.sum_of_Animal_TMS, this.sum_of_Animal_TMB);
    } else {
      this.f16 = 0;
      this.F14 = 0;
      this.f13 = 0;
    }

    this.infotrie2 = this.listenIc1(this.infotrie);
    v.volume_Nm3_CH4_an=this.volume_Nm3_CH4_an;
    v.somme_MB=this.somme_MB;
    v.somme_MS=this.somme_MS;
    v.somme_KWH=this.somme_KWH;

    this.formValue=v
    this.arrayForm.push(this.formValue)
    console.log("arrrrrrrayFORM",this.arrayForm);
  }
  addFiche() {
    console.log("val val",this.formValue);

    this.arrayForm.map(x=>{

      this.agriSrv.addFicheClient(x).subscribe((data: any) => {

        // if (data) this.toastr.success("ajouter avec succés");
        console.log("data072",data );
       // this.form.reset();
      },
      (err) => {
        let msg = "verifier les champs saisie";
        // this.toastr.warning(err.error.msgsrv);
        this.toastr.warning(msg);
      }
      );
    })


      }



  delete(c) {


      let index=this.newFiche.indexOf(c)
      if(index!==-1){
        this.newFiche.splice(index,1)
      }

      console.log("contentBeforeDelete",this.newFiche);

  }
  editDomain(){
    this.isVisible = true;
  }
  //   $scope.getTotal = function(){
  //     var total = 0;
  //     for(var i = 0; i < $scope.cart.products.length; i++){
  //         var product = $scope.cart.products[i];
  //         total += (product.price * product.quantity);
  //     }
  //     return total;
  // }

  // function() {
  //   this.newFiche.map((x) => {
  //     console.log("xxxxMAAAAAP,,", x);

  //     if (this.eventType == "1.Animal") {
  //       let S1 = 0;
  //       console.log("v.t_MB_an 1.Animal", x.t_MB_an);
  //       S1 += x.t_MB_an;
  //       console.log("S&&&&&&&&&&", S1);

  //       x.S_tt_exp_I = S1;
  //     }
  //     //  if (this.eventType=='2.Vegetal')
  //     // {let S2=0;
  //     //   console.log("v.t_MB_an 2.Vegetal",x.t_MB_an);
  //     //   S2+=x.t_MB_an
  //     // console.log("S1 2.Vegetal",S2);
  //     // x.S_tt_exp_II=S2

  //     // }
  //   });
  // }

  produit(x, y, z) {
    return x * y * z;
  }
  produit2(x, y) {
    return x * y;
  }
  quotion(x, y) {
    return x / y;
  }
  substraction(a, b) {
    return a - b;
  }
  saveAllFiche() {
    //this.srv.saveAll(this.newFiche).sub(data)
  }
  t_MB;
  t_MS;
  prix_intrants_MB;
  prix_intrants_MS;

  formule(value) {
    console.log("valueeee", value);

    console.log("this.base_prix", this.base_prix);
    console.log("this.prix", this.prix);

    if (this.prix && this.base_prix === "MB") {
      this.t_MB = this.prix;
      console.log("x", this.t_MB);
      console.log("tms", typeof this.t_MS);
      console.log("this.MSSSSSS", this.infotrie5.MS);

      this.t_MS = this.produit2(
        parseFloat(this.t_MB),
        parseFloat(this.infotrie5.MS)
      );

      console.log("x", this.t_MS);
      this.prix_intrants_MS = this.produit2(this.t_MS, this.t_MS_an);

      this.prix_intrants_MB = this.produit2(this.t_MB, this.t_MB_an);
    }
    if (this.prix && this.base_prix === "MS") {
      console.log("MS", typeof this.MS);
      console.log("Prix", typeof this.prix);

      this.t_MB = this.produit2(
        parseFloat(this.prix),
        parseFloat(this.infotrie5.MS)
      );
      this.prix_intrants_MB = this.produit2(this.t_MB, this.t_MB_an);

      this.t_MS = this.prix;
      console.log("x", this.t_MB, this.t_MS);
      this.prix_intrants_MS = this.produit2(this.t_MS, this.t_MS_an);
    }
  }
  scenariFp(value) {
    console.log("valueofscenariFp", value);
    console.log("fb", this.Financement_Fonds_Propres);
    console.log("aaaaa");
    if (value && value === "non") {
      console.log("aaaaa");

      this.Pourcentage_FP_Financer = 0;
      console.log("Pourcentage_FP_Financer", this.Pourcentage_FP_Financer);
    } else {
      this.Pourcentage_FP_Financer = "";
    }
  }
  scenariDigestat(value) {
    console.log("valueofscenariFp", value);
    console.log("fb", this.vente_digestat);

    if (value === "non") {
      this.Prix_digestat_Liquide = 0;
      this.Prix_digestat_Solide = 0;
    } else {
      this.Prix_digestat_Liquide = "3.5£";
      this.Prix_digestat_Solide = "6£";
    }
  }
  openModal = false;
  popAlert() {
    Swal.fire({
      title: "voulez vous valider la création d’un nouvel intrant ?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "oui, valider!",
      cancelButtonText: "Non, abondonner",
    }).then((result) => {
      if (result.value) {
        $("#change_password").modal("show");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        $("#change_password").modal("hide");
        Swal.fire("Anuuler", "Votre modification est annulé :)", "error");
      }
    });
  }
  produit3(x, y, z, t) {
    return x * y * z * t;
  }
  msg = "";
  readFormModal(value, abc) {
    console.log("abc", abc);
    this.valuesaveContent = abc;
    const a = this.infos.find((x) => x.Description == value.Description);
    if (a != undefined) {
      this.msg = "Description biblio existe déja ";
    } else {
      // this.infos.push();
      console.log("valuesaveContent", this.valuesaveContent);
      this.valuesaveContent.Description = value.Description;

      this.valuesaveContent.MS = value.MS;
      this.valuesaveContent.Taux_de_Presence_Rendement_par_ha =
        value.Taux_de_Presence_Rendement_par_ha;
      this.valuesaveContent.effluent_elevage = value.effluent_elevage;
      this.valuesaveContent.uMB_an = value.uMB_an;
      this.valuesaveContent.MO_MS = value.MO_MS;

      this.valuesaveContent.Nm3_CH4_t_MO = value.Nm3_CH4_t_MO;
      console.log("this.valueSave", this.valuesaveContent);
      // this.newFiche.push(this.valuesaveContent);
      this.agriSrv.addFicheClient(this.valuesaveContent).subscribe(
        (data: any) => {
          if (data) this.toastr.success("ajouter avec succés");
          console.log("data error", data.msgsrv);
          this.resetForm();
        },
        (err) => {
          let msg = "verifier les champs saisie";
          // this.toastr.warning(err.error.msgsrv);
          this.toastr.warning(msg);
        }
      );

      $("#change_password").modal("hide");
    }
  }



  //somme total de sous_traitance
  // sommePrixDeVente_140(){
  //   return this.chantier_sum_Sous_Total_Prix_vente_Concep()+this.methanisation_sum_Sous_Total_Prix_vente_Concep()
  //   +this.Valorisation_sum_Sous_Total_Prix_vente_Concep()
  //   +this.Terrassement_sum_Sous_Total_Prix_vente_Concep()+
  //   this.Genie_sum_Sous_Total_Prix_vente_Concep()
  //   +this.supports_Marketing_sum_Sous_Total_Prix_vente_Concep()
  //   +this.acceptabilite_locale_sum_Sous_Total_Prix_vente_Concep()
  //   +this.realisation_de_l_ingenierie_sum_Sous_Total_Prix_vente_Concep()
  //   +this.urbanisme_exploitation_sum_Sous_Total_Prix_vente_Concep()
  //   +this.subvention_sum_Sous_Total_Prix_vente_Concep()
  //   +this.negociations_sum_Sous_Total_Prix_vente_Concep()

  // }

  // sommeSS_Traitance_140(){
  // return this.Tab_140.Sous_Total_Conception=
  // this.Tab_140.Ouverture_chantier.Sous_Total_Conception
  // +this.Tab_140.Lot_1_Process_methanisation.Sous_Total_Conception
  // +this.Tab_140.Lot_2_Valorisation.Sous_Total_Conception
  // +this.Tab_140.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Conception
  // +this.Tab_140.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Conception
  // +this.Tab_140.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Conception
  // +this.Tab_140.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Conception
  // +this.Tab_140.Maitrise_oevre.Sous_Total_Conception
  // +this.Tab_140.Assistance_maitrise_ouvrage.Sous_Total_Conception
  // +this.Tab_140.Materiel.Sous_Total_Conception

  // }

  _openPopUp: boolean = false;
  openPopUp() {
    this._openPopUp = true;
  }

  closePopUp() {
    this._openPopUp = false;
  }









}
