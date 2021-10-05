import { Component, OnInit } from "@angular/core";
import { AgriService } from "../services/agri.service";

@Component({
  selector: "app-donnes-construction",
  templateUrl: "./donnes-construction.component.html",
  styleUrls: ["./donnes-construction.component.css"],
})
export class DonnesConstructionComponent implements OnInit {
  conceptions;
  id;
  constructor(private agriSrv: AgriService) {}

  ngOnInit() {
    this.id = "6143111c334f7f25883b8b4f";
    this.getDataConstruction();

    console.log("id", this.id);
  }


  isNanFunction(val) {
    return isNaN(val) ? 0 : parseFloat(val);
  }
  readFromUserElseFromBase(redByUser, redFromBase) {
    return redByUser ? this.isNanFunction(redByUser) : this.isNanFunction(redFromBase);
  }

  isNullOrVideGetFromBase(val, valueFromBase) {
    if (val == null || val == "") return this.isNanFunction(valueFromBase);

    return this.readFromUserElseFromBase(val, valueFromBase);
  }
  //afficher data conception from database

  getDataConstruction() {
    this.agriSrv.getDataConstruction().subscribe((data) => {
      this.conceptions = data;
      // this.id = this.conceptions[0]._id;
      console.log("data-conceptions", data);
    });
  }

  //1----- Interet_porteur_projet
  Interet_porteur_projet: any = {
    Etude_preleminaire_biomasse: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Rapport_prefaisabilite: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Impact_economique_exploitant: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Bilan_agronomique_sols: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Apres_Avis_favorable_Creation_SPV: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };
  totaux_SS_traitance_Total;
  totaux_marge_Total;
  totaux_prixVente_Total;
  // sommeDeMarge() {
  //  return this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
  //     this.produit2(
  //       parseFloat(
  //         this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance
  //       ),
  //       parseFloat(
  //         this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent.replace(
  //           "%",
  //           ""
  //         )
  //       ) / 100
  //     ) +
  //     parseFloat(
  //       this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro
  //     );
  // }



  sommeDeMarge() {

    let ssTraitance =
    (this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance
      ));



