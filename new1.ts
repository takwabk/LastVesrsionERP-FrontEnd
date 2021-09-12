import { Component, OnInit } from '@angular/core';
import { AgriService } from 'src/app/services/agri.service';

@Component({
  selector: 'app-injection190',
  templateUrl: './injection190.component.html',
  styleUrls: ['./injection190.component.css']
})
export class Injection190Component implements OnInit {

  conceptions;
  id;
  constructor(private agriSrv:
    AgriService) {}

  ngOnInit() {
    this.id = "612f7203371c684ed4a3e79b";
    this.getDataConstruction();

    console.log("id", this.id);
  }
  sendInteret(value) {
    let id = this.conceptions[0]._id;
    //concatination
    //let val = value;

    let val = value;

    this.agriSrv.updateDataconstructionByID(id, val).subscribe((data) => {
      this.getDataConstruction();
    });
  }

  //afficher data conception from database

  getDataConstruction() {
    this.agriSrv.getData().subscribe((data) => {
      this.conceptions = data;
      // this.id = this.conceptions[0]._id;
      console.log("data-conceptions", data);
    });
  }

  //1----- Tab190
  Tab_190:any= {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Frais_dossier: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Conseil_suivi: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Aleas: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      TRCME: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Achat_Terrain: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Frais_notaire: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Cogenerateur: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Hygenisiation: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },
      Semi_remorque_44_t: {
        SS_Traitance: "",
        marge_percent: "",
        marge_euro: "",
        marge_totale: "",
        Prix_vente_Constru: "",
      },

