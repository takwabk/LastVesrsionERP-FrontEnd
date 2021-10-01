import { Component, OnInit } from "@angular/core";
import { AgriService } from "src/app/services/agri.service";

@Component({
  selector: "app-injection190",
  templateUrl: "./injection190.component.html",
  styleUrls: ["./injection190.component.css"],
})
export class Injection190Component implements OnInit {
  conceptions;
  id;
  constructor(private agriSrv: AgriService) {}

  ngOnInit() {
    this.id = "61446b2f6c0478445c9082e8";
    this.getDataConstruction();

    console.log("id", this.id);
  }
  sendInteret(value) {
    let id = this. conceptions[1]._id;
    //concatination hehi
    //let val = value;

    let val = value;

    this.agriSrv.updateDataconstructionByID(id, val).subscribe((data) => {
      console.log("data5", data);

      this.getDataConstruction();
    });
  }

  //afficher data conception from database

  getDataConstruction() {
    this.agriSrv.getData().subscribe((data) => {
      this.conceptions = data;
      // this.id = this. conceptions[1]._id;
      console.log("data-conceptions", data);
    });
  }

  //1----- Tab190
  Tab_190: any = {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Frais_dossier: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Conseil_suivi: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Aleas: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      TRCME: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Achat_Terrain: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Frais_notaire: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Cogenerateur: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Hygenisiation: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },
      Semi_remorque_44_t: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Concep: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente: "",
      Marge_totaux: "",
    },
    totaux_SS_traitance_Total_190: "",
    totaux_marge_Total_190: "",
    totaux_prixVente_Total_190: "",
  };


  isNanFunction(val) {
    return isNaN(val) ? 0 : parseFloat(val);
  }

  readFromUserElseFromBase(redByUser, redFromBase) {
    return redByUser ? this.isNanFunction(redByUser) : parseFloat(redFromBase);
  }

  isNullOrVideGetFromBase(val, valueFromBase) {
    if (val == null || val == "") return parseFloat(valueFromBase);

    return this.readFromUserElseFromBase(val, valueFromBase);
  }

  sommeDeMarge_chantier() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .SS_Traitance
        ));

    let margePercent =
      (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_percent,
          this. conceptions[1].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .marge_percent
        ));

    let margeEuro =
      (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_euro,
          this. conceptions[1].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .marge_euro
        ));

    this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    return this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale;
  }
  somme_privVente_chantier() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .SS_Traitance
        ));

    var marge_totale =
      (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .marge_totale
        ));

    this.Tab_190.Ouverture_chantier.Controle_technique_SPS.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.Tab_190.Ouverture_chantier.Controle_technique_SPS
      .Prix_vente_Concep;
  }

  sommeDeMarge_frais() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_dossier
            .SS_Traitance
        ));

    let margePercent =
      (this.Tab_190.Ouverture_chantier.Frais_dossier.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_dossier.marge_percent,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_dossier
            .marge_percent
        ));

    let margeEuro = (this.Tab_190.Ouverture_chantier.Frais_dossier.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.Frais_dossier.marge_euro,
        this. conceptions[1].Tab_190.Ouverture_chantier.Frais_dossier.marge_euro
      ));

    return (this.Tab_190.Ouverture_chantier.Frais_dossier.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro);
  }

  somme_privVente_frais() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_dossier
            .SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Ouverture_chantier.Frais_dossier.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Frais_dossier.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_dossier
            .marge_totale
        ));

    return (this.Tab_190.Ouverture_chantier.Frais_dossier.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  sommeDeMarge_conseil() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Conseil_suivi
            .SS_Traitance
        ));

    let margePercent =
      (this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_percent,
          this. conceptions[1].Tab_190.Ouverture_chantier.Conseil_suivi
            .marge_percent
        ));

    let margeEuro = (this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_euro,
        this. conceptions[1].Tab_190.Ouverture_chantier.Conseil_suivi.marge_euro
      ));

    return (this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro);
  }
  somme_privVente_conseil() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Conseil_suivi
            .SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Conseil_suivi
            .marge_totale
        ));

    return (this.Tab_190.Ouverture_chantier.Conseil_suivi.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }
  sommeDeMarge_aleas() {
    let ssTraitance = (this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance,
        this. conceptions[1].Tab_190.Ouverture_chantier.Aleas.SS_Traitance
      ));

    let margePercent = (this.Tab_190.Ouverture_chantier.Aleas.marge_percent =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.Aleas.marge_percent,
        this. conceptions[1].Tab_190.Ouverture_chantier.Aleas.marge_percent
      ));

    let margeEuro = (this.Tab_190.Ouverture_chantier.Aleas.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.Aleas.marge_euro,
        this. conceptions[1].Tab_190.Ouverture_chantier.Aleas.marge_euro
      ));

    return (this.Tab_190.Ouverture_chantier.Aleas.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro);
  }
  somme_privVente_aleas() {
    let ssTraitance = (this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance,
        this. conceptions[1].Tab_190.Ouverture_chantier.Aleas.SS_Traitance
      ));

    let marge_totale = (this.Tab_190.Ouverture_chantier.Aleas.marge_totale =
      this.readFromUserElseFromBase(
        this.Tab_190.Ouverture_chantier.Aleas.marge_totale,
        this. conceptions[1].Tab_190.Ouverture_chantier.Aleas.marge_totale
      ));

    return (this.Tab_190.Ouverture_chantier.Aleas.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  sommeDeMarge_TRCME() {
    let ssTraitance = (this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance,
        this. conceptions[1].Tab_190.Ouverture_chantier.TRCME.SS_Traitance
      ));

    let margePercent = (this.Tab_190.Ouverture_chantier.TRCME.marge_percent =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.TRCME.marge_percent,
        this. conceptions[1].Tab_190.Ouverture_chantier.TRCME.marge_percent
      ));

    let margeEuro = (this.Tab_190.Ouverture_chantier.TRCME.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.TRCME.marge_euro,
        this. conceptions[1].Tab_190.Ouverture_chantier.TRCME.marge_euro
      ));

    return (this.Tab_190.Ouverture_chantier.TRCME.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro);
  }

  somme_privVente_TRCME() {
    let ssTraitance = (this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance,
        this. conceptions[1].Tab_190.Ouverture_chantier.TRCME.SS_Traitance
      ));

    let marge_totale = (this.Tab_190.Ouverture_chantier.TRCME.marge_totale =
      this.readFromUserElseFromBase(
        this.Tab_190.Ouverture_chantier.TRCME.marge_totale,
        this. conceptions[1].Tab_190.Ouverture_chantier.TRCME.marge_totale
      ));

    return (this.Tab_190.Ouverture_chantier.TRCME.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  sommeDeMarge_achat() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Achat_Terrain
            .SS_Traitance
        ));

    let margePercent =
      (this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_percent,
          this. conceptions[1].Tab_190.Ouverture_chantier.Achat_Terrain
            .marge_percent
        ));

    let margeEuro = (this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_euro,
        this. conceptions[1].Tab_190.Ouverture_chantier.Achat_Terrain.marge_euro
      ));

    return (this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro);
  }
  somme_privVente_achat() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Achat_Terrain
            .SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Achat_Terrain
            .marge_totale
        ));

    return (this.Tab_190.Ouverture_chantier.Achat_Terrain.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  sommeDeMarge_notaire() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_notaire
            .SS_Traitance
        ));

    let margePercent =
      (this.Tab_190.Ouverture_chantier.Frais_notaire.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_notaire.marge_percent,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_notaire
            .marge_percent
        ));

    let margeEuro = (this.Tab_190.Ouverture_chantier.Frais_notaire.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Ouverture_chantier.Frais_notaire.marge_euro,
        this. conceptions[1].Tab_190.Ouverture_chantier.Frais_notaire.marge_euro
      ));

    return (this.Tab_190.Ouverture_chantier.Frais_notaire.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro);
  }
  somme_privVente_notaire() {
    let ssTraitance =
      (this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_notaire
            .SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Ouverture_chantier.Frais_notaire.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Ouverture_chantier.Frais_notaire.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_notaire
            .marge_totale
        ));

    return (this.Tab_190.Ouverture_chantier.Frais_notaire.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }
  someMargeTotaux_TAB1() {
    let marge_totale_CtrTech =
      (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .marge_totale
        ));

    let marge_totale_Frais_dossier =
      (this.Tab_190.Ouverture_chantier.Frais_dossier.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_dossier.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_dossier
            .marge_totale
        ));
    let marge_totale_Conseil_suivi =
      (this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Conseil_suivi
            .marge_totale
        ));
    let marge_totale_Aleas =
      (this.Tab_190.Ouverture_chantier.Aleas.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Aleas.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Aleas.marge_totale
        ));
    let marge_totale_TRCME =
      (this.Tab_190.Ouverture_chantier.TRCME.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.TRCME.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.TRCME.marge_totale
        ));

    let marge_totale_Achat_Terrain =
      (this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Achat_Terrain
            .marge_totale
        ));

    let marge_totale_Frais_notaire =
      (this.Tab_190.Ouverture_chantier.Frais_notaire.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_notaire.marge_totale,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_notaire
            .marge_totale
        ));

    return (this.Tab_190.Ouverture_chantier.Marge_totaux =
      marge_totale_CtrTech +
      marge_totale_Frais_dossier +
      marge_totale_Conseil_suivi +
      marge_totale_Aleas +
      marge_totale_TRCME +
      marge_totale_Achat_Terrain +
      marge_totale_Frais_notaire);
  }
  sommeSoutraitanceTotaux_TAB1() {
    let SS_Traitance_CtrTech =
      (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .SS_Traitance
        ));

    let SS_Traitance_Frais_dossier =
      (this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_dossier
            .SS_Traitance
        ));
    let SS_Traitance_Conseil_suivi =
      (this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Conseil_suivi
            .SS_Traitance
        ));
    let SS_Traitance_Aleas =
      (this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Aleas.SS_Traitance
        ));
    let SS_Traitance_TRCME =
      (this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.TRCME.SS_Traitance
        ));

    let SS_Traitance_Achat_Terrain =
      (this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Achat_Terrain
            .SS_Traitance
        ));

    let SS_Traitance_Frais_notaire =
      (this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_notaire
            .SS_Traitance
        ));

    return (this.Tab_190.Ouverture_chantier.Sous_Total_Construction =
      SS_Traitance_CtrTech +
      SS_Traitance_Frais_dossier +
      SS_Traitance_Conseil_suivi +
      SS_Traitance_Aleas +
      SS_Traitance_TRCME +
      SS_Traitance_Achat_Terrain +
      SS_Traitance_Frais_notaire);
  }
  somePrixDeVneteTotaux_TAB1() {
    let Prix_vente_Concep_CtrTech =
      (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS
            .Prix_vente_Concep,
          this. conceptions[1].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .Prix_vente_Concep
        ));

    let Prix_vente_Concep_Frais_dossier =
      (this.Tab_190.Ouverture_chantier.Frais_dossier.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_dossier.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_dossier
            .Prix_vente_Concep
        ));
    let Prix_vente_Concep_Conseil_suivi =
      (this.Tab_190.Ouverture_chantier.Conseil_suivi.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Ouverture_chantier.Conseil_suivi
            .Prix_vente_Concep
        ));
    let Prix_vente_Concep_Aleas =
      (this.Tab_190.Ouverture_chantier.Aleas.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Aleas.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Ouverture_chantier.Aleas.Prix_vente_Concep
        ));
    let Prix_vente_Concep_TRCME =
      (this.Tab_190.Ouverture_chantier.TRCME.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.TRCME.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Ouverture_chantier.TRCME.Prix_vente_Concep
        ));

    let Prix_vente_Concep_Achat_Terrain =
      (this.Tab_190.Ouverture_chantier.Achat_Terrain.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Ouverture_chantier.Achat_Terrain
            .Prix_vente_Concep
        ));

    let Prix_vente_Concep_Frais_notaire =
      (this.Tab_190.Ouverture_chantier.Frais_notaire.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Ouverture_chantier.Frais_notaire.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Ouverture_chantier.Frais_notaire
            .Prix_vente_Concep
        ));

    return (this.Tab_190.Ouverture_chantier.Sous_Total_Prix_vente =
      Prix_vente_Concep_CtrTech +
      Prix_vente_Concep_Frais_dossier +
      Prix_vente_Concep_Conseil_suivi +
      Prix_vente_Concep_Aleas +
      Prix_vente_Concep_TRCME +
      Prix_vente_Concep_Achat_Terrain +
      Prix_vente_Concep_Frais_notaire);
  }

  //tab2
  sommeDeMarge_TAB2() {
    let ssTraitance =
      (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .SS_Traitance,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.SS_Traitance
        ));
    let marge_euro =
      (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .marge_euro,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_euro
        ));

    let marge_percent =
      (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .marge_percent,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_percent
        ));

    return (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }

  somme_privVente_TAB2() {
    let ssTraitance =
      (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .SS_Traitance,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .marge_totale,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_totale
        ));

    return (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  sommeDeMarge_2TAB2() {
    let ssTraitance =
      (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance
        ));
    let marge_euro =
      (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_euro,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_euro
        ));

    let marge_percent =
      (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_percent,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_percent
        ));

    return (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_2TAB2() {
    let ssTraitance =
      (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_totale,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_totale
        ));

    return (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB2() {
    let marge_totale_proMetha =
      (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .marge_totale,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_totale
        ));

    let marge_totale_pupul1 =
      (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_totale,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_totale
        ));

    return (this.Tab_190.Lot_1_Process_methanisation.Marge_totaux =
      marge_totale_proMetha + marge_totale_pupul1);
  }

  sommeSoutraitanceTotaux_TAB2() {
    let SS_Traitance_proMetha =
      (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .SS_Traitance,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.SS_Traitance
        ));

    let SS_Traitance_pupul1 =
      (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance
        ));

    return (this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Construction =
      SS_Traitance_proMetha + SS_Traitance_pupul1);
  }

  somePrixDeVneteTotaux_TAB2() {
    let Sous_Total_Prix_vente_proMetha =
      (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .Prix_vente_Concep,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.Prix_vente_Concep
        ));

    let Sous_Total_Prix_vente_pupul1 =
      (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.Prix_vente_Concep
        ));

    return (this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Prix_vente =
      Sous_Total_Prix_vente_proMetha + Sous_Total_Prix_vente_pupul1);
  }
  //tab3

  sommeDeMarge_TAB3() {
    let ssTraitance =
      (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .SS_Traitance,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.SS_Traitance
        ));
    let marge_euro =
      (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .marge_euro,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_euro
        ));

    let marge_percent =
      (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        ));

    return (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_TAB3() {
    let ssTraitance =
      (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .SS_Traitance,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .marge_totale,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_totale
        ));

    return (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  sommeDeMarge_2TAB3() {
    let ssTraitance =
      (this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_2_Valorisation.Cogenerateur
            .SS_Traitance
        ));
    let marge_euro = (this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_euro,
        this. conceptions[1].Tab_190.Lot_2_Valorisation.Cogenerateur.marge_euro
      ));

    let marge_percent =
      (this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation.Cogenerateur
            .marge_percent
        ));

    return (this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_2TAB3() {
    let ssTraitance =
      (this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_2_Valorisation.Cogenerateur
            .SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale,
          this. conceptions[1].Tab_190.Lot_2_Valorisation.Cogenerateur
            .marge_totale
        ));

    return (this.Tab_190.Lot_2_Valorisation.Cogenerateur.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB3() {
    let marge_totale_EpuCompChaud =
      (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .marge_totale,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_totale
        ));

    let marge_totale_Cogen =
      (this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale,
          this. conceptions[1].Tab_190.Lot_2_Valorisation.Cogenerateur
            .marge_totale
        ));

    return (this.Tab_190.Lot_2_Valorisation.Marge_totaux =
      marge_totale_EpuCompChaud + marge_totale_Cogen);
  }
  ///////////////////////////////
  sommeSoutraitanceTotaux_TAB3() {
    let SS_Traitance_proMetha =
      (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .SS_Traitance,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.SS_Traitance
        ));

    let SS_Traitance_pupul1 =
      (this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_2_Valorisation.Cogenerateur
            .SS_Traitance
        ));

    return (this.Tab_190.Lot_2_Valorisation.Sous_Total_Construction =
      SS_Traitance_proMetha + SS_Traitance_pupul1);
  }

  somePrixDeVneteTotaux_TAB3() {
    let Sous_Total_Prix_vente_epucc =
      (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .Prix_vente_Concep,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.Prix_vente_Concep
        ));

    let Sous_Total_Prix_vente_cog =
      (this.Tab_190.Lot_2_Valorisation.Cogenerateur.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Lot_2_Valorisation.Cogenerateur
            .Prix_vente_Concep
        ));

    return (this.Tab_190.Lot_2_Valorisation.Sous_Total_Prix_vente =
      Sous_Total_Prix_vente_epucc + Sous_Total_Prix_vente_cog);
  }
  //tab4
  //TAB4
  sommeDeMarge_TAB4() {
    let ssTraitance =
      (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
        ));
    let marge_euro =
      (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_euro,
          this. conceptions[1].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_euro
        ));

    let marge_percent =
      (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        ));

    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_TAB4() {
    let ssTraitance =
      (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale,
          this. conceptions[1].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale
        ));

    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB4() {
    let marge_totale_EpuCompChaud =
      (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale,
          this. conceptions[1].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale
        ));

    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Marge_totaux =
      marge_totale_EpuCompChaud);
  }

  sommeSoutraitanceTotaux_TAB4() {
    let SS_Traitance =
      (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
        ));

    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Construction =
      SS_Traitance);
  }

  somePrixDeVneteTotaux_TAB4() {
    let Sous_Total_Prix_vente =
      (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.Prix_vente_Concep,
          this. conceptions[1].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.Prix_vente_Concep
        ));

    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Prix_vente =
      Sous_Total_Prix_vente);
  }

  //TAB 5

  sommeDeMarge_TAB5() {
    let ssTraitance =
      (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .SS_Traitance
        ));
    let marge_euro =
      (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_euro,
          this. conceptions[1].Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_euro
        ));

    let marge_percent =
      (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        ));

    return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_TAB5() {
    let ssTraitance =
      (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_totale,
          this. conceptions[1].Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_totale
        ));

    return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB5() {
    let marge_totale_EpuCompChaud =
      (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_totale,
          this. conceptions[1].Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_totale
        ));

    return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Marge_totaux =
      marge_totale_EpuCompChaud);
  }

  sommeSoutraitanceTotaux_TAB5() {
    let SS_Traitance =
      (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .SS_Traitance
        ));

    return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Construction =
      SS_Traitance);
  }

  somePrixDeVneteTotaux_TAB5() {
    let Sous_Total_Prix_vente =
      (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Prix_vente_Concep,
          this. conceptions[1].Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Prix_vente_Concep
        ));

    return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Prix_vente =
      Sous_Total_Prix_vente);
  }

  //TAB 6
  sommeDeMarge_TAB6() {
    let ssTraitance =
      (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance
        ));
    let marge_euro =
      (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_euro,
          this. conceptions[1].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_euro
        ));

    let marge_percent =
      (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        ));

    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_TAB6() {
    let ssTraitance =
      (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_totale,
          this. conceptions[1].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_totale
        ));

    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB6() {
    this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Marge_totaux = 0;
    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Marge_totaux =
      this.isNanFunction(
        this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Marge_totaux
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
          .Genie_Civil_ouvrages_peripheriques.marge_totale
      ));
  }

  sommeSoutraitanceTotaux_TAB6() {
    let SS_Traitance =
      (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance
        ));

    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Construction =
      SS_Traitance);
  }

  somePrixDeVneteTotaux_TAB6() {
    this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Prix_vente = 0;
    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Prix_vente =
      this.isNanFunction(
        this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
          .Sous_Total_Prix_vente
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
          .Genie_Civil_ouvrages_peripheriques.Prix_vente_Concep
      ));
  }

  //TAB 7

  sommeDeMarge_TAB7() {
    let ssTraitance =
      (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.SS_Traitance
        ));
    let marge_euro =
      (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.marge_euro,
          this. conceptions[1].Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.marge_euro
        ));

    let marge_percent =
      (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        ));

    return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_TAB7() {
    let ssTraitance =
      (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.marge_totale,
          this. conceptions[1].Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.marge_totale
        ));

    return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB7() {
    this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Marge_totaux = 0;
    return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Marge_totaux =
      this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Marge_totaux
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.marge_totale
      ));
  }

  sommeSoutraitanceTotaux_TAB7() {
    let SS_Traitance =
      (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.SS_Traitance,
          this. conceptions[1].Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.SS_Traitance
        ));

    return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Construction =
      SS_Traitance);
  }

  somePrixDeVneteTotaux_TAB7() {
    let Sous_Total_Prix_vente =
      (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.Prix_vente_Concep
        ));

    return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Prix_vente =
      Sous_Total_Prix_vente);
  }

  //TAB 8
  sommeDeMarge_TAB8() {
    let ssTraitance =
      (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
        ));
    let marge_euro =
      (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.marge_euro,
          this. conceptions[1].Tab_190
            .Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.marge_euro
        ));

    let marge_percent =
      (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        ));

    return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_TAB8() {
    let ssTraitance =
      (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.marge_totale,
          this. conceptions[1].Tab_190
            .Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.marge_totale
        ));

    return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB8() {
    this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Marge_totaux = 0;
    return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Marge_totaux =
      this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Marge_totaux
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.marge_totale
      ));
  }

  sommeSoutraitanceTotaux_TAB8() {
    let SS_Traitance =
      (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance,
          this. conceptions[1].Tab_190
            .Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
        ));

    return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Construction =
      SS_Traitance);
  }

  somePrixDeVneteTotaux_TAB8() {
    let Sous_Total_Prix_vente =
      (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.Prix_vente_Concep,
          this. conceptions[1].Tab_190
            .Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.Prix_vente_Concep
        ));

    return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Prix_vente =
      Sous_Total_Prix_vente);
  }
  //TAB 9
  sommeDeMarge_TAB9() {
    let ssTraitance = (this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance,
        this. conceptions[1].Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance
      ));
    let marge_euro = (this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_euro,
        this. conceptions[1].Tab_190.Maitrise_oevre.Maitrise_oevre.marge_euro
      ));

    let marge_percent =
      (this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        ));

    return (this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_TAB9() {
    let ssTraitance = (this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance,
        this. conceptions[1].Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance
      ));

    let marge_totale =
      (this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale,
          this. conceptions[1].Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale
        ));

    return (this.Tab_190.Maitrise_oevre.Maitrise_oevre.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB9() {
    this.Tab_190.Maitrise_oevre.Marge_totaux = 0;
    return (this.Tab_190.Maitrise_oevre.Marge_totaux =
      this.isNanFunction(this.Tab_190.Maitrise_oevre.Marge_totaux) +
      this.isNanFunction(
        this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale
      ));
  }

  sommeSoutraitanceTotaux_TAB9() {
    let SS_Traitance =
      (this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance,
          this. conceptions[1].Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance
        ));

    return (this.Tab_190.Maitrise_oevre.Sous_Total_Construction = SS_Traitance);
  }

  somePrixDeVneteTotaux_TAB9() {
    let Sous_Total_Prix_vente =
      (this.Tab_190.Maitrise_oevre.Maitrise_oevre.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Maitrise_oevre.Maitrise_oevre.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Maitrise_oevre.Maitrise_oevre
            .Prix_vente_Concep
        ));

    return (this.Tab_190.Maitrise_oevre.Sous_Total_Prix_vente =
      Sous_Total_Prix_vente);
  }

  //TAB 10

  sommeDeMarge_TAB10() {
    let ssTraitance =
      (this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance,
          this. conceptions[1].Tab_190.Assistance_maitrise_ouvrage.AMO
            .SS_Traitance
        ));
    let marge_euro = (this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_euro,
        this. conceptions[1].Tab_190.Assistance_maitrise_ouvrage.AMO.marge_euro
      ));

    let marge_percent =
      (this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_percent,
          this. conceptions[1].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        ));

    return (this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_totale =
      this.produit2(ssTraitance, this.quotion(marge_percent, 100)) +
      marge_euro);
  }
  somme_privVente_TAB10() {
    let ssTraitance =
      (this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance,
          this. conceptions[1].Tab_190.Assistance_maitrise_ouvrage.AMO
            .SS_Traitance
        ));

    let marge_totale =
      (this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_totale,
          this. conceptions[1].Tab_190.Assistance_maitrise_ouvrage.AMO
            .marge_totale
        ));

    return (this.Tab_190.Assistance_maitrise_ouvrage.AMO.Prix_vente_Concep =
      ssTraitance + marge_totale);
  }

  someMargeTotaux_TAB10() {
    this.Tab_190.Assistance_maitrise_ouvrage.Marge_totaux = 0;
    return (this.Tab_190.Assistance_maitrise_ouvrage.Marge_totaux =
      this.isNanFunction(
        this.Tab_190.Assistance_maitrise_ouvrage.Marge_totaux
      ) +
      this.isNanFunction(
        this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_totale
      ));
  }

  sommeSoutraitanceTotaux_TAB10() {
    let SS_Traitance =
      (this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance,
          this. conceptions[1].Tab_190.Assistance_maitrise_ouvrage.AMO
            .SS_Traitance
        ));

    return (this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Construction =
      SS_Traitance);
  }

  somePrixDeVneteTotaux_TAB10() {
    let Sous_Total_Prix_vente =
      (this.Tab_190.Assistance_maitrise_ouvrage.AMO.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Assistance_maitrise_ouvrage.AMO
            .Prix_vente_Concep
        ));

    return (this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Prix_vente =
      Sous_Total_Prix_vente);
  }

  //TAB 11

  sommeDeMarge_TAB11() {
    let ssTraitance = (this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance,
        this. conceptions[1].Tab_190.Materiel.Matrriels_agricoles.SS_Traitance
      ));

    let margePercent =
      (this.Tab_190.Materiel.Matrriels_agricoles.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Matrriels_agricoles.marge_percent,
          this. conceptions[1].Tab_190.Materiel.Matrriels_agricoles.marge_percent
        ));

    let margeEuro = (this.Tab_190.Materiel.Matrriels_agricoles.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Matrriels_agricoles.marge_euro,
        this. conceptions[1].Tab_190.Materiel.Matrriels_agricoles.marge_euro
      ));

    this.Tab_190.Materiel.Matrriels_agricoles.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    return this.Tab_190.Materiel.Matrriels_agricoles.marge_totale;
  }

  somme_privVente_TAB11() {
    let ssTraitance = (this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance,
        this. conceptions[1].Tab_190.Materiel.Matrriels_agricoles.SS_Traitance
      ));

    var marge_totale = (this.Tab_190.Materiel.Matrriels_agricoles.marge_totale =
      this.readFromUserElseFromBase(
        this.Tab_190.Materiel.Matrriels_agricoles.marge_totale,
        this. conceptions[1].Tab_190.Materiel.Matrriels_agricoles.marge_totale
      ));

    this.Tab_190.Materiel.Matrriels_agricoles.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.Tab_190.Materiel.Matrriels_agricoles.Prix_vente_Concep;
  }

  sommeDeMarge_2TAB11() {
    let ssTraitance =
      (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance,
          this. conceptions[1].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
            .SS_Traitance
        ));

    let margePercent =
      (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_percent =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_percent,
          this. conceptions[1].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
            .marge_percent
        ));

    let margeEuro =
      (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_euro =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_euro,
          this. conceptions[1].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
            .marge_euro
        ));

    this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    return this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale;
  }

  somme_privVente_2TAB1() {
    let ssTraitance =
      (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance =
        this.readFromUserElseFromBase(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance,
          this. conceptions[1].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
            .SS_Traitance
        ));

    var marge_totale =
      (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale =
        this.readFromUserElseFromBase(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale,
          this. conceptions[1].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
            .marge_totale
        ));

    this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie
      .Prix_vente_Concep;
  }
  sommeDeMarge_3TAB11() {
    let ssTraitance = (this.Tab_190.Materiel.Hygenisiation.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance,
        this. conceptions[1].Tab_190.Materiel.Hygenisiation.SS_Traitance
      ));

    let margePercent = (this.Tab_190.Materiel.Hygenisiation.marge_percent =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Hygenisiation.marge_percent,
        this. conceptions[1].Tab_190.Materiel.Hygenisiation.marge_percent
      ));

    let margeEuro = (this.Tab_190.Materiel.Hygenisiation.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Hygenisiation.marge_euro,
        this. conceptions[1].Tab_190.Materiel.Hygenisiation.marge_euro
      ));

    this.Tab_190.Materiel.Hygenisiation.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    return this.Tab_190.Materiel.Hygenisiation.marge_totale;
  }

  somme_privVente_3TAB11() {
    let ssTraitance = (this.Tab_190.Materiel.Hygenisiation.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance,
        this. conceptions[1].Tab_190.Materiel.Hygenisiation.SS_Traitance
      ));

    var marge_totale = (this.Tab_190.Materiel.Hygenisiation.marge_totale =
      this.readFromUserElseFromBase(
        this.Tab_190.Materiel.Hygenisiation.marge_totale,
        this. conceptions[1].Tab_190.Materiel.Hygenisiation.marge_totale
      ));

    this.Tab_190.Materiel.Hygenisiation.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.Tab_190.Materiel.Hygenisiation.Prix_vente_Concep;
  }
  sommeDeMarge_4TAB11() {
    let ssTraitance = (this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance,
        this. conceptions[1].Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
      ));

    let margePercent = (this.Tab_190.Materiel.Semi_remorque_44_t.marge_percent =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_percent,
        this. conceptions[1].Tab_190.Materiel.Semi_remorque_44_t.marge_percent
      ));

    let margeEuro = (this.Tab_190.Materiel.Semi_remorque_44_t.marge_euro =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_euro,
        this. conceptions[1].Tab_190.Materiel.Semi_remorque_44_t.marge_euro
      ));

    this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale =
      this.produit2(ssTraitance, this.quotion(margePercent, 100)) + margeEuro;
    return this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale;
  }
  somme_privVente_4TAB11() {
    let ssTraitance = (this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance =
      this.readFromUserElseFromBase(
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance,
        this. conceptions[1].Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
      ));

    var marge_totale = (this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale =
      this.readFromUserElseFromBase(
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale,
        this. conceptions[1].Tab_190.Materiel.Semi_remorque_44_t.marge_totale
      ));

    this.Tab_190.Materiel.Semi_remorque_44_t.Prix_vente_Concep =
      ssTraitance + marge_totale;

    return this.Tab_190.Materiel.Semi_remorque_44_t.Prix_vente_Concep;
  }

  ////
  someMargeTotaux_TAB11() {
    let marge_totale = (this.Tab_190.Materiel.Matrriels_agricoles.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Matrriels_agricoles.marge_totale,
        this. conceptions[1].Tab_190.Materiel.Matrriels_agricoles.marge_totale
      ));

    let marge_totale_ =
      (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale,
          this. conceptions[1].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
            .marge_totale
        ));
    let marge_totale__ = (this.Tab_190.Materiel.Hygenisiation.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Hygenisiation.marge_totale,
        this. conceptions[1].Tab_190.Materiel.Hygenisiation.marge_totale
      ));
    let _marge_totale = (this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale =
      this.isNullOrVideGetFromBase(
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale,
        this. conceptions[1].Tab_190.Materiel.Semi_remorque_44_t.marge_totale
      ));

    return (this.Tab_190.Materiel.Marge_totaux =
      marge_totale + marge_totale_ + marge_totale__ + _marge_totale);
  }

  sommeSoutraitanceTotaux_TAB11() {
    let SS_Traitance_CtrTech =
      (this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance,
          this. conceptions[1].Tab_190.Materiel.Matrriels_agricoles.SS_Traitance
        ));

    let SS_Traitance_Frais_dossier =
      (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance,
          this. conceptions[1].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
            .SS_Traitance
        ));
    let SS_Traitance_Conseil_suivi =
      (this.Tab_190.Materiel.Hygenisiation.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Hygenisiation.SS_Traitance,
          this. conceptions[1].Tab_190.Materiel.Hygenisiation.SS_Traitance
        ));
    let SS_Traitance_Aleas =
      (this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance,
          this. conceptions[1].Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
        ));

    return (this.Tab_190.Materiel.Sous_Total_Construction =
      SS_Traitance_CtrTech +
      SS_Traitance_Frais_dossier +
      SS_Traitance_Conseil_suivi +
      SS_Traitance_Aleas);
  }

  somePrixDeVneteTotaux_TAB11() {
    let Prix_vente_Concep_CtrTech =
      (this.Tab_190.Materiel.Matrriels_agricoles.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Matrriels_agricoles.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Materiel.Matrriels_agricoles
            .Prix_vente_Concep
        ));

    let Prix_vente_Concep_Frais_dossier =
      (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
            .Prix_vente_Concep
        ));
    let Prix_vente_Concep_Conseil_suivi =
      (this.Tab_190.Materiel.Hygenisiation.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Hygenisiation.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Materiel.Hygenisiation.Prix_vente_Concep
        ));
    let Prix_vente_Concep_Aleas =
      (this.Tab_190.Materiel.Semi_remorque_44_t.Prix_vente_Concep =
        this.isNullOrVideGetFromBase(
          this.Tab_190.Materiel.Semi_remorque_44_t.Prix_vente_Concep,
          this. conceptions[1].Tab_190.Materiel.Semi_remorque_44_t
            .Prix_vente_Concep
        ));

    return (this.Tab_190.Materiel.Sous_Total_Prix_vente =
      Prix_vente_Concep_CtrTech +
      Prix_vente_Concep_Frais_dossier +
      Prix_vente_Concep_Conseil_suivi +
      Prix_vente_Concep_Aleas);
  }


  SommeTotal_totaux_SS_Traitance(){
    this.Tab_190.totaux_SS_traitance_Total_190=0


   return (this.Tab_190.totaux_SS_traitance_Total_190=
    this.isNanFunction(this.Tab_190.Ouverture_chantier.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Lot_2_Valorisation.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Conception)+

    this.isNanFunction(this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Maitrise_oevre.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Conception)+
    this.isNanFunction(this.Tab_190.Materiel.Sous_Total_Conception)

   );
  }
  SommeTotal_totaux_Prix_Vente_totaux(){
    this.Tab_190.totaux_prixVente_Total_190=0
    return (this.Tab_190.totaux_prixVente_Total_190=
     this.isNanFunction(this.Tab_190.Ouverture_chantier.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Lot_2_Valorisation.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Prix_vente_Concep)+

     this.isNanFunction(this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Maitrise_oevre.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Prix_vente_Concep)+
     this.isNanFunction(this.Tab_190.Materiel.Sous_Total_Prix_vente_Concep)

    );
  }
  SommeTotal_totaux_Marge_totaux(){
    this.Tab_190.totaux_marge_Total_190=0
    return (this.Tab_190.totaux_marge_Total_190=
     this.isNanFunction(this.Tab_190.Ouverture_chantier.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Lot_1_Process_methanisation.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Lot_2_Valorisation.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Marge_totaux)+

     this.isNanFunction(this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Maitrise_oevre.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Assistance_maitrise_ouvrage.Marge_totaux)+
     this.isNanFunction(this.Tab_190.Materiel.Marge_totaux)

    );
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