    let margePercent =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro,
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .marge_euro
        ));

        this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
        this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
        return this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale;
  }

  somme_privVente() {
    let ssTraitance =
    (this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .SS_Traitance
      ));

  var marge_totale =
    (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .marge_totale
      ));

  this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep =
    ssTraitance + marge_totale;

  return this.Interet_porteur_projet.Etude_preleminaire_biomasse
    .Prix_vente_Concep;

  }


  sommeDeMarge2() {
    let ssTraitance =
    (this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance
      ));



    let margePercent =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.marge_percent,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Rapport_prefaisabilite.marge_euro,
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .marge_euro
        ));

        this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale =
        this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
        return this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale;
  }
  somme_privVente2() {

    let ssTraitance =
    (this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
          .SS_Traitance
      ));

  var marge_totale =
    (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
          .marge_totale
      ));

  this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep =
    ssTraitance + marge_totale;

  return this.Interet_porteur_projet.Rapport_prefaisabilite
    .Prix_vente_Concep;
  }

  sommeDeMarge3() {

    let ssTraitance =
    (this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance
      ));



    let margePercent =
      (this.Interet_porteur_projet.Impact_economique_exploitant.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant.marge_percent,
          this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
            .marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Impact_economique_exploitant.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Impact_economique_exploitant.marge_euro,
          this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
            .marge_euro
        ));

        this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale =
        this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
        return this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale;




  }

  somme_privVente3() {

    let ssTraitance =
    (this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
          .SS_Traitance
      ));

  var marge_totale =
    (this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
          .marge_totale
      ));

  this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep =
    ssTraitance + marge_totale;

  return this.Interet_porteur_projet.Impact_economique_exploitant
    .Prix_vente_Concep;

  }

  sommeDeMarge4() {
    let ssTraitance =
    (this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance
      ));



    let margePercent =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Bilan_agronomique_sols.marge_percent,
          this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
            .marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Bilan_agronomique_sols.marge_euro,
          this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
            .marge_euro
        ));

        this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale =
        this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
        return this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale;




  }
  somme_privVente4() {

    let ssTraitance =
    (this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
          .SS_Traitance
      ));

  var marge_totale =
    (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
          .marge_totale
      ));

  this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep =
    ssTraitance + marge_totale;

  return this.Interet_porteur_projet.Bilan_agronomique_sols
    .Prix_vente_Concep;


  }
  sommeDeMarge5() {
    let ssTraitance =
    (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance
      ));



    let margePercent =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_percent,
          this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .marge_percent
        ));

    let margeEuro =
      (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_euro,
          this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .marge_euro
        ));

        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale =
        this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
        return this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale;



  }
  somme_privVente5() {

    let ssTraitance =
    (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
          .SS_Traitance
      ));

  var marge_totale =
    (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale =
      this.readFromUserElseFromBase(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
          .marge_totale
      ));

  this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep =
    ssTraitance + marge_totale;

  return this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
    .Prix_vente_Concep;
  }

  someMargeTotaux() {
    let marge_totale_etu_pre_bio =
    (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .marge_totale
      ));

  let marge_totale_rapp_pre =
    (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
          .marge_totale
      ));
  let marge_totale_impact =
    (this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
          .marge_totale
      ));
  let marge_totale_bilanAgro =
    (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.marge_totale
      ));


  let marge_totale_apres_avis_favo=
    (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale,
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale
      ));


  return (this.Interet_porteur_projet.Marge_totaux =
    marge_totale_etu_pre_bio +
    marge_totale_rapp_pre +
    marge_totale_impact +
    marge_totale_bilanAgro +
    marge_totale_apres_avis_favo );


    // else {
    //   return (this.Interet_porteur_projet.Marge_totaux =
    //     this.Interet_porteur_projet.Marge_totaux.toString() + ".00");
    // }
  }

  sommeSoutraitanceTotaux() {
    let SS_Traitance_etu_pre_bio =
    (this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .SS_Traitance
      ));

  let SS_Traitance_rapp_pre =
    (this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
          .SS_Traitance
      ));
  let SS_Traitance_impact =
    (this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
          .SS_Traitance
      ));
  let SS_Traitance_bilanAgro =
    (this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance
      ));


  let SS_Traitance_apres_avis_favo=
    (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance,
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance
      ));


  return (this.Interet_porteur_projet.Sous_Total_Conception =
    SS_Traitance_etu_pre_bio +
    SS_Traitance_rapp_pre +
    SS_Traitance_impact +
    SS_Traitance_bilanAgro +
    SS_Traitance_apres_avis_favo );
  }

  somePrixDeVneteTotaux() {
    let Prix_vente_Concep_etu_pre_bio =
    (this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep,
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .Prix_vente_Concep
      ));

  let Prix_vente_Concep_rapp_pre =
    (this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep,
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
          .Prix_vente_Concep
      ));
  let Prix_vente_Concep_impact =
    (this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep,
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
          .Prix_vente_Concep
      ));
  let Prix_vente_Concep_bilanAgro =
    (this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep,
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep
      ));
  let Prix_vente_Concep_apres_avis_favo=
    (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep,
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep
      ));
  return (this.Interet_porteur_projet.Sous_Total_Prix_vente_Concep =
    Prix_vente_Concep_etu_pre_bio +
    Prix_vente_Concep_rapp_pre +
    Prix_vente_Concep_impact +
    Prix_vente_Concep_bilanAgro +
    Prix_vente_Concep_apres_avis_favo );
  }

  sendInteret(value) {
    let id = this.conceptions[0]._id;
    //concatination
    //let val = value;

    let val = value;

    this.agriSrv.updateDataconceptionByID(id, val).subscribe((data) => {
      this.getDataConstruction();
    });
  }

  /**** TABLEAU 2 */
  Etude_biomasse_projet: any = {
    Cibler_besoins_complementaires_nutritionnels: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Rapport_etude_approfondi_pouvoir_meethanogeene: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Apport_supplementaire_intrants_reseau_ENR_Agri: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Assistance_juridique_Apporteur_substrat_SPV: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };




  margeLigne(x,y){
    if(x && y){
      let ssTraitance =
      (x.SS_Traitance =
        this.isNullOrVideGetFromBase(
          x.SS_Traitance,
          y.SS_Traitance
        ));

        let margePercent =
        (x.marge_percent =
          this.isNullOrVideGetFromBase(
            x.marge_percent,
            y
              .marge_percent
          ));

      let margeEuro =
        (x.marge_euro =
          this.isNullOrVideGetFromBase(
            x.marge_euro,
            y
              .marge_euro
          ));

          x.marge_totale =
          this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
          return x.marge_totale;
    }


  }


  prixdeventeLigne(x,y){
    let ssTraitance =
    (x.SS_Traitance =
      this.readFromUserElseFromBase(
        x.SS_Traitance,
        y
          .SS_Traitance
      ));

  var marge_totale =
    (x.marge_totale =
      this.readFromUserElseFromBase(
        x.marge_totale,
        y
          .marge_totale
      ));

  x.Prix_vente_Concep =
    ssTraitance + marge_totale;

  return x
    .Prix_vente_Concep;
  }

  margeTot(){


  }

  sommeDeMarge_TAB2() {
    return this.margeLigne(this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels,
    this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels )


  }

  somme_privVente_TAB2() {

    this.prixdeventeLigne(this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels,
      this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels)

  }

  sommeDeMarge2TAB2() {

    return this.margeLigne(this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene,this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene)


  }
  somme_privVente2TAB2() {
    return this.prixdeventeLigne(this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene,
    this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene)
  }

  sommeDeMarge3TAB2() {
   return  this.margeLigne(this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri,
      this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri)



  }
  somme_privVente3TAB2() {

     return  this.prixdeventeLigne(this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri,
      this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri )

  }



  sommeDeMarge4TAB2() {
    return this.margeLigne(this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV,this.conceptions[0].Etude_biomasse_projet
    .Assistance_juridique_Apporteur_substrat_SPV)
  }
  somme_privVente4TAB2() {
    return this.prixdeventeLigne(this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV,this.conceptions[0].Etude_biomasse_projet
    .Assistance_juridique_Apporteur_substrat_SPV)
  }

  someMargeTotauxTAB2() {
    let marge_totale_1 =
    (this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.marge_totale,
        this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
          .marge_totale
      ));

  let marge_totale_2 =
    (this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_totale,
        this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
          .marge_totale
      ));
  let marge_totale_impact =
    (this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.marge_totale,
        this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
          .marge_totale
      ));
  let marge_totale_3 =
    (this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.marge_totale,
        this.conceptions[0].Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.marge_totale
      ));




  return (this.Etude_biomasse_projet.Marge_totaux =
    marge_totale_1 +
    marge_totale_2 +
    marge_totale_impact +
    marge_totale_3 );
  }

  sommeSoutraitanceTotauxTAB2() {
    let SS_Traitance_1 =
    (this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.SS_Traitance,
        this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
          .SS_Traitance
      ));

  let SS_Traitance_2 =
    (this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance,
        this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
          .SS_Traitance
      ));
  let SS_Traitance_3 =
    (this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance,
        this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
          .SS_Traitance
      ));
  let SS_Traitance_4 =
    (this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.SS_Traitance,
        this.conceptions[0].Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.SS_Traitance
      ));

  return (this.Etude_biomasse_projet.Sous_Total_Conception =
    SS_Traitance_1 +
    SS_Traitance_2+
    SS_Traitance_3 +
    SS_Traitance_4 );

  }



  somePrixDeVneteTotauxTAB2() {

    let Prix_vente_Concep_1 =
    (this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.Prix_vente_Concep,
        this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
          .Prix_vente_Concep
      ));

  let Prix_vente_Concep_2 =
    (this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.Prix_vente_Concep,
        this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
          .Prix_vente_Concep
      ));
  let Prix_vente_Concep_3 =
    (this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.Prix_vente_Concep,
        this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
          .Prix_vente_Concep
      ));
  let Prix_vente_Concep_4 =
    (this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.Prix_vente_Concep,
        this.conceptions[0].Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.Prix_vente_Concep
      ));

  return (this.Etude_biomasse_projet.Sous_Total_Prix_vente_Concep =
    Prix_vente_Concep_1 +
    Prix_vente_Concep_2+
    Prix_vente_Concep_3 +
    Prix_vente_Concep_4 );
    ;
  }
  //Tab3
  Etude_fonciere_projet: any = {
    Optimisation_emplacement_site: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Releve_topographique: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Rapport_geometre: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Plan_masse: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Analyse_geotechnique_primaire: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Analyse_geotechnique_approfondie: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };

  sommeDeMarge_foncier() {

    return this.margeLigne(this.Etude_fonciere_projet.Optimisation_emplacement_site,this.conceptions[0].Etude_fonciere_projet
      .Optimisation_emplacement_site)

  }
  somme_privVente_foncier() {

   return  this.prixdeventeLigne(this.Etude_fonciere_projet.Optimisation_emplacement_site,this.conceptions[0].Etude_fonciere_projet
      .Optimisation_emplacement_site)
  }

  sommeDeMarge_foncier1() {

    return this.margeLigne(this.Etude_fonciere_projet.Releve_topographique,this.conceptions[0].Etude_fonciere_projet.Releve_topographique)

  }
  somme_privVente_foncier1() {
    return this.prixdeventeLigne(this.Etude_fonciere_projet.Releve_topographique,this.conceptions[0].Etude_fonciere_projet.Releve_topographique)

  }

  sommeDeMarge_foncier2() {
    return this.margeLigne(this.Etude_fonciere_projet.Rapport_geometre,this.conceptions[0].Etude_fonciere_projet.Rapport_geometre)

  }
  somme_privVente_foncier2() {
    return this.prixdeventeLigne(this.Etude_fonciere_projet.Rapport_geometre,this.conceptions[0].Etude_fonciere_projet.Rapport_geometre)

  }

  sommeDeMarge_foncier3() {
    return this.margeLigne(this.Etude_fonciere_projet.Plan_masse,this.conceptions[0].Etude_fonciere_projet.Plan_masse)

  }
  somme_privVente_foncier3() {
   return  this.prixdeventeLigne(this.Etude_fonciere_projet.Plan_masse, this.conceptions[0].Etude_fonciere_projet.Plan_masse)

  }

  sommeDeMarge_foncier4() {
    return this.margeLigne(this.Etude_fonciere_projet.Analyse_geotechnique_primaire,this.conceptions[0].Etude_fonciere_projet
      .Analyse_geotechnique_primaire)

  }
  somme_privVente_foncier4() {
    return this.prixdeventeLigne(this.Etude_fonciere_projet.Analyse_geotechnique_primaire,this.conceptions[0].Etude_fonciere_projet
      .Analyse_geotechnique_primaire)
  }




  sommeDeMarge_foncier5() {

    return this.margeLigne(this.Etude_fonciere_projet.Analyse_geotechnique_primaire,this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire)

    //
  }
  somme_privVente_foncier5() {
    return this.prixdeventeLigne(this.Etude_fonciere_projet.Analyse_geotechnique_primaire,this.conceptions[0].Etude_fonciere_projet
      .Analyse_geotechnique_primaire)

  }



  sommeDeMarge_foncier6() {

    return this.margeLigne(this.Etude_fonciere_projet.Analyse_geotechnique_approfondie,this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie)

    //
  }
  somme_privVente_foncier6() {
    return this.prixdeventeLigne(this.Etude_fonciere_projet.Analyse_geotechnique_approfondie,this.conceptions[0].Etude_fonciere_projet
      .Analyse_geotechnique_approfondie)

  }
  sommeDeMarge_foncier7() {
    return this.margeLigne( this.Etude_fonciere_projet
      .Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV,this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV)

  }
  somme_privVente_foncier7() {
    return this.prixdeventeLigne(this.Etude_fonciere_projet
      .Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV,this.conceptions[0].Etude_fonciere_projet
      .Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV)

  }

  /***************** */
  someMargeTotaux_foncier() {


  let marge_1 =
    (this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_totale,
        this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site
          .marge_totale
      ));
  let marge_2 =
    (this.Etude_fonciere_projet.Releve_topographique.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Etude_fonciere_projet.Releve_topographique.marge_totale,
        this.conceptions[0].Etude_fonciere_projet.Releve_topographique
          .marge_totale
      ));


      let marge_3 =
      (this.Etude_fonciere_projet.Rapport_geometre.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Rapport_geometre.marge_totale,
          this.conceptions[0].Etude_fonciere_projet.Rapport_geometre
            .marge_totale
        ));

    let marge_4 =
      (this.Etude_fonciere_projet.Plan_masse.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Plan_masse.marge_totale,
          this.conceptions[0].Etude_fonciere_projet.Plan_masse
            .marge_totale
        ));
    let marge_5 =
      (this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_totale,
          this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire
            .marge_totale
        ));
    let marge_6 =
      (this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_totale,
          this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_totale
        ));

        let marge_7 =
        (this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_totale =
          this.isNullOrVideGetFromBase(
            this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_totale,
            this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_totale
          ));
  return (this.Etude_fonciere_projet.Marge_totaux =
    marge_1 +
    marge_2 +
    marge_3 +
    marge_4 +marge_5 +marge_6 +marge_7);


  }

  sommeSoutraitanceTotaux_foncier() {


    let marge_1 =
    (this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance,
        this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site
          .SS_Traitance
      ));
  let marge_2 =
    (this.Etude_fonciere_projet.Releve_topographique.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Etude_fonciere_projet.Releve_topographique.SS_Traitance,
        this.conceptions[0].Etude_fonciere_projet.Releve_topographique
          .SS_Traitance
      ));


      let marge_3 =
      (this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance,
          this.conceptions[0].Etude_fonciere_projet.Rapport_geometre
            .SS_Traitance
        ));

    let marge_4 =
      (this.Etude_fonciere_projet.Plan_masse.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Plan_masse.SS_Traitance,
          this.conceptions[0].Etude_fonciere_projet.Plan_masse
            .SS_Traitance
        ));
    let marge_5 =
      (this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance,
          this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire
            .SS_Traitance
        ));
    let marge_6 =
      (this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance,
          this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance
        ));

        let marge_7 =
        (this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance =
          this.isNullOrVideGetFromBase(
            this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance,
            this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance
          ));
  return (this.Etude_fonciere_projet.Sous_Total_Conception =
    marge_1 +
    marge_2 +
    marge_3 +
    marge_4 +marge_5 +marge_6 +marge_7);






  }

  somePrixDeVneteTotaux_foncier() {


    let marge_1 =
    (this.Etude_fonciere_projet.Optimisation_emplacement_site.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Etude_fonciere_projet.Optimisation_emplacement_site.Prix_vente_Concep,
        this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site
          .Prix_vente_Concep
      ));
  let marge_2 =
    (this.Etude_fonciere_projet.Releve_topographique.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Etude_fonciere_projet.Releve_topographique.Prix_vente_Concep,
        this.conceptions[0].Etude_fonciere_projet.Releve_topographique
          .Prix_vente_Concep
      ));


      let marge_3 =
      (this.Etude_fonciere_projet.Rapport_geometre.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Rapport_geometre.Prix_vente_Concep,
          this.conceptions[0].Etude_fonciere_projet.Rapport_geometre
            .Prix_vente_Concep
        ));

    let marge_4 =
      (this.Etude_fonciere_projet.Plan_masse.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Plan_masse.Prix_vente_Concep,
          this.conceptions[0].Etude_fonciere_projet.Plan_masse
            .Prix_vente_Concep
        ));
    let marge_5 =
      (this.Etude_fonciere_projet.Analyse_geotechnique_primaire.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Analyse_geotechnique_primaire.Prix_vente_Concep,
          this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire
            .Prix_vente_Concep
        ));
    let marge_6 =
      (this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.Prix_vente_Concep,
          this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie.Prix_vente_Concep
        ));

        let marge_7 =
        (this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.Prix_vente_Concep =
          this.isNullOrVideGetFromBase(
            this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.Prix_vente_Concep,
            this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.Prix_vente_Concep
          ));
  return (this.Etude_fonciere_projet.Sous_Total_Prix_vente_Concep =
    marge_1 +
    marge_2 +
    marge_3 +
    marge_4 +marge_5 +marge_6 +marge_7);
  }




  //Tab4
  sercurisation_gaziers: any = {
    etude_detaille_reseau_transport__distribution_gaz: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Convention_raccordement_gestionnaire_reseau: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Contrat_vente_biomethane: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };
  sommeDeMarge_gaz1() {
return this.margeLigne(this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz,
  this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz)

  }
  somme_privVente_gaz1() {
    return this.prixdeventeLigne(this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz,
      this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz)

  }

  sommeDeMarge_gaz2() {
    return this.margeLigne(this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau,this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau)
  }
  somme_privVente_gaz2() {
    return this.prixdeventeLigne(this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau,
    this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau)
  }
  sommeDeMarge_gaz3() {

    return this.margeLigne(this.sercurisation_gaziers.Contrat_vente_biomethane,this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane)

  }
  somme_privVente_gaz3() {
    return this.prixdeventeLigne(this.sercurisation_gaziers.Contrat_vente_biomethane,this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane)

  }
  someMargeTotaux_gaz() {


    let marge_1 =
    (this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_totale =
      this.isNullOrVideGetFromBase(
        this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_totale,
        this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz
          .marge_totale
      ));
  let marge_2 =
    (this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_totale =
      this.isNullOrVideGetFromBase(
        this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_totale,
        this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau
          .marge_totale
      ));


      let marge_3 =
      (this.sercurisation_gaziers.Contrat_vente_biomethane.marge_totale =
        this.isNullOrVideGetFromBase(
          this.sercurisation_gaziers.Contrat_vente_biomethane.marge_totale,
          this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane
            .marge_totale
        ));



  return (this.sercurisation_gaziers.Marge_totaux =
    marge_1 +
    marge_2 +
    marge_3);

  }

  sommeSoutraitanceTotaux_gaz() {



    let marge_1 =
    (this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance,
        this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz
          .SS_Traitance
      ));
  let marge_2 =
    (this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance,
        this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau
          .SS_Traitance
      ));


      let marge_3 =
      (this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance,
          this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane
            .SS_Traitance
        ));



  return (this.sercurisation_gaziers.Sous_Total_Conception =
    marge_1 +
    marge_2 +
    marge_3);


  }

  somePrixDeVneteTotaux_gaz() {


    let marge_1 =
    (this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.Prix_vente_Concep,
        this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz
          .Prix_vente_Concep
      ));
  let marge_2 =
    (this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.Prix_vente_Concep,
        this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau
          .Prix_vente_Concep
      ));


      let marge_3 =
      (this.sercurisation_gaziers.Contrat_vente_biomethane.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.sercurisation_gaziers.Contrat_vente_biomethane.Prix_vente_Concep,
          this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane
            .Prix_vente_Concep
        ));



  return (this.sercurisation_gaziers.Sous_Total_Prix_vente_Concep =
    marge_1 +
    marge_2 +
    marge_3);
  }

  //Tab5
  valorisation_digestat: any = {
    etude_qualite_digestat: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Diagnostic_zone_epandable: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Chiffrage_budget_epandage: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Dossier_autorisation_plan_epandage: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Rendez_vous_exploitants_recevront_digestat: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Assistance_juridique_Contrat_epandage_SPV: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };

  sommeDeMarge_val() {
    return this.margeLigne(this.valorisation_digestat.etude_qualite_digestat,this.conceptions[0].valorisation_digestat.etude_qualite_digestat)

  }
  somme_privVente_val() {

    return this.prixdeventeLigne(this.valorisation_digestat.etude_qualite_digestat,this.conceptions[0].valorisation_digestat.etude_qualite_digestat)

  }

  sommeDeMarge_val1() {
    return this.margeLigne(this.valorisation_digestat.Diagnostic_zone_epandable,this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable)

  }
  somme_privVente_val1() {
    return this.prixdeventeLigne(this.valorisation_digestat.Diagnostic_zone_epandable,this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable)
  }

  sommeDeMarge_val2() {

    return  this.margeLigne(this.valorisation_digestat.Chiffrage_budget_epandage,this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage)

  }
  somme_privVente_val2() {
    return this.prixdeventeLigne(this.valorisation_digestat.Chiffrage_budget_epandage,this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage)

  }

  sommeDeMarge_val3() {
    return this.margeLigne(this.valorisation_digestat.Dossier_autorisation_plan_epandage, this.conceptions[0].valorisation_digestat
      .Dossier_autorisation_plan_epandage)

  }
  somme_privVente_val3() {
    return this.prixdeventeLigne(this.valorisation_digestat.Dossier_autorisation_plan_epandage,this.conceptions[0].valorisation_digestat
      .Dossier_autorisation_plan_epandage)

  }

  sommeDeMarge_val4() {
    return this.margeLigne(this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat,this.conceptions[0].valorisation_digestat
      .Rendez_vous_exploitants_recevront_digestat)

  }
  somme_privVente_val4() {
    return  this.prixdeventeLigne(this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat,this.conceptions[0].valorisation_digestat
      .Rendez_vous_exploitants_recevront_digestat)

  }

  sommeDeMarge_val5() {
    return this.margeLigne(this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV,this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV)

  }
  somme_privVente_val5() {
    return this.prixdeventeLigne(this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV,this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV)

  }



  someMargeTotaux_val() {


    let marge_1 =
    (this.valorisation_digestat.etude_qualite_digestat.marge_totale =
      this.isNullOrVideGetFromBase(
        this.valorisation_digestat.etude_qualite_digestat.marge_totale,
        this.conceptions[0].valorisation_digestat.etude_qualite_digestat
          .marge_totale
      ));
  let marge_2 =
    (this.valorisation_digestat.Diagnostic_zone_epandable.marge_totale =
      this.isNullOrVideGetFromBase(
        this.valorisation_digestat.Diagnostic_zone_epandable.marge_totale,
        this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable
          .marge_totale
      ));


      let marge_3 =
      (this.valorisation_digestat.Chiffrage_budget_epandage.marge_totale =
        this.isNullOrVideGetFromBase(
          this.valorisation_digestat.Chiffrage_budget_epandage.marge_totale,
          this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage
            .marge_totale
        ));
        let marge_4 =
        (this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_totale =
          this.isNullOrVideGetFromBase(
            this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_totale,
            this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage
              .marge_totale
          ));
          let marge_5 =
      (this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_totale =
        this.isNullOrVideGetFromBase(
          this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_totale,
          this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
            .marge_totale
        ));

        let marge_6 =
        (this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_totale =
          this.isNullOrVideGetFromBase(
            this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_totale,
            this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
              .marge_totale
          ));


  return (this.valorisation_digestat.Marge_totaux =
    marge_1 +
    marge_2 +
    marge_3+marge_4+marge_5+marge_6);
  }

  sommeSoutraitanceTotaux_val() {


    let marge_1 =
    (this.valorisation_digestat.etude_qualite_digestat.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.valorisation_digestat.etude_qualite_digestat.SS_Traitance,
        this.conceptions[0].valorisation_digestat.etude_qualite_digestat
          .SS_Traitance
      ));
  let marge_2 =
    (this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance,
        this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable
          .SS_Traitance
      ));


      let marge_3 =
      (this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance,
          this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage
            .SS_Traitance
        ));
        let marge_4 =
        (this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance =
          this.isNullOrVideGetFromBase(
            this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance,
            this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage
              .SS_Traitance
          ));
          let marge_5 =
      (this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance,
          this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
            .SS_Traitance
        ));

        let marge_6 =
        (this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance =
          this.isNullOrVideGetFromBase(
            this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance,
            this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
              .SS_Traitance
          ));


  return (this.valorisation_digestat.Sous_Total_Conception =
    marge_1 +
    marge_2 +
    marge_3+marge_4+marge_5+marge_6);


  }

  somePrixDeVneteTotaux_val() {
    let marge_1 =
    (this.valorisation_digestat.etude_qualite_digestat.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.valorisation_digestat.etude_qualite_digestat.Prix_vente_Concep,
        this.conceptions[0].valorisation_digestat.etude_qualite_digestat
          .Prix_vente_Concep
      ));
  let marge_2 =
    (this.valorisation_digestat.Diagnostic_zone_epandable.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.valorisation_digestat.Diagnostic_zone_epandable.Prix_vente_Concep,
        this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable
          .Prix_vente_Concep
      ));


      let marge_3 =
      (this.valorisation_digestat.Chiffrage_budget_epandage.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.valorisation_digestat.Chiffrage_budget_epandage.Prix_vente_Concep,
          this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage
            .Prix_vente_Concep
        ));
        let marge_4 =
        (this.valorisation_digestat.Dossier_autorisation_plan_epandage.Prix_vente_Concep =
          this.isNullOrVideGetFromBase(
            this.valorisation_digestat.Dossier_autorisation_plan_epandage.Prix_vente_Concep,
            this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage
              .Prix_vente_Concep
          ));
          let marge_5 =
      (this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.Prix_vente_Concep,
          this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
            .Prix_vente_Concep
        ));

        let marge_6 =
        (this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.Prix_vente_Concep =
          this.isNullOrVideGetFromBase(
            this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.Prix_vente_Concep,
            this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
              .Prix_vente_Concep
          ));


  return (this.valorisation_digestat.Sous_Total_Prix_vente_Concep =
    marge_1 +
    marge_2 +
    marge_3+marge_4+marge_5+marge_6);
  }
  //TAB6
  Realisation_Marketing: any = {
    Plaquette_presentation: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Realisation_infographie_3D: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Film_animation: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Site_internet: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };

  sommeDeMarge_mark() {
   return this.margeLigne(this.Realisation_Marketing.Plaquette_presentation,this.conceptions[0].Realisation_Marketing.Plaquette_presentation)
  }
  somme_privVente_mark() {
    return this.prixdeventeLigne(this.Realisation_Marketing.Plaquette_presentation,this.conceptions[0].Realisation_Marketing.Plaquette_presentation)

  }

  sommeDeMarge_mark1() {
    return  this.margeLigne(this.Realisation_Marketing.Realisation_infographie_3D,this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D)

  }
  somme_privVente_mark1() {

    return this.prixdeventeLigne(this.Realisation_Marketing.Realisation_infographie_3D,this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D)

  }

  sommeDeMarge_mark2() {

    return this.margeLigne(this.Realisation_Marketing.Film_animation,this.conceptions[0].Realisation_Marketing.Film_animation)

  }
  somme_privVente_mark2() {
    return this.prixdeventeLigne(this.Realisation_Marketing.Film_animation,this.conceptions[0].Realisation_Marketing.Film_animation)

  }

  sommeDeMarge_mark3() {
    return this.margeLigne(this.Realisation_Marketing.Site_internet,this.conceptions[0].Realisation_Marketing.Site_internet)

  }
  somme_privVente_mark3() {
    return this.prixdeventeLigne(this.Realisation_Marketing.Site_internet,this.conceptions[0].Realisation_Marketing.Site_internet)

  }

  someMargeTotaux_mark() {

    let marge_1 =
    (this.Realisation_Marketing.Plaquette_presentation.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Realisation_Marketing.Plaquette_presentation.marge_totale,
        this.conceptions[0].Realisation_Marketing.Plaquette_presentation
          .marge_totale
      ));
  let marge_2 =
    (this.Realisation_Marketing.Realisation_infographie_3D.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Realisation_Marketing.Realisation_infographie_3D.marge_totale,
        this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D
          .marge_totale
      ));


      let marge_3 =
      (this.Realisation_Marketing.Film_animation.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Realisation_Marketing.Film_animation.marge_totale,
          this.conceptions[0].Realisation_Marketing.Film_animation
            .marge_totale
        ));
        let marge_4 =
        (this.Realisation_Marketing.Site_internet.marge_totale =
          this.isNullOrVideGetFromBase(
            this.Realisation_Marketing.Site_internet.marge_totale,
            this.conceptions[0].Realisation_Marketing.Site_internet
              .marge_totale
          ));



  return (this.Realisation_Marketing.Marge_totaux =
    marge_1 +
    marge_2 +
    marge_3+marge_4);
  }

  sommeSoutraitanceTotaux_mark() {
    let marge_1 =
    (this.Realisation_Marketing.Plaquette_presentation.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Realisation_Marketing.Plaquette_presentation.SS_Traitance,
        this.conceptions[0].Realisation_Marketing.Plaquette_presentation
          .SS_Traitance
      ));
  let marge_2 =
    (this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance,
        this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D
          .SS_Traitance
      ));


      let marge_3 =
      (this.Realisation_Marketing.Film_animation.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Realisation_Marketing.Film_animation.SS_Traitance,
          this.conceptions[0].Realisation_Marketing.Film_animation
            .SS_Traitance
        ));
        let marge_4 =
        (this.Realisation_Marketing.Site_internet.SS_Traitance =
          this.isNullOrVideGetFromBase(
            this.Realisation_Marketing.Site_internet.SS_Traitance,
            this.conceptions[0].Realisation_Marketing.Site_internet
              .SS_Traitance
          ));



  return (this.Realisation_Marketing.Sous_Total_Conception =
    marge_1 +
    marge_2 +
    marge_3+marge_4);




  }

  somePrixDeVneteTotaux_mark() {
    let marge_1 =
    (this.Realisation_Marketing.Plaquette_presentation.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Realisation_Marketing.Plaquette_presentation.Prix_vente_Concep,
        this.conceptions[0].Realisation_Marketing.Plaquette_presentation
          .Prix_vente_Concep
      ));
  let marge_2 =
    (this.Realisation_Marketing.Realisation_infographie_3D.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.Realisation_Marketing.Realisation_infographie_3D.Prix_vente_Concep,
        this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D
          .Prix_vente_Concep
      ));


      let marge_3 =
      (this.Realisation_Marketing.Film_animation.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Realisation_Marketing.Film_animation.Prix_vente_Concep,
          this.conceptions[0].Realisation_Marketing.Film_animation
            .Prix_vente_Concep
        ));
        let marge_4 =
        (this.Realisation_Marketing.Site_internet.Prix_vente_Concep =
          this.isNullOrVideGetFromBase(
            this.Realisation_Marketing.Site_internet.Prix_vente_Concep,
            this.conceptions[0].Realisation_Marketing.Site_internet
              .Prix_vente_Concep
          ));



  return (this.Realisation_Marketing.Sous_Total_Prix_vente_Concep =
    marge_1 +
    marge_2 +
    marge_3+marge_4);
  }

  //tab7
  acceptabilite_projet: any = {
    Diagnostic_territorial: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Realisation_plans_action: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Film_aniFormation_riverains_bienfaits_methanisationmation: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Defense_promotion_projet_elus_population_locale: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Reponses_questions_enquete_publiques: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };
  sommeDeMarge_accep() {

    return this.margeLigne(this.acceptabilite_projet.Diagnostic_territorial,this.conceptions[0].acceptabilite_projet.Diagnostic_territorial)

  }
  somme_privVente_accep() {
    return this.prixdeventeLigne(this.acceptabilite_projet.Diagnostic_territorial,this.conceptions[0].acceptabilite_projet.Diagnostic_territorial)

  }

  sommeDeMarge_accep1() {

    return this.margeLigne(this.acceptabilite_projet.Realisation_plans_action,this.conceptions[0].acceptabilite_projet.Realisation_plans_action)

  }
  somme_privVente_accep1() {
    return this.prixdeventeLigne(this.acceptabilite_projet.Realisation_plans_action,this.conceptions[0].acceptabilite_projet.Realisation_plans_action)

  }

  sommeDeMarge_accep2() {
    return this.margeLigne(this.acceptabilite_projet
      .Film_aniFormation_riverains_bienfaits_methanisationmation,this.conceptions[0].acceptabilite_projet
      .Film_aniFormation_riverains_bienfaits_methanisationmation)

  }
  somme_privVente_accep2() {

    return this.prixdeventeLigne( this.acceptabilite_projet
      .Film_aniFormation_riverains_bienfaits_methanisationmation,this.conceptions[0].acceptabilite_projet
      .Film_aniFormation_riverains_bienfaits_methanisationmation)

  }

  sommeDeMarge_accep3() {
    return this.margeLigne(this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale,this.conceptions[0].acceptabilite_projet
      .Defense_promotion_projet_elus_population_locale)

  }
  somme_privVente_accep3() {

    return this.prixdeventeLigne(this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale,this.conceptions[0].acceptabilite_projet
      .Defense_promotion_projet_elus_population_locale)

  }

  sommeDeMarge_accep4() {
    return this.margeLigne(this.acceptabilite_projet.Reponses_questions_enquete_publiques,this.conceptions[0].acceptabilite_projet.Repon)

  }
  somme_privVente_accep4() {
    return  this.prixdeventeLigne(this.acceptabilite_projet.Reponses_questions_enquete_publiques,this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques)

  }

  someMargeTotaux_accep() {
    let marge_1 =
    (this.acceptabilite_projet.Diagnostic_territorial.marge_totale =
      this.isNullOrVideGetFromBase(
        this.acceptabilite_projet.Diagnostic_territorial.marge_totale,
        this.conceptions[0].acceptabilite_projet.Diagnostic_territorial
          .marge_totale
      ));
  let marge_2 =
    (this.acceptabilite_projet.Realisation_plans_action.marge_totale =
      this.isNullOrVideGetFromBase(
        this.acceptabilite_projet.Realisation_plans_action.marge_totale,
        this.conceptions[0].acceptabilite_projet.Realisation_plans_action
          .marge_totale
      ));


      let marge_3 =
      (this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_totale =
        this.isNullOrVideGetFromBase(
          this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_totale,
          this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation
            .marge_totale
        ));
        let marge_4 =
        (this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_totale =
          this.isNullOrVideGetFromBase(
            this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_totale,
            this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale
              .marge_totale
          ));

          let marge_5 =
          (this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_totale =
            this.isNullOrVideGetFromBase(
              this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_totale,
              this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques
                .marge_totale
            ));

  return (this.acceptabilite_projet.Marge_totaux =
    marge_1 +
    marge_2 +
    marge_3+marge_4+marge_5);


  }

  sommeSoutraitanceTotaux_accep() {
    let marge_1 =
    (this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance,
        this.conceptions[0].acceptabilite_projet.Diagnostic_territorial
          .SS_Traitance
      ));
  let marge_2 =
    (this.acceptabilite_projet.Realisation_plans_action.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.acceptabilite_projet.Realisation_plans_action.SS_Traitance,
        this.conceptions[0].acceptabilite_projet.Realisation_plans_action
          .SS_Traitance
      ));


      let marge_3 =
      (this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance,
          this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation
            .SS_Traitance
        ));
        let marge_4 =
        (this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance =
          this.isNullOrVideGetFromBase(
            this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance,
            this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale
              .SS_Traitance
          ));

          let marge_5 =
          (this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance =
            this.isNullOrVideGetFromBase(
              this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance,
              this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques
                .SS_Traitance
            ));

  return (this.acceptabilite_projet.Sous_Total_Conception =
    marge_1 +
    marge_2 +
    marge_3+marge_4+marge_5);




  }

  somePrixDeVneteTotaux_accep() {
    let marge_1 =
    (this.acceptabilite_projet.Diagnostic_territorial.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.acceptabilite_projet.Diagnostic_territorial.Prix_vente_Concep,
        this.conceptions[0].acceptabilite_projet.Diagnostic_territorial
          .Prix_vente_Concep
      ));
  let marge_2 =
    (this.acceptabilite_projet.Realisation_plans_action.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.acceptabilite_projet.Realisation_plans_action.Prix_vente_Concep,
        this.conceptions[0].acceptabilite_projet.Realisation_plans_action
          .Prix_vente_Concep
      ));


      let marge_3 =
      (this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.Prix_vente_Concep,
          this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation
            .Prix_vente_Concep
        ));
        let marge_4 =
        (this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.Prix_vente_Concep =
          this.isNullOrVideGetFromBase(
            this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.Prix_vente_Concep,
            this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale
              .Prix_vente_Concep
          ));

          let marge_5 =
          (this.acceptabilite_projet.Reponses_questions_enquete_publiques.Prix_vente_Concep =
            this.isNullOrVideGetFromBase(
              this.acceptabilite_projet.Reponses_questions_enquete_publiques.Prix_vente_Concep,
              this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques
                .Prix_vente_Concep
            ));

  return (this.acceptabilite_projet.Sous_Total_Prix_vente_Concep =
    marge_1 +
    marge_2 +
    marge_3+marge_4+marge_5);

  }

  //Tab8
  realisation_Projet: any = {
    Dimensionnement_Projet: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    etude_dispersion_odeur_eventuelle: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Proposition_choix_process: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Dossier_consultation_Entreprises: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Contrat_TRC_TRME_Exploitation_negociee: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Business_Plan_detaille: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Contrat_prestataire_Controle_technique: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };


  sommeDeMarge_realisation() {

    return this.margeLigne(this.realisation_Projet.Dimensionnement_Projet,this.conceptions[0].realisation_Projet.Dimensionnement_Projet)

  }
  somme_privVente_realisation() {

    return this.prixdeventeLigne(
      this.realisation_Projet.Dimensionnement_Projet,this.conceptions[0].realisation_Projet.Dimensionnement_Projet)
  }


  sommeDeMarge_realisation1() {

    return this.margeLigne(
      this.realisation_Projet.etude_dispersion_odeur_eventuelle,
      this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle)

  }
  somme_privVente_realisation1() {
    return  this.prixdeventeLigne(
      this.realisation_Projet.etude_dispersion_odeur_eventuelle,
      this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle)

  }

  sommeDeMarge_realisation2() {
    return this.margeLigne(this.realisation_Projet.Proposition_choix_process,this.conceptions[0].realisation_Projet.Proposition_choix_process)

  }
  somme_privVente_realisation2() {
    return this.prixdeventeLigne(this.realisation_Projet.Proposition_choix_process,this.conceptions[0].realisation_Projet.Proposition_choix_process)

  }

  sommeDeMarge_realisation3() {
    return this.margeLigne(this.realisation_Projet.Dossier_consultation_Entreprises,this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises)

  }
  somme_privVente_realisation3() {
    return this.prixdeventeLigne(this.realisation_Projet.Dossier_consultation_Entreprises, this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises)

  }

  sommeDeMarge_realisation4() {
    return this.margeLigne(this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee,
      this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee)

  }
  somme_privVente_realisation4() {
    return this.prixdeventeLigne(this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee,
      this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee)
  }

  sommeDeMarge_realisation5() {

    return this.margeLigne(
      this.realisation_Projet.Business_Plan_detaille,this.conceptions[0].realisation_Projet.Business_Plan_detaille)

    //
  }
  somme_privVente_realisation5() {
    return this.prixdeventeLigne(this.realisation_Projet.Business_Plan_detaille,
      this.conceptions[0].realisation_Projet.Business_Plan_detaille)

  }
  sommeDeMarge_realisation6() {
    return this.margeLigne( this.realisation_Projet.Contrat_prestataire_Controle_technique,this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique)

  }
  somme_privVente_realisation6() {
    return this.prixdeventeLigne(this.realisation_Projet.Contrat_prestataire_Controle_technique,this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique)

  }

  /***************** */
  someMargeTotaux_realisation() {


  let marge_1 =
    (this.realisation_Projet.Dimensionnement_Projet.marge_totale =
      this.isNullOrVideGetFromBase(
        this.realisation_Projet.Dimensionnement_Projet.marge_totale,
        this.conceptions[0].realisation_Projet.Dimensionnement_Projet
          .marge_totale
      ));
  let marge_2 =
    (this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_totale =
      this.isNullOrVideGetFromBase(
        this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_totale,
        this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle
          .marge_totale
      ));


      let marge_3 =
      (this.realisation_Projet.Proposition_choix_process.marge_totale =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Proposition_choix_process.marge_totale,
          this.conceptions[0].realisation_Projet.Proposition_choix_process
            .marge_totale
        ));

    let marge_4 =
      (this.realisation_Projet.Dossier_consultation_Entreprises.marge_totale =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Dossier_consultation_Entreprises.marge_totale,
          this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises
            .marge_totale
        ));
    let marge_5 =
      (this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_totale =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_totale,
          this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
            .marge_totale
        ));
    let marge_6 =
      (this.realisation_Projet.Business_Plan_detaille.marge_totale =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Business_Plan_detaille.marge_totale,
          this.conceptions[0].realisation_Projet.Business_Plan_detaille.marge_totale
        ));

        let marge_7 =
        (this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_totale =
          this.isNullOrVideGetFromBase(
            this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_totale,
            this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique.marge_totale
          ));
  return (this.realisation_Projet.Marge_totaux =
    marge_1 +
    marge_2 +
    marge_3 +
    marge_4 +marge_5 +marge_6 +marge_7);


  }

  sommeSoutraitanceTotaux_realisation() {


    let marge_1 =
    (this.realisation_Projet.Dimensionnement_Projet.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.realisation_Projet.Dimensionnement_Projet.SS_Traitance,
        this.conceptions[0].realisation_Projet.Dimensionnement_Projet
          .SS_Traitance
      ));
  let marge_2 =
    (this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance,
        this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle
          .SS_Traitance
      ));


      let marge_3 =
      (this.realisation_Projet.Proposition_choix_process.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Proposition_choix_process.SS_Traitance,
          this.conceptions[0].realisation_Projet.Proposition_choix_process
            .SS_Traitance
        ));

    let marge_4 =
      (this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance,
          this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises
            .SS_Traitance
        ));
    let marge_5 =
      (this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance,
          this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
            .SS_Traitance
        ));
    let marge_6 =
      (this.realisation_Projet.Business_Plan_detaille.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Business_Plan_detaille.SS_Traitance,
          this.conceptions[0].realisation_Projet.Business_Plan_detaille.SS_Traitance
        ));

        let marge_7 =
        (this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance =
          this.isNullOrVideGetFromBase(
            this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance,
            this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance
          ));
  return (this.realisation_Projet.Sous_Total_Conception =
    marge_1 +
    marge_2 +
    marge_3 +
    marge_4 +marge_5 +marge_6 +marge_7);





  }

  somePrixDeVneteTotaux_realisation() {
    let marge_1 =
    (this.realisation_Projet.Dimensionnement_Projet.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.realisation_Projet.Dimensionnement_Projet.Prix_vente_Concep,
        this.conceptions[0].realisation_Projet.Dimensionnement_Projet
          .Prix_vente_Concep
      ));
  let marge_2 =
    (this.realisation_Projet.etude_dispersion_odeur_eventuelle.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.realisation_Projet.etude_dispersion_odeur_eventuelle.Prix_vente_Concep,
        this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle
          .Prix_vente_Concep
      ));


      let marge_3 =
      (this.realisation_Projet.Proposition_choix_process.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Proposition_choix_process.Prix_vente_Concep,
          this.conceptions[0].realisation_Projet.Proposition_choix_process
            .Prix_vente_Concep
        ));

    let marge_4 =
      (this.realisation_Projet.Dossier_consultation_Entreprises.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Dossier_consultation_Entreprises.Prix_vente_Concep,
          this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises
            .Prix_vente_Concep
        ));
    let marge_5 =
      (this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.Prix_vente_Concep,
          this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
            .Prix_vente_Concep
        ));
    let marge_6 =
      (this.realisation_Projet.Business_Plan_detaille.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.realisation_Projet.Business_Plan_detaille.Prix_vente_Concep,
          this.conceptions[0].realisation_Projet.Business_Plan_detaille.Prix_vente_Concep
        ));

        let marge_7 =
        (this.realisation_Projet.Contrat_prestataire_Controle_technique.Prix_vente_Concep =
          this.isNullOrVideGetFromBase(
            this.realisation_Projet.Contrat_prestataire_Controle_technique.Prix_vente_Concep,
            this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique.Prix_vente_Concep
          ));
  return (this.realisation_Projet.Sous_Total_Prix_vente_Concep =
    marge_1 +
    marge_2 +
    marge_3 +
    marge_4 +marge_5 +marge_6 +marge_7);
  }




  //tab9
  obtention_autorisations_urbanisme_exploitation_Projet: any = {
    Diagnostic_environnemental: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Obtention_agrement_sanitaire: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    etude_loi_eau: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    etude_foudre: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Dossier_ICPE: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Obtention_arret_PC_Passage_huissier: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Rendez_vous_service_instructeur: {
      SS_Traitance: "",
      marge_percent: "",
      marge_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };
  sommeDeMarge_urban() {
    return  this.margeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental)

  }
  somme_privVente_urban() {
    return  this.prixdeventeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental)

  }

  sommeDeMarge_urban1() {

    return this.margeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire)

  }
  somme_privVente_urban1() {
    return  this.prixdeventeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire)

  }

  sommeDeMarge_urban2() {
    return this.margeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau)

  }
  somme_privVente_urban2() {
    return this.prixdeventeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau)

  }

  sommeDeMarge_urban3() {
    return this.margeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre)

  }
  somme_privVente_urban3() {
    return this.prixdeventeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre)

  }

  sommeDeMarge_urban4() {
    return this.margeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE)

  }
  somme_privVente_urban4() {
    return this.prixdeventeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE)

  }

  sommeDeMarge_urban5() {
    return  this.margeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier)

  }
  somme_privVente_urban5() {

    return  this.prixdeventeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier)

  }
  sommeDeMarge_urban6() {

    return this.margeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur)

  }

  somme_privVente_urban6() {
    return this.prixdeventeLigne(this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur)

  }

  someMargeTotaux_urban() {


  let marge_1 =
  (this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_totale =
    this.isNullOrVideGetFromBase(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_totale,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
        .marge_totale
    ));
let marge_2 =
  (this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_totale =
    this.isNullOrVideGetFromBase(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_totale,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire
        .marge_totale
    ));


    let marge_3 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau.marge_totale =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau.marge_totale,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau
          .marge_totale
      ));

  let marge_4 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_totale =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_totale,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre
          .marge_totale
      ));
  let marge_5 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_totale =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_totale,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
          .marge_totale
      ));
  let marge_6 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_totale =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_totale,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_totale
      ));

      let marge_7 =
      (this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_totale =
        this.isNullOrVideGetFromBase(
          this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_totale,
          this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_totale
        ));