      Sous_Total_Construction: "",
      Sous_Total_Prix_vente_Constru: "",
       Marge_totaux: "",
    },
  }
  isNanFunction(val) {
    return isNaN(val) ? 0 : parseFloat(val);
  }
  sommeDeMarge_chantier() {
    if (
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance = 0;
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_percent =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_percent);
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_euro =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS
          .SS_Traitance);

    var margePercent = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Ouverture_chantier.Controle_technique_SPS
              .marge_percent
          ),
          100
        )
      : this.quotion(
        this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS
            .marge_percent),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_euro
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS
          .marge_euro);

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



  }
  somme_privVente_chantier(){


    if (
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance);;
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale);
    }



  var ssTraitance = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance
  )
  ? this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance
    )
  : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS
      .SS_Traitance);

  var marge_totale = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Controle_technique_SPS.marge_totale
  )
  ?
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Controle_technique_SPS
          .marge_totale)

  :
  this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS
        .marge_totale);


  return (this.Tab_190.Ouverture_chantier.Controle_technique_SPS.Prix_vente_Concep =
    this.isNanFunction(ssTraitance + marge_totale));


  }

  sommeDeMarge_frais() {
    if (
      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance = 0;
      this.Tab_190.Ouverture_chantier.Frais_dossier.marge_percent =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier.marge_percent);
      this.Tab_190.Ouverture_chantier.Frais_dossier.marge_euro =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier
          .SS_Traitance);

    var margePercent = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_dossier.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Ouverture_chantier.Frais_dossier
              .marge_percent
          ),
          100
        )
      : this.quotion(
        this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier
            .marge_percent),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_dossier.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Frais_dossier.marge_euro
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier
          .marge_euro);

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Ouverture_chantier.Frais_dossier.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



  }
  somme_privVente_frais(){


    if (
      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance);
      this.Tab_190.Ouverture_chantier.Frais_dossier.marge_totale =

      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier.marge_totale);
    }



  var ssTraitance = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance
  )
  ? this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance
    )
  : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier
      .SS_Traitance);

  var marge_totale = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Frais_dossier.marge_totale
  )
  ?
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Frais_dossier
          .marge_totale)

  :
  this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier
        .marge_totale);


  return (this.Tab_190.Ouverture_chantier.Frais_dossier.Prix_vente_Concep =
    this.isNanFunction(ssTraitance + marge_totale));


  }

  sommeDeMarge_conseil() {
    if (
      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance = 0;
      this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_percent =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi.marge_percent);
      this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_euro =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi
          .SS_Traitance);

    var margePercent = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Ouverture_chantier.Conseil_suivi
              .marge_percent
          ),
          100
        )
      : this.quotion(
        this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi
            .marge_percent),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_euro
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi
          .marge_euro);

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



  }
  somme_privVente_conseil(){


    if (
      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance);
      this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale =

      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale);
    }



  var ssTraitance = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance
  )
  ? this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance
    )
  : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi
      .SS_Traitance);

  var marge_totale = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale
  )
  ?
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Conseil_suivi
          .marge_totale)

  :
  this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi
        .marge_totale);


  return (this.Tab_190.Ouverture_chantier.Conseil_suivi.Prix_vente_Concep =
    this.isNanFunction(ssTraitance + marge_totale));


  }
  sommeDeMarge_aleas() {
    if (
      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance = 0;
      this.Tab_190.Ouverture_chantier.Aleas.marge_percent =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas.marge_percent);
      this.Tab_190.Ouverture_chantier.Aleas.marge_euro =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas
          .SS_Traitance);

    var margePercent = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Aleas.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Ouverture_chantier.Aleas
              .marge_percent
          ),
          100
        )
      : this.quotion(
        this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas
            .marge_percent),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Aleas.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Aleas.marge_euro
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas
          .marge_euro);

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Ouverture_chantier.Aleas.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



  }
  somme_privVente_aleas(){


    if (
      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas.SS_Traitance);
      this.Tab_190.Ouverture_chantier.Aleas.marge_totale =

      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas.marge_totale);
    }



  var ssTraitance = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance
  )
  ? this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance
    )
  : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas
      .SS_Traitance);

  var marge_totale = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Aleas.marge_totale
  )
  ?
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Aleas
          .marge_totale)

  :
  this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Aleas
        .marge_totale);


  return (this.Tab_190.Ouverture_chantier.Aleas.Prix_vente_Concep =
    this.isNanFunction(ssTraitance + marge_totale));


  }

  sommeDeMarge_TRCME() {
    if (
      this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance = 0;
      this.Tab_190.Ouverture_chantier.TRCME.marge_percent =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME.marge_percent);
      this.Tab_190.Ouverture_chantier.TRCME.marge_euro =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME
          .SS_Traitance);

    var margePercent = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.TRCME.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Ouverture_chantier.TRCME
              .marge_percent
          ),
          100
        )
      : this.quotion(
        this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME
            .marge_percent),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.TRCME.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.TRCME.marge_euro
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME
          .marge_euro);

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Ouverture_chantier.TRCME.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



  }
  somme_privVente_TRCME(){


    if (
      this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME.SS_Traitance);
      this.Tab_190.Ouverture_chantier.TRCME.marge_totale =

      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME.marge_totale);
    }



  var ssTraitance = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance
  )
  ? this.isNanFunction(
      this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance
    )
  : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME
      .SS_Traitance);

  var marge_totale = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.TRCME.marge_totale
  )
  ?
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.TRCME
          .marge_totale)

  :
  this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.TRCME
        .marge_totale);


  return (this.Tab_190.Ouverture_chantier.TRCME.Prix_vente_Concep =
    this.isNanFunction(ssTraitance + marge_totale));


  }


 sommeDeMarge_achat() {
    if (
      this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance = 0;
      this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_percent =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain.marge_percent);
      this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_euro =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain
          .SS_Traitance);

    var margePercent = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Ouverture_chantier.Achat_Terrain
              .marge_percent
          ),
          100
        )
      : this.quotion(
        this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain
            .marge_percent),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_euro
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain
          .marge_euro);

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



  }
  somme_privVente_achat(){


    if (
      this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance);
      this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale =

      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale);
    }



  var ssTraitance = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance
  )
  ? this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance
    )
  : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain
      .SS_Traitance);

  var marge_totale = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Achat_Terrain.marge_totale
  )
  ?
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Achat_Terrain
          .marge_totale)

  :
  this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain
        .marge_totale);


  return (this.Tab_190.Ouverture_chantier.Achat_Terrain.Prix_vente_Concep =
    this.isNanFunction(ssTraitance + marge_totale));


  }

  sommeDeMarge_notaire() {
    if (
      this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance = 0;
      this.Tab_190.Ouverture_chantier.Frais_notaire.marge_percent =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire.marge_percent);
      this.Tab_190.Ouverture_chantier.Frais_notaire.marge_euro =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire
          .SS_Traitance);

    var margePercent = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_notaire.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Ouverture_chantier.Frais_notaire
              .marge_percent
          ),
          100
        )
      : this.quotion(
        this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire
            .marge_percent),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_notaire.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Ouverture_chantier.Frais_notaire.marge_euro
        )
      : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire
          .marge_euro);

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Ouverture_chantier.Frais_notaire.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



  }
  somme_privVente_notaire(){


    if (
      this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance ==
        "" ||
      this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance ==
        null
    ) {
      this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance =
      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance);
      this.Tab_190.Ouverture_chantier.Frais_notaire.marge_totale =

      this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire.marge_totale);
    }



  var ssTraitance = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance
  )
  ? this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance
    )
  : this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire
      .SS_Traitance);

  var marge_totale = this.isNanFunction(
  this.Tab_190.Ouverture_chantier.Frais_notaire.marge_totale
  )
  ?
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Frais_notaire
          .marge_totale)

  :
  this.isNanFunction(this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire
        .marge_totale);


  return (this.Tab_190.Ouverture_chantier.Frais_notaire.Prix_vente_Concep =
    this.isNanFunction(ssTraitance + marge_totale));


  }
  someMargeTotaux_TAB1(){
    this.Tab_190.Ouverture_chantier.Marge_totaux = 0;
    return (this.Tab_190.Ouverture_chantier.Marge_totaux =
      this.isNanFunction(this.Tab_190.Ouverture_chantier.Controle_technique_SPS.Marge_totaux) +
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Frais_dossier
          .marge_totale
      ) +
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Conseil_suivi.marge_totale
      ) +
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Aleas
      ) +
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.TRCME
          .marge_totale
      )+
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Achat_Terrain
          .marge_totale
      )+
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Frais_notaire
          .marge_totale
    ));

  }
  sommeSoutraitanceTotaux_TAB1(){
    if (
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS
        .SS_Traitance == null ||
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS
        .SS_Traitance == ""
    ) {
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Ouverture_chantier.Controle_technique_SPS.SS_Traitance
        );

      this.Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Ouverture_chantier.Frais_dossier.SS_Traitance
        );

      this.Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Ouverture_chantier.Conseil_suivi.SS_Traitance
        );

      this.Tab_190.Ouverture_chantier.Aleas.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Ouverture_chantier.Aleas.SS_Traitance
        );

        this.Tab_190.Ouverture_chantier.TRCME.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Ouverture_chantier.TRCME.SS_Traitance
        );
        this.Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Ouverture_chantier.Achat_Terrain.SS_Traitance
        );
        this.Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Ouverture_chantier.Frais_notaire.SS_Traitance
        );
    }

    var ssTraitance1 = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Controle_technique_SPS
        .SS_Traitance
    );
    var ssTraitance2 = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_dossier
        .SS_Traitance
    );
    var ssTraitance3 = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Conseil_suivi
        .SS_Traitance
    );
    var ssTraitance4 = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Aleas
        .SS_Traitance
    );
    var ssTraitance4 = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.TRCME
        .SS_Traitance
    );
    var ssTraitance4 = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Achat_Terrain
        .SS_Traitance
    );
    var ssTraitance4 = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Frais_notaire
        .SS_Traitance
    );

    this.Tab_190.Ouverture_chantier.Sous_Total_Conception = 0;
    var s0 = this.isNanFunction(
      this.Tab_190.Ouverture_chantier.Sous_Total_Conception
    );
    return (this.Tab_190.Ouverture_chantier.Sous_Total_Conception =
      ssTraitance1 + ssTraitance2 + ssTraitance3 + ssTraitance4);
  }
  somePrixDeVneteTotaux_TAB1(){
    this.Tab_190.Ouverture_chantier.Sous_Total_Prix_vente_Constru = 0;
    return (this.Tab_190.Ouverture_chantier.Sous_Total_Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Sous_Total_Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier.Controle_technique_SPS
          .Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier
          .Frais_dossier.Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier
          .Conseil_suivi.Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier
          .Aleas.Prix_vente_Constru
      )+
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier
          .TRCME.Prix_vente_Constru
      )+
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier
          .Achat_Terrain.Prix_vente_Constru
      )+
      this.isNanFunction(
        this.Tab_190.Ouverture_chantier
          .Frais_notaire.Prix_vente_Constru
      ));
  }
  //tab2
  sommeDeMarge_TAB2() {
    if (
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance == "" ||
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance == null
    ) {
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.SS_Traitance = 0;
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_percent
        );
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.SS_Traitance
        );

    var margePercent = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
              .marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_1_Process_methanisation
              .Process_methanisation.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente_TAB2() {
    if (
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance == "" ||
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance == null
    ) {
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.SS_Traitance = 0;
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_totale
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.SS_Traitance
        );

    var marge_totale = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .marge_totale
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
            .marge_totale
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Process_methanisation.marge_totale
        );

    return (this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.Prix_vente_Constru =
      this.isNanFunction(ssTraitance + marge_totale));
  }

  sommeDeMarge_2TAB2() {
    if (
      this.Tab_190.Lot_1_Process_methanisation
        .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance == "" ||
      this.Tab_190.Lot_1_Process_methanisation
        .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance == null
    ) {
      this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.SS_Traitance = 0;
      this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_percent
        );
      this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation
        .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance
        );

    var margePercent = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation
        .Pieces_usure_premiere_urgence_Lot_1.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Lot_1_Process_methanisation
              .Pieces_usure_premiere_urgence_Lot_1.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_1_Process_methanisation
              .Pieces_usure_premiere_urgence_Lot_1.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation
        .Pieces_usure_premiere_urgence_Lot_1.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

    //
  }
  somme_privVente_2TAB2() {
    if (
      this.Tab_190.Lot_1_Process_methanisation
        .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance == "" ||
      this.Tab_190.Lot_1_Process_methanisation
        .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance == null
    ) {
      this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.SS_Traitance = 0;
      this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_1_Process_methanisation
            .Pieces_usure_premiere_urgence_Lot_1.marge_totale
        );
    }

    this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation
          .Pieces_usure_premiere_urgence_Lot_1.marge_totale
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation
          .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance
      );
  }
  //


  someMargeTotaux_TAB2() {
    this.Tab_190.Lot_1_Process_methanisation.Marge_totaux = 0;
    return (this.Tab_190.Lot_1_Process_methanisation.Marge_totaux =
      this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation.Marge_totaux
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
          .marge_totale
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation
          .Pieces_usure_premiere_urgence_Lot_1.marge_totale
      ) );
  }

  sommeSoutraitanceTotaux_TAB2() {
    if (
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance == null ||
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance == ""
    ) {
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation.SS_Traitance =
        this.conceptions[0].Tab_190.Lot_1_Process_methanisation.Process_methanisation.SS_Traitance;

      this.Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.SS_Traitance =
        this.conceptions[0].Tab_190.Lot_1_Process_methanisation.Pieces_usure_premiere_urgence_Lot_1.SS_Traitance;


    }

    var ssTraitance1 = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
        .SS_Traitance
    );
    var ssTraitance2 = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation
        .Pieces_usure_premiere_urgence_Lot_1.SS_Traitance
    );


    this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Construction = 0;
    var s0 = this.isNanFunction(
      this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Construction
    );
    return (this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Construction =
      s0 + ssTraitance1 + ssTraitance2 );
  }

  somePrixDeVneteTotaux_TAB2() {
    this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Prix_vente_Constru = 0;
    return (this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation.Sous_Total_Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation.Process_methanisation
          .Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation
          .Pieces_usure_premiere_urgence_Lot_1.Prix_vente_Constru
      ) );
  }
  //tab3


  sommeDeMarge_TAB3() {
    if (
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .SS_Traitance == "" ||
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .SS_Traitance == null
    ) {
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.SS_Traitance = 0;
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_percent
        );
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Process_methanisation.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_2_Valorisation.Process_methanisation.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation.Process_methanisation
            .SS_Traitance
        );

    var margePercent = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Process_methanisation.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Lot_2_Valorisation.Process_methanisation.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_2_Valorisation
              .Process_methanisation.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Process_methanisation.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_2_Valorisation.Process_methanisation.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation.Process_methanisation
            .marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Lot_2_Valorisation.Process_methanisation.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente_TAB3() {
    if (
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .SS_Traitance == "" ||
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .SS_Traitance == null
    ) {
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.SS_Traitance = 0;
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_totale
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.SS_Traitance
        );

    var marge_totale = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .marge_totale
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
            .marge_totale
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation
            .Epuration_Compression_Chaudiere.marge_totale
        );

    return (this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.Prix_vente_Constru =
      this.isNanFunction(ssTraitance + marge_totale));
  }

  sommeDeMarge_2TAB3() {
    if (
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance == "" ||
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance == null
    ) {
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance = 0;
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation.Cogenerateur
            .marge_percent
        );
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation.Cogenerateur
            .marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation.Cogenerateur
            .SS_Traitance
        );

    var margePercent = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_2_Valorisation.Cogenerateur
              .marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation.Cogenerateur
            .marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

    //
  }
  somme_privVente_2TAB3() {
    if (
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance == "" ||
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance == null
    ) {
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance = 0;
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_2_Valorisation.Cogenerateur
            .marge_totale
        );
    }

    this.Tab_190.Lot_2_Valorisation.Cogenerateur.Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance
      );
  }

  someMargeTotaux_TAB3() {
    this.Tab_190.Lot_2_Valorisation.Marge_totaux = 0;
    return (this.Tab_190.Lot_2_Valorisation.Marge_totaux =
      this.isNanFunction(this.Tab_190.Lot_2_Valorisation.Marge_totaux) +
      this.isNanFunction(
        this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
          .marge_totale
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_2_Valorisation.Cogenerateur.marge_totale
      ));
  }

  sommeSoutraitanceTotaux_TAB3() {
    if (
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .SS_Traitance == null ||
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .SS_Traitance == ""
    ) {
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.SS_Traitance =
        this.conceptions[0].Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere.SS_Traitance;

      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance =
        this.conceptions[0].Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance;
    }

    var ssTraitance1 = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
        .SS_Traitance
    );
    var ssTraitance2 = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Cogenerateur.SS_Traitance
    );

    this.Tab_190.Lot_2_Valorisation.Sous_Total_Construction = 0;
    var s0 = this.isNanFunction(
      this.Tab_190.Lot_2_Valorisation.Sous_Total_Construction
    );
    return (this.Tab_190.Lot_2_Valorisation.Sous_Total_Construction =
      s0 + ssTraitance1 + ssTraitance2);
  }

  somePrixDeVneteTotaux_TAB3() {
    this.Tab_190.Lot_2_Valorisation.Sous_Total_Prix_vente_Constru = 0;
    return (this.Tab_190.Lot_2_Valorisation.Sous_Total_Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Lot_2_Valorisation.Sous_Total_Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_2_Valorisation.Epuration_Compression_Chaudiere
          .Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_2_Valorisation.Cogenerateur.Prix_vente_Constru
      ));
  }
  //tab4
  //TAB4
  sommeDeMarge_TAB4() {
    if (
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance == "" ||
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance == null
    ) {
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance = 0;
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_percent
        );
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
        );

    var margePercent = this.isNanFunction(
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
              .Terrassement_Grande_Masse_Talutafe_VRD.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
              .Terrassement_Grande_Masse_Talutafe_VRD.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente_TAB4() {
    if (
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance == "" ||
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance == null
    ) {
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance = 0;
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
        );

    var marge_totale = this.isNanFunction(
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190
            .Lot_3_Terrassement_Grande_Masse_Talutage_VRD
            .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale
        );

    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.Prix_vente_Constru =
      this.isNanFunction(ssTraitance + marge_totale));
  }

  someMargeTotaux_TAB4() {
    this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Marge_totaux = 0;
    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Marge_totaux =
      this.isNanFunction(
        this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Marge_totaux
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
          .Terrassement_Grande_Masse_Talutafe_VRD.marge_totale
      ));
  }

  sommeSoutraitanceTotaux_TAB4() {
    if (
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance == null ||
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance == ""
    ) {
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance =
        this.conceptions[0].Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance;
    }

    var ssTraitance1 = this.isNanFunction(
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Terrassement_Grande_Masse_Talutafe_VRD.SS_Traitance
    );

    this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Construction = 0;
    var s0 = this.isNanFunction(
      this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
        .Sous_Total_Construction
    );
    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Construction =
      s0 + ssTraitance1);
  }

  somePrixDeVneteTotaux_TAB4() {
    this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Prix_vente_Constru = 0;
    return (this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD.Sous_Total_Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
          .Sous_Total_Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_3_Terrassement_Grande_Masse_Talutage_VRD
          .Terrassement_Grande_Masse_Talutafe_VRD.Prix_vente_Constru
      ));
  }

 //TAB 5

 sommeDeMarge_TAB5() {
  if (
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .SS_Traitance == "" ||
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .SS_Traitance == null
  ) {
    this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance = 0;
    this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_percent =
      this.isNanFunction(
        this.conceptions[0].Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .marge_percent
      );
    this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_euro =
      this.isNanFunction(
        this.conceptions[0].Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .marge_euro
      );
  }

  var ssTraitance = this.isNanFunction(
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance
  )
    ? this.isNanFunction(
        this.Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .SS_Traitance
      )
    : this.isNanFunction(
        this.conceptions[0].Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .SS_Traitance
      );

  var margePercent = this.isNanFunction(
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.isNanFunction(
          this.conceptions[0].Tab_190
            .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .Genie_Civil_circulaire_digestat_liquide_couverture_simple
            .marge_percent
        ),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_euro
  )
    ? this.isNanFunction(
        this.Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .marge_euro
      )
    : this.isNanFunction(
        this.conceptions[0].Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .marge_euro
      );

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
}
somme_privVente_TAB5() {
  if (
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .SS_Traitance == "" ||
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .SS_Traitance == null
  ) {
    this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance = 0;
    this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_totale =
      this.isNanFunction(
        this.conceptions[0].Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .marge_totale
      );
  }

  var ssTraitance = this.isNanFunction(
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance
  )
    ? this.isNanFunction(
        this.Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .SS_Traitance
      )
    : this.isNanFunction(
        this.conceptions[0].Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .SS_Traitance
      );

  var marge_totale = this.isNanFunction(
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple.marge_totale
  )
    ? this.isNanFunction(
        this.Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .marge_totale
      )
    : this.isNanFunction(
        this.conceptions[0].Tab_190
          .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .Genie_Civil_circulaire_digestat_liquide_couverture_simple
          .marge_totale
      );

  return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.Prix_vente_Constru =
    this.isNanFunction(ssTraitance + marge_totale));
}