return (this.obtention_autorisations_urbanisme_exploitation_Projet.Marge_totaux =
  marge_1 +
  marge_2 +
  marge_3 +
  marge_4 +marge_5 +marge_6 +marge_7);

  }

  sommeSoutraitanceTotaux_urban() {


  let marge_1 =
  (this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance =
    this.isNullOrVideGetFromBase(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
        .SS_Traitance
    ));
let marge_2 =
  (this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance =
    this.isNullOrVideGetFromBase(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire
        .SS_Traitance
    ));


    let marge_3 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau.SS_Traitance,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau
          .SS_Traitance
      ));

  let marge_4 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre
          .SS_Traitance
      ));
  let marge_5 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
          .SS_Traitance
      ));
  let marge_6 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance
      ));

      let marge_7 =
      (this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance,
          this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance
        ));




return (this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Conception =
  marge_1 +
  marge_2 +
  marge_3 +
  marge_4 +marge_5 +marge_6 +marge_7);
  }

  somePrixDeVneteTotaux_urban() {

  let marge_1 =
  (this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.Prix_vente_Concep =
    this.isNullOrVideGetFromBase(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.Prix_vente_Concep,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
        .Prix_vente_Concep
    ));
let marge_2 =
  (this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.Prix_vente_Concep =
    this.isNullOrVideGetFromBase(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.Prix_vente_Concep,
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire
        .Prix_vente_Concep
    ));


    let marge_3 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau.Prix_vente_Concep,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Etude_loi_eau
          .Prix_vente_Concep
      ));

  let marge_4 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.Prix_vente_Concep,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre
          .Prix_vente_Concep
      ));
  let marge_5 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.Prix_vente_Concep,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
          .Prix_vente_Concep
      ));
  let marge_6 =
    (this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.Prix_vente_Concep,
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.Prix_vente_Concep
      ));

      let marge_7 =
      (this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.Prix_vente_Concep,
          this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.Prix_vente_Concep
        ));




return (this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Prix_vente_Concep =
  marge_1 +
  marge_2 +
  marge_3 +
  marge_4 +marge_5 +marge_6 +marge_7);
  }

  /***** TAB 10 */

  obtention_subvention_Projet: any = {
    Reunion_organismes: {
      SS_Traitance: "",
      GP_percent: "",
      GP_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Depot_dossier_subventions: {
      SS_Traitance: "",
      GP_percent: "",
      GP_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },
    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };
  sommeDeMarge_TAB10() {

    return this.margeLigne(this.obtention_subvention_Projet.Reunion_organismes,
      this.conceptions[0].obtention_subvention_Projet.Reunion_organismes)

  }
  somme_privVente_TAB10() {
    return this.prixdeventeLigne(this.obtention_subvention_Projet.Reunion_organismes,
      this.conceptions[0].obtention_subvention_Projet.Reunion_organismes)
  }

  sommeDeMarge_2_TAB10() {
    return this.margeLigne(this.obtention_subvention_Projet.Depot_dossier_subventions,
      this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions)

  }
  somme_privVente_2_TAB10() {

    return this.prixdeventeLigne(this.obtention_subvention_Projet.Depot_dossier_subventions,
      this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions)

  }

  someMargeTotaux_TAB10() {


    let marge_1 =
    (this.obtention_subvention_Projet.Reunion_organismes.marge_totale =
      this.isNullOrVideGetFromBase(
        this.obtention_subvention_Projet.Reunion_organismes.marge_totale,
        this.conceptions[0].obtention_subvention_Projet.Reunion_organismes
          .marge_totale
      ));
  let marge_2 =
    (this.obtention_subvention_Projet.Depot_dossier_subventions.marge_totale =
      this.isNullOrVideGetFromBase(
        this.obtention_subvention_Projet.Depot_dossier_subventions.marge_totale,
        this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions
          .marge_totale
      ));

  return (this.obtention_subvention_Projet.Marge_totaux =
    marge_1 +
    marge_2 );

  }

  sommeSoutraitanceTotaux_TAB10() {


    let marge_1 =
    (this.obtention_subvention_Projet.Reunion_organismes.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.obtention_subvention_Projet.Reunion_organismes.SS_Traitance,
        this.conceptions[0].obtention_subvention_Projet.Reunion_organismes
          .SS_Traitance
      ));
  let marge_2 =
    (this.obtention_subvention_Projet.Depot_dossier_subventions.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.obtention_subvention_Projet.Depot_dossier_subventions.SS_Traitance,
        this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions
          .SS_Traitance
      ));


  return (this.obtention_subvention_Projet.Sous_Total_Conception =
    marge_1 +
    marge_2 );
  }

  somePrixDeVneteTotaux_TAB10() {
    let marge_1 =
    (this.obtention_subvention_Projet.Reunion_organismes.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.obtention_subvention_Projet.Reunion_organismes.Prix_vente_Concep,
        this.conceptions[0].obtention_subvention_Projet.Reunion_organismes
          .Prix_vente_Concep
      ));
  let marge_2 =
    (this.obtention_subvention_Projet.Depot_dossier_subventions.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.obtention_subvention_Projet.Depot_dossier_subventions.Prix_vente_Concep,
        this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions
          .Prix_vente_Concep
      ));


  return (this.obtention_subvention_Projet.Sous_Total_Prix_vente_Concep =
    marge_1 +
    marge_2 );
  }

  /****** TAB 11 */

  obtention_financement_Projet: any = {
    Instruction_dossier_bancaire: {
      SS_Traitance: "",
      GP_percent: "",
      GP_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },

    Suivi_instructions_negociations: {
      SS_Traitance: "",
      GP_percent: "",
      GP_euro: "",
      marge_totale: "",
      Prix_vente_Concep: "",
    },
    Sous_Total_Conception: "",
    Sous_Total_Prix_vente_Concep: "",
    Marge_totaux: "",
  };


  sommeDeMarge_TAB11() {
    return this.margeLigne(this.obtention_financement_Projet.Instruction_dossier_bancaire,
      this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire)

  }
  somme_privVente_TAB11() {
    return this.prixdeventeLigne(this.obtention_financement_Projet.Instruction_dossier_bancaire,
      this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire)

  }

  sommeDeMarge_2_TAB11() {
    return  this.margeLigne(this.obtention_financement_Projet.Suivi_instructions_negociations,
      this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations)

  }
  somme_privVente_2_TAB11() {
    return this.prixdeventeLigne(this.obtention_financement_Projet.Suivi_instructions_negociations,
      this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations)

  }

  someMargeTotaux_TAB11() {


    let marge_1 =
    (this.obtention_financement_Projet.Instruction_dossier_bancaire.marge_totale =
      this.isNullOrVideGetFromBase(
        this.obtention_financement_Projet.Instruction_dossier_bancaire.marge_totale,
        this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire
          .marge_totale
      ));
  let marge_2 =
    (this.obtention_financement_Projet.Suivi_instructions_negociations.marge_totale =
      this.isNullOrVideGetFromBase(
        this.obtention_financement_Projet.Suivi_instructions_negociations.marge_totale,
        this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations
          .marge_totale
      ));
      console.log(marge_1 +
        marge_2)
  return (this.obtention_financement_Projet.Marge_totaux =
    marge_1 +
    marge_2 );


  }

  sommeSoutraitanceTotaux_TAB11() {
    let marge_1 =
    (this.obtention_financement_Projet.Instruction_dossier_bancaire.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.obtention_financement_Projet.Instruction_dossier_bancaire.SS_Traitance,
        this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire
          .SS_Traitance
      ));
  let marge_2 =
    (this.obtention_financement_Projet.Suivi_instructions_negociations.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.obtention_financement_Projet.Suivi_instructions_negociations.SS_Traitance,
        this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations
          .SS_Traitance
      ));


      console.log(marge_1 +
        marge_2)
  return (this.obtention_financement_Projet.Sous_Total_Conception =
    marge_1 +
    marge_2 );
  }

  somePrixDeVneteTotaux_TAB11() {
    let marge_1 =
    (this.obtention_financement_Projet.Instruction_dossier_bancaire.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.obtention_financement_Projet.Instruction_dossier_bancaire.Prix_vente_Concep,
        this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire
          .Prix_vente_Concep
      ));
  let marge_2 =
    (this.obtention_financement_Projet.Suivi_instructions_negociations.Prix_vente_Concep =
      this.isNullOrVideGetFromBase(
        this.obtention_financement_Projet.Suivi_instructions_negociations.Prix_vente_Concep,
        this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations
          .Prix_vente_Concep
      ));
      console.log(marge_1 +
        marge_2)
  return (this.obtention_financement_Projet.Sous_Total_Prix_vente_Concep =
    marge_1 +
    marge_2 );
  }

  // totaux_SS_traitance_Total:"";
  //   totaux_marge_Total:"";
  //   totaux_prixVente_Total:"";
  //TOTALL------------------------------------------------------------------------
  SommeTotal_totaux_SS_Traitance() {
    this.totaux_SS_traitance_Total = 0;
    console.log("rrrrrrrr", this.totaux_SS_traitance_Total);

    return (this.totaux_SS_traitance_Total =
      this.isNanFunction(this.Interet_porteur_projet.Sous_Total_Conception) +
      this.isNanFunction(this.Etude_biomasse_projet.Sous_Total_Conception) +
      this.isNanFunction(this.Etude_fonciere_projet.Sous_Total_Conception) +
      this.isNanFunction(this.sercurisation_gaziers.Sous_Total_Conception) +
      this.isNanFunction(this.valorisation_digestat.Sous_Total_Conception) +
      this.isNanFunction(this.Realisation_Marketing.Sous_Total_Conception) +
      this.isNanFunction(this.acceptabilite_projet.Sous_Total_Conception));

    // this.isNanFunction(this.realisation_Projet.Sous_Total_Conception)+
    // this.isNanFunction(this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Conception)+
    // this.isNanFunction(this.obtention_subvention_Projet.Sous_Total_Conception)+
    // this.isNanFunction(this.obtention_financement_Projet.Sous_Total_Conception)
  }
  SommeTotal_totaux_Prix_Vente_totaux() {
    this.totaux_prixVente_Total = 0;
    return (this.totaux_prixVente_Total =
      this.isNanFunction(
        this.Interet_porteur_projet.Sous_Total_Prix_vente_Concep
      ) +
      this.isNanFunction(
        this.Etude_biomasse_projet.Sous_Total_Prix_vente_Concep
      ) +
      this.isNanFunction(
        this.Etude_fonciere_projet.Sous_Total_Prix_vente_Concep
      ) +
      this.isNanFunction(
        this.sercurisation_gaziers.Sous_Total_Prix_vente_Concep
      ) +
      this.isNanFunction(
        this.valorisation_digestat.Sous_Total_Prix_vente_Concep
      ) +
      this.isNanFunction(
        this.Realisation_Marketing.Sous_Total_Prix_vente_Concep
      ) +
      this.isNanFunction(
        this.acceptabilite_projet.Sous_Total_Prix_vente_Concep
      ));
    //  +
    //  this.isNanFunction(this.realisation_Projet.Sous_Total_Prix_vente_Concep)+
    //  this.isNanFunction(this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Prix_vente_Concep)+
    //  this.isNanFunction(this.obtention_subvention_Projet.Sous_Total_Prix_vente_Concep)+
    //  this.isNanFunction(this.obtention_financement_Projet.Sous_Total_Prix_vente_Concep)
  }
  SommeTotal_totaux_Marge_totaux() {
    this.totaux_marge_Total = 0;
    return (this.totaux_marge_Total =
      this.isNanFunction(this.Interet_porteur_projet.Marge_totaux) +
      this.isNanFunction(this.Etude_biomasse_projet.Marge_totaux) +
      this.isNanFunction(this.Etude_fonciere_projet.Marge_totaux) +
      this.isNanFunction(this.sercurisation_gaziers.Marge_totaux) +
      this.isNanFunction(this.valorisation_digestat.Marge_totaux) +
      this.isNanFunction(this.Realisation_Marketing.Marge_totaux) +
      this.isNanFunction(this.acceptabilite_projet.Marge_totaux));
    //  +
    //  this.isNanFunction(this.realisation_Projet.Marge_totaux)+
    //  this.isNanFunction(this.obtention_autorisations_urbanisme_exploitation_Projet.Marge_totaux)+
    //  this.isNanFunction(this.obtention_subvention_Projet.Marge_totaux)+
    //  this.isNanFunction(this.obtention_financement_Projet.Marge_totaux)
  }

  /******* PRODUIT QUOTAION */
  produit(x, y, z) {
    return x * y * z;
  }
  produit2(x, y) {
    return x * y;
  }
  quotion(x, y) {
    return x / y;
  }
}