someMargeTotaux_TAB5() {
  this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Marge_totaux = 0;
  return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Marge_totaux =
    this.isNanFunction(
      this.Tab_190
        .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
        .Marge_totaux
    ) +
    this.isNanFunction(
      this.Tab_190
        .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
        .Genie_Civil_circulaire_digestat_liquide_couverture_simple
        .marge_totale
    ));
}

sommeSoutraitanceTotaux_TAB5() {
  if (
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .SS_Traitance == null ||
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .SS_Traitance == ""
  ) {
    this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance =
      this.conceptions[0].Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance;
  }

  var ssTraitance1 = this.isNanFunction(
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Genie_Civil_circulaire_digestat_liquide_couverture_simple.SS_Traitance
  );

  this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Construction = 0;
  var s0 = this.isNanFunction(
    this.Tab_190
      .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
      .Sous_Total_Construction
  );
  return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Construction =
    s0 + ssTraitance1);
}

somePrixDeVneteTotaux_TAB5() {
  this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Prix_vente_Constru = 0;
  return (this.Tab_190.Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple.Sous_Total_Prix_vente_Constru =
    this.isNanFunction(
      this.Tab_190
        .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
        .Sous_Total_Prix_vente_Constru
    ) +
    this.isNanFunction(
      this.Tab_190
        .Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple
        .Genie_Civil_circulaire_digestat_liquide_couverture_simple
        .Prix_vente_Constru
    ));
}


  //TAB 6
  sommeDeMarge_TAB6() {
    if (
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance == "" ||
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance == null
    ) {
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.SS_Traitance = 0;
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_percent
        );
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance
        );

    var margePercent = this.isNanFunction(
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
              .Genie_Civil_ouvrages_peripheriques.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_5_Genie_Civil_ouvrages_peripheriques
              .Genie_Civil_ouvrages_peripheriques.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente_TAB6() {
    if (
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance == "" ||
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance == null
    ) {
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.SS_Traitance = 0;
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_totale
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.SS_Traitance
        );

    var marge_totale = this.isNanFunction(
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.marge_totale
    )
      ? this.isNanFunction(
          this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_totale
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
            .Genie_Civil_ouvrages_peripheriques.marge_totale
        );

    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.Prix_vente_Constru =
      this.isNanFunction(ssTraitance + marge_totale));
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
    if (
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance == null ||
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance == ""
    ) {
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.SS_Traitance =
        this.conceptions[0].Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Genie_Civil_ouvrages_peripheriques.SS_Traitance;
    }

    var ssTraitance1 = this.isNanFunction(
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Genie_Civil_ouvrages_peripheriques.SS_Traitance
    );

    this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Construction = 0;
    var s0 = this.isNanFunction(
      this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
        .Sous_Total_Construction
    );
    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Construction =
      s0 + ssTraitance1);
  }

  somePrixDeVneteTotaux_TAB6() {
    this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Prix_vente_Constru = 0;
    return (this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques.Sous_Total_Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
          .Sous_Total_Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Lot_5_Genie_Civil_ouvrages_peripheriques
          .Genie_Civil_ouvrages_peripheriques.Prix_vente_Constru
      ));
  }

    //TAB 7

    sommeDeMarge_TAB7() {
      if (
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance == "" ||
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance == null
      ) {
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.SS_Traitance = 0;
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.marge_percent =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.marge_percent
          );
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.marge_euro =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.marge_euro
          );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.SS_Traitance
          );

      var margePercent = this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.marge_percent
      )
        ? this.quotion(
            this.isNanFunction(
              this.Tab_190.Lot_6_Charpente_Batiment_Couverture
                .Charpente_Batiment_Couverture.marge_percent
            ),
            100
          )
        : this.quotion(
            this.isNanFunction(
              this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture
                .Charpente_Batiment_Couverture.marge_percent
            ),
            100
          );
      var margeEuro = this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.marge_euro
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.marge_euro
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.marge_euro
          );

      console.log(
        "margePercent margePercent margePercent",
        margePercent,
        margeEuro,
        ssTraitance
      );

      return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.marge_totale =
        this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
    }
    somme_privVente_TAB7() {
      if (
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance == "" ||
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance == null
      ) {
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.SS_Traitance = 0;
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.marge_totale =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.marge_totale
          );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.SS_Traitance
          );

      var marge_totale = this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.marge_totale
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.marge_totale
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture
              .Charpente_Batiment_Couverture.marge_totale
          );

      return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.Prix_vente_Constru =
        this.isNanFunction(ssTraitance + marge_totale));
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
      if (
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance == null ||
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance == ""
      ) {
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.SS_Traitance =
          this.conceptions[0].Tab_190.Lot_6_Charpente_Batiment_Couverture.Charpente_Batiment_Couverture.SS_Traitance;
      }

      var ssTraitance1 = this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture
          .Charpente_Batiment_Couverture.SS_Traitance
      );

      this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Construction = 0;
      var s0 = this.isNanFunction(
        this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Construction
      );
      return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Construction =
        s0 + ssTraitance1);
    }

    somePrixDeVneteTotaux_TAB7() {
      this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Prix_vente_Constru = 0;
      return (this.Tab_190.Lot_6_Charpente_Batiment_Couverture.Sous_Total_Prix_vente_Constru =
        this.isNanFunction(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Sous_Total_Prix_vente_Constru
        ) +
        this.isNanFunction(
          this.Tab_190.Lot_6_Charpente_Batiment_Couverture
            .Charpente_Batiment_Couverture.Prix_vente_Constru
        ));
    }


    //TAB 8
    sommeDeMarge_TAB8() {
      if (
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance == "" ||
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance == null
      ) {
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.SS_Traitance = 0;
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.marge_percent =
          this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.marge_percent
          );
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.marge_euro =
          this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.marge_euro
          );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
          );

      var margePercent = this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.marge_percent
      )
        ? this.quotion(
            this.isNanFunction(
              this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
                .Courant_fort_Soutirage_Electricite_Generale.marge_percent
            ),
            100
          )
        : this.quotion(
            this.isNanFunction(
              this.conceptions[0].Tab_190
                .Lot_7_Courant_fort_Soutirage_Electricite_Generale
                .Courant_fort_Soutirage_Electricite_Generale.marge_percent
            ),
            100
          );
      var margeEuro = this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.marge_euro
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.marge_euro
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.marge_euro
          );

      console.log(
        "margePercent margePercent margePercent",
        margePercent,
        margeEuro,
        ssTraitance
      );

      return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.marge_totale =
        this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
    }
    somme_privVente_TAB8() {
      if (
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance == "" ||
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance == null
      ) {
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.SS_Traitance = 0;
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.marge_totale =
          this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.marge_totale
          );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
          );

      var marge_totale = this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.marge_totale
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.marge_totale
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190
              .Lot_7_Courant_fort_Soutirage_Electricite_Generale
              .Courant_fort_Soutirage_Electricite_Generale.marge_totale
          );

      return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.Prix_vente_Constru =
        this.isNanFunction(ssTraitance + marge_totale));
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
      if (
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance == null ||
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance == ""
      ) {
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.SS_Traitance =
          this.conceptions[0].Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Courant_fort_Soutirage_Electricite_Generale.SS_Traitance;
      }

      var ssTraitance1 = this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Courant_fort_Soutirage_Electricite_Generale.SS_Traitance
      );

      this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Construction = 0;
      var s0 = this.isNanFunction(
        this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
          .Sous_Total_Construction
      );
      return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Construction =
        s0 + ssTraitance1);
    }

    somePrixDeVneteTotaux_TAB8() {
      this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Prix_vente_Constru = 0;
      return (this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale.Sous_Total_Prix_vente_Constru =
        this.isNanFunction(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Sous_Total_Prix_vente_Constru
        ) +
        this.isNanFunction(
          this.Tab_190.Lot_7_Courant_fort_Soutirage_Electricite_Generale
            .Courant_fort_Soutirage_Electricite_Generale.Prix_vente_Constru
        ));
    }
      //TAB 9
  sommeDeMarge_TAB9() {
    if (
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance == "" ||
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance == null
    ) {
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance = 0;
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre
            .marge_percent
        );
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre.marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre
            .SS_Traitance
        );

    var margePercent = this.isNanFunction(
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre
              .marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente_TAB9() {
    if (
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance == "" ||
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance == null
    ) {
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance = 0;
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre
            .marge_totale
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre
            .SS_Traitance
        );

    var marge_totale = this.isNanFunction(
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale
    )
      ? this.isNanFunction(
          this.Tab_190.Maitrise_oevre.Maitrise_oevre.marge_totale
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre
            .marge_totale
        );

    return (this.Tab_190.Maitrise_oevre.Maitrise_oevre.Prix_vente_Constru =
      this.isNanFunction(ssTraitance + marge_totale));
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
    if (
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance == null ||
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance == ""
    ) {
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance =
        this.conceptions[0].Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance;
    }

    var ssTraitance1 = this.isNanFunction(
      this.Tab_190.Maitrise_oevre.Maitrise_oevre.SS_Traitance
    );

    this.Tab_190.Maitrise_oevre.Sous_Total_Construction = 0;
    var s0 = this.isNanFunction(
      this.Tab_190.Maitrise_oevre.Sous_Total_Construction
    );
    return (this.Tab_190.Maitrise_oevre.Sous_Total_Construction =
      s0 + ssTraitance1);
  }

  somePrixDeVneteTotaux_TAB9() {
    this.Tab_190.Maitrise_oevre.Sous_Total_Prix_vente_Constru = 0;
    return (this.Tab_190.Maitrise_oevre.Sous_Total_Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Maitrise_oevre.Sous_Total_Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Maitrise_oevre.Maitrise_oevre.Prix_vente_Constru
      ));
  }

  //TAB 10

  sommeDeMarge_TAB10() {
    if (
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance == "" ||
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance == null
    ) {
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance = 0;
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO
            .marge_percent
        );
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO
            .marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO
            .SS_Traitance
        );

    var margePercent = this.isNanFunction(
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO
              .marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_euro
    )
      ? this.isNanFunction(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO
            .marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente_TAB10() {
    if (
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance == "" ||
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance == null
    ) {
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance = 0;
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO
            .marge_totale
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance
    )
      ? this.isNanFunction(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO
            .SS_Traitance
        );

    var marge_totale = this.isNanFunction(
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_totale
    )
      ? this.isNanFunction(
          this.Tab_190.Assistance_maitrise_ouvrage.AMO.marge_totale
        )
      : this.isNanFunction(
          this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO
            .marge_totale
        );

    return (this.Tab_190.Assistance_maitrise_ouvrage.AMO.Prix_vente_Constru =
      this.isNanFunction(ssTraitance + marge_totale));
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
    if (
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance == null ||
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance == ""
    ) {
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance =
        this.conceptions[0].Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance;
    }

    var ssTraitance1 = this.isNanFunction(
      this.Tab_190.Assistance_maitrise_ouvrage.AMO.SS_Traitance
    );

    this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Construction = 0;
    var s0 = this.isNanFunction(
      this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Construction
    );
    return (this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Construction =
      s0 + ssTraitance1);
  }

  somePrixDeVneteTotaux_TAB10() {
    this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Prix_vente_Constru = 0;
    return (this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Prix_vente_Constru =
      this.isNanFunction(
        this.Tab_190.Assistance_maitrise_ouvrage.Sous_Total_Prix_vente_Constru
      ) +
      this.isNanFunction(
        this.Tab_190.Assistance_maitrise_ouvrage.AMO.Prix_vente_Constru
      ));
  }
    //TAB 11


    sommeDeMarge_TAB11() {
      if (
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance == "" ||
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance == null
      ) {
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance = 0;
        this.Tab_190.Materiel.Matrriels_agricoles.marge_percent =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Matrriels_agricoles
              .marge_percent
          );
        this.Tab_190.Materiel.Matrriels_agricoles.marge_euro = this.isNanFunction(
          this.conceptions[0].Tab_190.Materiel.Matrriels_agricoles.marge_euro
        );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Matrriels_agricoles.SS_Traitance
          );

      var margePercent = this.isNanFunction(
        this.Tab_190.Materiel.Matrriels_agricoles.marge_percent
      )
        ? this.quotion(
            this.isNanFunction(
              this.Tab_190.Materiel.Matrriels_agricoles.marge_percent
            ),
            100
          )
        : this.quotion(
            this.isNanFunction(
              this.conceptions[0].Tab_190.Materiel.Matrriels_agricoles
                .marge_percent
            ),
            100
          );
      var margeEuro = this.isNanFunction(
        this.Tab_190.Materiel.Matrriels_agricoles.marge_euro
      )
        ? this.isNanFunction(this.Tab_190.Materiel.Matrriels_agricoles.marge_euro)
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Matrriels_agricoles.marge_euro
          );

      console.log(
        "margePercent margePercent margePercent",
        margePercent,
        margeEuro,
        ssTraitance
      );

      return (this.Tab_190.Materiel.Matrriels_agricoles.marge_totale =
        this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
    }

    somme_privVente_TAB11() {
      if (
        this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles
          .SS_Traitance == "" ||
        this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles
          .SS_Traitance == null
      ) {
        this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles.SS_Traitance = 0;
        this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles.marge_totale =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Matrriels_agricoles.Process_methanisation
              .marge_totale
          );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles
              .SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_1_Process_methanisation
              .Matrriels_agricoles.SS_Traitance
          );

      var marge_totale = this.isNanFunction(
        this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles.marge_totale
      )
        ? this.isNanFunction(
            this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles
              .marge_totale
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Lot_1_Process_methanisation
              .Matrriels_agricoles.marge_totale
          );

      return (this.Tab_190.Lot_1_Process_methanisation.Matrriels_agricoles.Prix_vente_Constru =
        this.isNanFunction(ssTraitance + marge_totale));
    }

    sommeDeMarge_2TAB11() {
      if (
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance == "" ||
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance == null
      ) {
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance = 0;
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_percent =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
              .marge_percent
          );
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_euro =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
              .marge_euro
          );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
              .SS_Traitance
          );

      var margePercent = this.isNanFunction(
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_percent
      )
        ? this.quotion(
            this.isNanFunction(
              this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_percent
            ),
            100
          )
        : this.quotion(
            this.isNanFunction(
              this.conceptions[0].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
                .marge_percent
            ),
            100
          );
      var margeEuro = this.isNanFunction(
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_euro
      )
        ? this.isNanFunction(
            this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_euro
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
              .marge_euro
          );

      console.log(
        "margePercent margePercent margePercent",
        margePercent,
        margeEuro,
        ssTraitance
      );

      return (this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale =
        this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

      //
    }
    somme_privVente_2TAB1() {
      if (
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance == "" ||
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance == null
      ) {
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance = 0;
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Pont_bascule_Reserve_Incendie
              .marge_totale
          );
      }

      this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.Prix_vente_Constru =
        this.isNanFunction(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale
        ) +
        this.isNanFunction(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance
        );
    }

    sommeDeMarge_3TAB11() {
      if (
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance == "" ||
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance == null
      ) {
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance = 0;
        this.Tab_190.Materiel.Hygenisiation.marge_percent = this.isNanFunction(
          this.conceptions[0].Tab_190.Materiel.Hygenisiation.marge_percent
        );
        this.Tab_190.Materiel.Hygenisiation.marge_euro = this.isNanFunction(
          this.conceptions[0].Tab_190.Materiel.Hygenisiation.marge_euro
        );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance
      )
        ? this.isNanFunction(this.Tab_190.Materiel.Hygenisiation.SS_Traitance)
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Hygenisiation.SS_Traitance
          );

      var margePercent = this.isNanFunction(
        this.Tab_190.Materiel.Hygenisiation.marge_percent
      )
        ? this.quotion(
            this.isNanFunction(this.Tab_190.Materiel.Hygenisiation.marge_percent),
            100
          )
        : this.quotion(
            this.isNanFunction(
              this.conceptions[0].Tab_190.Materiel.Hygenisiation.marge_percent
            ),
            100
          );
      var margeEuro = this.isNanFunction(
        this.Tab_190.Materiel.Hygenisiation.marge_euro
      )
        ? this.isNanFunction(this.Tab_190.Materiel.Hygenisiation.marge_euro)
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Hygenisiation.marge_euro
          );

      console.log(
        "margePercent margePercent margePercent",
        margePercent,
        margeEuro,
        ssTraitance
      );

      return (this.Tab_190.Materiel.Hygenisiation.marge_totale =
        this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
    }
    somme_privVente_3TAB11() {
      if (
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance == "" ||
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance == null
      ) {
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance = 0;
        this.Tab_190.Materiel.Hygenisiation.marge_totale = this.isNanFunction(
          this.conceptions[0].Tab_190.Materiel.Hygenisiation.marge_totale
        );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance
      )
        ? this.isNanFunction(this.Tab_190.Materiel.Hygenisiation.SS_Traitance)
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Hygenisiation.SS_Traitance
          );

      var marge_totale = this.isNanFunction(
        this.Tab_190.Materiel.Hygenisiation.marge_totale
      )
        ? this.isNanFunction(this.Tab_190.Materiel.Hygenisiation.marge_totale)
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Hygenisiation.marge_totale
          );

      return (this.Tab_190.Materiel.Hygenisiation.Prix_vente_Constru =
        this.isNanFunction(ssTraitance + marge_totale));
    }

    sommeDeMarge_4TAB11() {
      if (
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance == "" ||
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance == null
      ) {
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance = 0;
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_percent =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t.marge_percent
          );
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_euro = this.isNanFunction(
          this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t.marge_euro
        );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
          );

      var margePercent = this.isNanFunction(
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_percent
      )
        ? this.quotion(
            this.isNanFunction(
              this.Tab_190.Materiel.Semi_remorque_44_t.marge_percent
            ),
            100
          )
        : this.quotion(
            this.isNanFunction(
              this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t
                .marge_percent
            ),
            100
          );
      var margeEuro = this.isNanFunction(
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_euro
      )
        ? this.isNanFunction(this.Tab_190.Materiel.Semi_remorque_44_t.marge_euro)
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t.marge_euro
          );

      console.log(
        "margePercent margePercent margePercent",
        margePercent,
        margeEuro,
        ssTraitance
      );

      return (this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale =
        this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
    }
    somme_privVente_4TAB11() {
      if (
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance == "" ||
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance == null
      ) {
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance = 0;
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale =
          this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t.marge_totale
          );
      }

      var ssTraitance = this.isNanFunction(
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
      )
        ? this.isNanFunction(
            this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
          );

      var marge_totale = this.isNanFunction(
        this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale
      )
        ? this.isNanFunction(
            this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale
          )
        : this.isNanFunction(
            this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t.marge_totale
          );

      return (this.Tab_190.Materiel.Semi_remorque_44_t.Prix_vente_Constru =
        this.isNanFunction(ssTraitance + marge_totale));
    }



    someMargeTotaux_TAB11() {
      this.Tab_190.Materiel.Marge_totaux = 0;
      return (this.Tab_190.Materiel.Marge_totaux =
        this.isNanFunction(this.Tab_190.Materiel.Marge_totaux) +
        this.isNanFunction(
          this.Tab_190.Materiel.Matrriels_agricoles.marge_totale
        ) +
        this.isNanFunction(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.marge_totale
        ) +
        this.isNanFunction(this.Tab_190.Materiel.Hygenisiation.marge_totale) +
        this.isNanFunction(
          this.Tab_190.Materiel.Semi_remorque_44_t.marge_totale
        ));
    }

    sommeSoutraitanceTotaux_TAB11() {
      if (
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance == null ||
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance == ""
      ) {
        this.Tab_190.Materiel.Matrriels_agricoles.SS_Traitance =
          this.conceptions[0].Tab_190.Materiel.Matrriels_agricoles.SS_Traitance;

        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance =
          this.conceptions[0].Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance;

        this.Tab_190.Materiel.Hygenisiation.SS_Traitance =
          this.conceptions[0].Tab_190.Materiel.Hygenisiation.SS_Traitance;

        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance =
          this.conceptions[0].Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance;
      }

      var ssTraitance1 = this.isNanFunction(
        this.Tab_190.Materiel.Process_methanisation.SS_Traitance
      );
      var ssTraitance2 = this.isNanFunction(
        this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.SS_Traitance
      );
      var ssTraitance3 = this.isNanFunction(
        this.Tab_190.Materiel.Hygenisiation.SS_Traitance
      );
      var ssTraitance4 = this.isNanFunction(
        this.Tab_190.Materiel.Semi_remorque_44_t.SS_Traitance
      );
      this.Tab_190.Materiel.Sous_Total_Construction = 0;
      var s0 = this.isNanFunction(this.Tab_190.Materiel.Sous_Total_Construction);
      return (this.Tab_190.Materiel.Sous_Total_Construction =
        s0 + ssTraitance1 + ssTraitance2 + ssTraitance3 + ssTraitance4);
    }

    somePrixDeVneteTotaux_TAB11() {
      this.Tab_190.Materiel.Sous_Total_Prix_vente_Constru = 0;
      return (this.Tab_190.Materiel.Sous_Total_Prix_vente_Constru =
        this.isNanFunction(this.Tab_190.Materiel.Sous_Total_Prix_vente_Constru) +
        this.isNanFunction(
          this.Tab_190.Materiel.Matrriels_agricoles.Prix_vente_Constru
        ) +
        this.isNanFunction(
          this.Tab_190.Materiel.Pont_bascule_Reserve_Incendie.Prix_vente_Constru
        ) +
        this.isNanFunction(
          this.Tab_190.Materiel.Hygenisiation.Prix_vente_Constru
        ) +
        this.isNanFunction(
          this.Tab_190.Materiel.Semi_remorque_44_t.Prix_vente_Constru
        ));
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
