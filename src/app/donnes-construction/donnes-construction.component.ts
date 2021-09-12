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
    this.id = "6139238a07299040c8e22876";
    this.getDataConstruction();

    console.log("id", this.id);
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

  isNanFunction(val) {
    return isNaN(val) ? 0 : parseFloat(val);
  }

  sommeDeMarge() {
    if (
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance ==
        "" ||
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance ==
        null
    ) {
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance = 0;
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent =
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent;
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro =
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro;
    }

    var ssTraitance = this.isNanFunction(
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance
        )
      : this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .SS_Traitance;

    var margePercent = this.isNanFunction(
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Interet_porteur_projet.Etude_preleminaire_biomasse
              .marge_percent
          ),
          100
        )
      : this.quotion(
          this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
            .marge_percent,
          100
        );
    var margeEuro = this.isNanFunction(
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_euro
        )
      : this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .marge_euro;

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }

  somme_privVente() {
    if (
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance ==
        "" ||
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance ==
        null
    ) {
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance = 0;
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale =
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale;
    }

    this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep =
      this.isNanFunction(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance
      );
      return this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep ;
  }
  sommeDeMarge2() {
    if (
      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance == "" ||
      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance == null
    ) {
      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance = 0;
      this.Interet_porteur_projet.Rapport_prefaisabilite.marge_percent =
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite.marge_percent;
      this.Interet_porteur_projet.Rapport_prefaisabilite.marge_euro =
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite.marge_euro;
    }

    var ssTraitance = this.isNanFunction(
      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance
        )
      : this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
          .SS_Traitance;
    var margePercent = this.isNanFunction(
      this.Interet_porteur_projet.Rapport_prefaisabilite.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Interet_porteur_projet.Rapport_prefaisabilite.marge_percent
          ),
          100
        )
      : this.quotion(
          this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
            .marge_percent,
          100
        );
    var margeEuro = this.isNanFunction(
      this.Interet_porteur_projet.Rapport_prefaisabilite.marge_euro
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Rapport_prefaisabilite.marge_euro
        )
      : this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
          .marge_euro;

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente2() {
    if (
      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance == "" ||
      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance == null
    ) {
      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance = 0;
      this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale =
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite.marge_totale;
    }

    this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep =
      this.isNanFunction(
        this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance
      );
      return  this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep;
  }

  sommeDeMarge3() {
    if (
      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance ==
        "" ||
      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance ==
        null
    ) {
      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance = 0;
      this.Interet_porteur_projet.Impact_economique_exploitant.marge_percent =
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant.marge_percent;
      this.Interet_porteur_projet.Impact_economique_exploitant.marge_euro =
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant.marge_euro;
    }

    var ssTraitance = this.isNanFunction(
      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance
        )
      : this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
          .SS_Traitance;
    var margePercent = this.isNanFunction(
      this.Interet_porteur_projet.Impact_economique_exploitant.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Interet_porteur_projet.Impact_economique_exploitant
              .marge_percent
          ),
          100
        )
      : this.quotion(
          this.conceptions[0].Interet_porteur_projet
            .Impact_economique_exploitant.marge_percent,
          100
        );
    var margeEuro = this.isNanFunction(
      this.Interet_porteur_projet.Impact_economique_exploitant.marge_euro
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Impact_economique_exploitant.marge_euro
        )
      : this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
          .marge_euro;

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente3() {
    if (
      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance ==
        "" ||
      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance ==
        null
    ) {
      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance = 0;
      this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale =
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant.marge_totale;
    }
   return  this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep =
      this.isNanFunction(
        this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance
      );
  }

  sommeDeMarge4() {
    if (
      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance == "" ||
      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance == null
    ) {
      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance = 0;
      this.Interet_porteur_projet.Bilan_agronomique_sols.marge_percent =
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.marge_percent;
      this.Interet_porteur_projet.Bilan_agronomique_sols.marge_euro =
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.marge_euro;
    }

    var ssTraitance = this.isNanFunction(
      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance
        )
      : this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
          .SS_Traitance;
    var margePercent = this.isNanFunction(
      this.Interet_porteur_projet.Bilan_agronomique_sols.marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Interet_porteur_projet.Bilan_agronomique_sols.marge_percent
          ),
          100
        )
      : this.quotion(
          this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
            .marge_percent,
          100
        );
    var margeEuro = this.isNanFunction(
      this.Interet_porteur_projet.Bilan_agronomique_sols.marge_euro
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Bilan_agronomique_sols.marge_euro
        )
      : this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
          .marge_euro;

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente4() {
    if (
      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance == "" ||
      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance == null
    ) {
      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance = 0;
      this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale =
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.marge_totale;
    }
    return this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep =
      this.isNanFunction(
        this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance
      );
  }
  sommeDeMarge5() {
    if (
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
        .SS_Traitance == "" ||
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
        .SS_Traitance == null
    ) {
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance = 0;
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_percent =
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_percent;
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_euro =
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_euro;
    }

    var ssTraitance = this.isNanFunction(
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .SS_Traitance
        )
      : this.conceptions[0].Interet_porteur_projet
          .Apres_Avis_favorable_Creation_SPV.SS_Traitance;
    var margePercent = this.isNanFunction(
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
        .marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
              .marge_percent
          ),
          100
        )
      : this.quotion(
          this.conceptions[0].Interet_porteur_projet
            .Apres_Avis_favorable_Creation_SPV.marge_percent,
          100
        );
    var margeEuro = this.isNanFunction(
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_euro
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .marge_euro
        )
      : this.conceptions[0].Interet_porteur_projet
          .Apres_Avis_favorable_Creation_SPV.marge_euro;

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente5() {
    if (
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
        .SS_Traitance == "" ||
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
        .SS_Traitance == null
    ) {
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance = 0;
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale =
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.marge_totale;
    }
    return this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep =
      this.isNanFunction(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
          .marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
          .SS_Traitance
      );
  }

  someMargeTotaux() {
    this.Interet_porteur_projet.Marge_totaux = 0;
    return (this.Interet_porteur_projet.Marge_totaux =
      this.isNanFunction(this.Interet_porteur_projet.Marge_totaux) +
      this.isNanFunction(
        this.Interet_porteur_projet.Etude_preleminaire_biomasse.marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Rapport_prefaisabilite.marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Impact_economique_exploitant.marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Bilan_agronomique_sols.marge_totale
      ) +
      this.isNanFunction(
        this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
          .marge_totale
      ));

    // else {
    //   return (this.Interet_porteur_projet.Marge_totaux =
    //     this.Interet_porteur_projet.Marge_totaux.toString() + ".00");
    // }
  }

  sommeSoutraitanceTotaux() {
    if (
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance ==
        null ||
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance == ""
    ) {
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance =
        this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance;

      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance =
        this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance;

      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance =
        this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance;

      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance =
        this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance;

      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance =
        this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance;
    }

    var ssTraitance1 = this.isNanFunction(
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.SS_Traitance
    );
    var ssTraitance2 = this.isNanFunction(
      this.Interet_porteur_projet.Rapport_prefaisabilite.SS_Traitance
    );
    var ssTraitance3 = this.isNanFunction(
      this.Interet_porteur_projet.Impact_economique_exploitant.SS_Traitance
    );
    var ssTraitance4 = this.isNanFunction(
      this.Interet_porteur_projet.Bilan_agronomique_sols.SS_Traitance
    );
    var ssTraitance5 = this.isNanFunction(
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.SS_Traitance
    );

    this.Interet_porteur_projet.Sous_Total_Conception = 0;
    var s0 = this.isNanFunction(
      this.Interet_porteur_projet.Sous_Total_Conception
    );
    return (this.Interet_porteur_projet.Sous_Total_Conception =
      s0 +
      ssTraitance1 +
      ssTraitance2 +
      ssTraitance3 +
      ssTraitance4 +
      ssTraitance5);
  }

  somePrixDeVneteTotaux() {

    if (
      this.Interet_porteur_projet.Etude_preleminaire_biomasse
        .Prix_vente_Concep == null ||
      this.Interet_porteur_projet.Etude_preleminaire_biomasse
        .Prix_vente_Concep == ""
    ) {
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep);

      this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep);

      this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep);

      this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep);

      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep);
    }

    var ssTraitance1 = this.isNanFunction(
      this.Interet_porteur_projet.Etude_preleminaire_biomasse.Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Etude_preleminaire_biomasse
            .Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Etude_preleminaire_biomasse
          .Prix_vente_Concep);
    var ssTraitance2 = this.isNanFunction(
      this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Rapport_prefaisabilite.Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Rapport_prefaisabilite
          .Prix_vente_Concep);

    var ssTraitance3 = this.isNanFunction(
      this.Interet_porteur_projet.Impact_economique_exploitant.Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Impact_economique_exploitant
            .Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Impact_economique_exploitant
          .Prix_vente_Concep);
    var ssTraitance4 = this.isNanFunction(
      this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Bilan_agronomique_sols.Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Bilan_agronomique_sols
          .Prix_vente_Concep);
    var ssTraitance5 = this.isNanFunction(
      this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
        .Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Apres_Avis_favorable_Creation_SPV
            .Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Interet_porteur_projet
          .Apres_Avis_favorable_Creation_SPV.Prix_vente_Concep);

    this.Interet_porteur_projet.Sous_Total_Prix_vente_Concep = 0;
    var s0 = this.isNanFunction(
      this.Interet_porteur_projet.Sous_Total_Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Interet_porteur_projet.Sous_Total_Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Interet_porteur_projet.Sous_Total_Prix_vente_Concep);
    return this.Interet_porteur_projet.Sous_Total_Prix_vente_Concep =

      ssTraitance1 +
      ssTraitance2 +
      ssTraitance3 +
      ssTraitance4 +
      ssTraitance5;
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

  sommeDeMarge_TAB2() {
    if (
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .SS_Traitance == "" ||
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .SS_Traitance == null
    ) {
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.SS_Traitance = 0;
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.marge_percent =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.marge_percent);
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.marge_euro =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .SS_Traitance
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet
            .Cibler_besoins_complementaires_nutritionnels.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Etude_biomasse_projet
          .Cibler_besoins_complementaires_nutritionnels.SS_Traitance);

    var margePercent = this.isNanFunction(
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Etude_biomasse_projet
              .Cibler_besoins_complementaires_nutritionnels.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Etude_biomasse_projet
              .Cibler_besoins_complementaires_nutritionnels.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .marge_euro
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet
            .Cibler_besoins_complementaires_nutritionnels.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Cibler_besoins_complementaires_nutritionnels.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }

  somme_privVente_TAB2() {
    if (
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .SS_Traitance == "" ||
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .SS_Traitance == null
    ) {
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.SS_Traitance = 0;
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Cibler_besoins_complementaires_nutritionnels.marge_totale
        );
    }

    this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.Prix_vente_Concep =
      this.isNanFunction(
        this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
          .marge_totale
      ) +
      this.isNanFunction(
        this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
          .SS_Traitance
      );
  }

  sommeDeMarge2TAB2() {
    if (
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
        .SS_Traitance == "" ||
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
        .SS_Traitance == null
    ) {
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance = 0;
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_percent =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_percent);
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_euro =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
        .SS_Traitance
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet
            .Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance
        )
      : this.isNanFunction(this.conceptions[0].Etude_biomasse_projet
          .Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance);
    var margePercent = this.isNanFunction(
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
        .marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Etude_biomasse_projet
              .Rapport_etude_approfondi_pouvoir_meethanogeene.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Etude_biomasse_projet
              .Rapport_etude_approfondi_pouvoir_meethanogeene.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
        .marge_euro
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet
            .Rapport_etude_approfondi_pouvoir_meethanogeene.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Rapport_etude_approfondi_pouvoir_meethanogeene.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente2TAB2() {
    //
    if (
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
        .SS_Traitance == "" ||
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
        .SS_Traitance == null
    ) {
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance = 0;
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_totale =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.marge_totale);
    }

  return   this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.Prix_vente_Concep =
      this.isNanFunction(
        this.Etude_biomasse_projet
          .Rapport_etude_approfondi_pouvoir_meethanogeene.marge_totale
      ) +
      this.isNanFunction(
        this.Etude_biomasse_projet
          .Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance
      );
  }

  sommeDeMarge3TAB2() {
    if (
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
        .SS_Traitance == "" ||
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
        .SS_Traitance == null
    ) {
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance = 0;
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.marge_percent =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.marge_percent);
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.marge_euro =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.marge_euro);
    }

    var ssTraitance = this.isNanFunction(
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
        .SS_Traitance
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet
            .Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance
        );
    var margePercent = this.isNanFunction(
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
        .marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Etude_biomasse_projet
              .Apport_supplementaire_intrants_reseau_ENR_Agri.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Etude_biomasse_projet
              .Apport_supplementaire_intrants_reseau_ENR_Agri.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
        .marge_euro
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet
            .Apport_supplementaire_intrants_reseau_ENR_Agri.marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Apport_supplementaire_intrants_reseau_ENR_Agri.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente3TAB2() {
    if (
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
        .SS_Traitance == "" ||
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
        .SS_Traitance == null
    ) {
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance = 0;
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Apport_supplementaire_intrants_reseau_ENR_Agri.marge_totale
        );
    }
   return  this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.Prix_vente_Concep =
      this.isNanFunction(
        this.Etude_biomasse_projet
          .Apport_supplementaire_intrants_reseau_ENR_Agri.marge_totale
      ) +
      this.isNanFunction(
        this.Etude_biomasse_projet
          .Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance
      );
  }

  sommeDeMarge4TAB2() {
    if (
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
        .SS_Traitance == "" ||
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
        .SS_Traitance == null
    ) {
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.SS_Traitance = 0;
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.marge_percent =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Assistance_juridique_Apporteur_substrat_SPV.marge_percent
        );
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.marge_euro =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Assistance_juridique_Apporteur_substrat_SPV.marge_euro
        );
    }

    var ssTraitance = this.isNanFunction(
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
        .SS_Traitance
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
            .SS_Traitance
        )
      : this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Assistance_juridique_Apporteur_substrat_SPV.SS_Traitance
        );
    var margePercent = this.isNanFunction(
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
        .marge_percent
    )
      ? this.quotion(
          this.isNanFunction(
            this.Etude_biomasse_projet
              .Assistance_juridique_Apporteur_substrat_SPV.marge_percent
          ),
          100
        )
      : this.quotion(
          this.isNanFunction(
            this.conceptions[0].Etude_biomasse_projet
              .Assistance_juridique_Apporteur_substrat_SPV.marge_percent
          ),
          100
        );
    var margeEuro = this.isNanFunction(
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
        .marge_euro
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
            .marge_euro
        )
      : this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Assistance_juridique_Apporteur_substrat_SPV.marge_euro
        );

    console.log(
      "margePercent margePercent margePercent",
      margePercent,
      margeEuro,
      ssTraitance
    );

    return (this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.marge_totale =
      this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
  }
  somme_privVente4TAB2() {
    if (
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
        .SS_Traitance == "" ||
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
        .SS_Traitance == null
    ) {
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.SS_Traitance = 0;
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.marge_totale =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Assistance_juridique_Apporteur_substrat_SPV.marge_totale
        );
    }
   return  this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.Prix_vente_Concep =
      this.isNanFunction(
        this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
          .marge_totale
      ) +
      this.isNanFunction(
        this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
          .SS_Traitance
      );
  }

  someMargeTotauxTAB2() {
    this.Etude_biomasse_projet.Marge_totaux = 0;
    return (this.Etude_biomasse_projet.Marge_totaux =
      this.isNanFunction(this.Etude_biomasse_projet.Marge_totaux) +
      this.isNanFunction(
        this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
          .marge_totale
      ) +
      this.isNanFunction(
        this.Etude_biomasse_projet
          .Rapport_etude_approfondi_pouvoir_meethanogeene.marge_totale
      ) +
      this.isNanFunction(
        this.Etude_biomasse_projet
          .Apport_supplementaire_intrants_reseau_ENR_Agri.marge_totale
      ) +
      this.isNanFunction(
        this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
          .marge_totale
      ));

    // else {
    //   return (this.Interet_porteur_projet.Marge_totaux =
    //     this.Interet_porteur_projet.Marge_totaux.toString() + ".00");
    // }
  }

  sommeSoutraitanceTotauxTAB2() {
    if (
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .SS_Traitance == null ||
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .SS_Traitance == ""
    ) {
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Cibler_besoins_complementaires_nutritionnels.SS_Traitance
        );

      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Rapport_etude_approfondi_pouvoir_meethanogeene.SS_Traitance
        );

      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Apport_supplementaire_intrants_reseau_ENR_Agri.SS_Traitance
        );

      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.SS_Traitance =
        this.isNanFunction(
          this.conceptions[0].Etude_biomasse_projet
            .Assistance_juridique_Apporteur_substrat_SPV.SS_Traitance
        );
    }

    var ssTraitance1 = this.isNanFunction(
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .SS_Traitance
    );
    var ssTraitance2 = this.isNanFunction(
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
        .SS_Traitance
    );
    var ssTraitance3 = this.isNanFunction(
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
        .SS_Traitance
    );
    var ssTraitance4 = this.isNanFunction(
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
        .SS_Traitance
    );

    this.Etude_biomasse_projet.Sous_Total_Conception = 0;
    var s0 = this.isNanFunction(
      this.Etude_biomasse_projet.Sous_Total_Conception
    );
    return (this.Etude_biomasse_projet.Sous_Total_Conception =
      s0 + ssTraitance1 + ssTraitance2 + ssTraitance3 + ssTraitance4);
  }

  somePrixDeVneteTotauxTAB2() {
    if (
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .Prix_vente_Concep == null ||
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
        .Prix_vente_Concep == ""
    ) {
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.Prix_vente_Concep);

      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.Prix_vente_Concep);

      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.Prix_vente_Concep);

      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.Prix_vente_Concep =
      this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.Prix_vente_Concep);


    }

    var ssTraitance1 = this.isNanFunction(
      this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels.Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
            .Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Cibler_besoins_complementaires_nutritionnels
          .Prix_vente_Concep);
    var ssTraitance2 = this.isNanFunction(
      this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene.Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Rapport_etude_approfondi_pouvoir_meethanogeene
          .Prix_vente_Concep);

    var ssTraitance3 = this.isNanFunction(
      this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri.Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
            .Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Apport_supplementaire_intrants_reseau_ENR_Agri
          .Prix_vente_Concep);
    var ssTraitance4 = this.isNanFunction(
      this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV.Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Assistance_juridique_Apporteur_substrat_SPV
          .Prix_vente_Concep);


    this.Etude_biomasse_projet.Sous_Total_Prix_vente_Concep = 0;
    var s0 = this.isNanFunction(
      this.Etude_biomasse_projet.Sous_Total_Prix_vente_Concep
    )
      ? this.isNanFunction(
          this.Etude_biomasse_projet.Sous_Total_Prix_vente_Concep
        )
      : this.isNanFunction(this.conceptions[0].Etude_biomasse_projet.Sous_Total_Prix_vente_Concep);
    return (this.Etude_biomasse_projet.Sous_Total_Prix_vente_Concep =

      +ssTraitance1 +
      +ssTraitance2 +
      +ssTraitance3 +
      +ssTraitance4
      );

  }
//Tab3
Etude_fonciere_projet:any= {
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
}

sommeDeMarge_foncier() {
  if (
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance = 0;
    this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_percent =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site.marge_percent);
    this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_euro =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Etude_fonciere_projet.Optimisation_emplacement_site
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_euro
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_foncier(){

  if (
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance = 0;
    this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_totale =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site.marge_totale);
  }



var ssTraitance = this.isNanFunction(
this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance
)
? this.isNanFunction(
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance
  )
: this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site
    .SS_Traitance);

var marge_totale = this.isNanFunction(
this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_totale
)
?
    this.isNanFunction(
      this.Etude_fonciere_projet.Optimisation_emplacement_site
        .marge_totale)

:
this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site
      .marge_totale);


return (this.Etude_fonciere_projet.Optimisation_emplacement_site.Prix_vente_Concep =
  this.isNanFunction(ssTraitance + marge_totale));


}

sommeDeMarge_foncier1() {
  if (
    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance = 0;
    this.Etude_fonciere_projet.Releve_topographique.marge_percent =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Releve_topographique.marge_percent);
    this.Etude_fonciere_projet.Releve_topographique.marge_euro =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Releve_topographique.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Releve_topographique.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Releve_topographique
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.Etude_fonciere_projet.Releve_topographique.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Etude_fonciere_projet.Releve_topographique
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Releve_topographique
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Etude_fonciere_projet.Releve_topographique.marge_euro
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Releve_topographique.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Releve_topographique
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Etude_fonciere_projet.Releve_topographique.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_foncier1(){
  if (
    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance = 0;
    this.Etude_fonciere_projet.Releve_topographique.marge_totale =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Releve_topographique.marge_totale);
  }

 return  this.Etude_fonciere_projet.Releve_topographique.Prix_vente_Concep =
    this.isNanFunction(
      this.Etude_fonciere_projet.Releve_topographique.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Releve_topographique.SS_Traitance
    );


}


sommeDeMarge_foncier2() {
  if (
    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance = 0;
    this.Etude_fonciere_projet.Rapport_geometre.marge_percent =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Rapport_geometre.marge_percent);
    this.Etude_fonciere_projet.Rapport_geometre.marge_euro =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Rapport_geometre.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Rapport_geometre
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.Etude_fonciere_projet.Rapport_geometre.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Etude_fonciere_projet.Rapport_geometre
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Rapport_geometre
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Etude_fonciere_projet.Rapport_geometre.marge_euro
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Rapport_geometre.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Rapport_geometre
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Etude_fonciere_projet.Rapport_geometre.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
//

}
somme_privVente_foncier2(){

  if (
    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance = 0;
    this.Etude_fonciere_projet.Rapport_geometre.marge_totale =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Rapport_geometre.marge_totale);
  }

return  this.Etude_fonciere_projet.Rapport_geometre.Prix_vente_Concep =
    this.isNanFunction(
      this.Etude_fonciere_projet.Rapport_geometre.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance
    );


}


sommeDeMarge_foncier3() {

  if (
    this.Etude_fonciere_projet.Plan_masse.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Plan_masse.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Plan_masse.SS_Traitance = 0;
    this.Etude_fonciere_projet.Plan_masse.marge_percent =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Plan_masse.marge_percent);
    this.Etude_fonciere_projet.Plan_masse.marge_euro =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Plan_masse.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.Etude_fonciere_projet.Plan_masse.SS_Traitance
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Plan_masse.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Plan_masse
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.Etude_fonciere_projet.Plan_masse.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Etude_fonciere_projet.Plan_masse
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Plan_masse
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Etude_fonciere_projet.Plan_masse.marge_euro
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Plan_masse.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Plan_masse
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Etude_fonciere_projet.Plan_masse.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_foncier3(){
  if (
    this.Etude_fonciere_projet.Plan_masse.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Plan_masse.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Plan_masse.SS_Traitance = 0;
    this.Etude_fonciere_projet.Plan_masse.marge_totale =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Plan_masse.marge_totale);
  }

 return  this.Etude_fonciere_projet.Plan_masse.Prix_vente_Concep =
    this.isNanFunction(
      this.Etude_fonciere_projet.Plan_masse.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Plan_masse.SS_Traitance
    );



}

sommeDeMarge_foncier4() {
  if (
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance = 0;
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_percent =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_percent);
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_euro =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Etude_fonciere_projet.Analyse_geotechnique_primaire
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_euro
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

}
somme_privVente_foncier4(){

  if (
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance = 0;
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_totale =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_totale);
  }

  this.Etude_fonciere_projet.Analyse_geotechnique_primaire.Prix_vente_Concep =
    this.isNanFunction(
      this.Etude_fonciere_projet.Analyse_geotechnique_primaire.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance
    );
}

sommeDeMarge_foncier5() {
  if (
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance = 0;
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_percent =
      this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_percent;
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_euro =
      this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance
      )
    : this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Etude_fonciere_projet.Analyse_geotechnique_approfondie
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_euro
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_euro
      )
    : this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_foncier5(){
  if (
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance = 0;
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_totale =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_totale);
  }

  this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.Prix_vente_Concep =
    this.isNanFunction(
      this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance
    );


}
sommeDeMarge_foncier6() {
  if (
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance = 0;
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_percent =
      this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_percent;
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_euro =
      this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance
      )
    : this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_euro
  )
    ? this.isNanFunction(
        this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_euro
      )
    : this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));


}
somme_privVente_foncier6(){
  if (
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance ==
      "" ||
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance ==
      null
  ) {
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance = 0;
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_totale =
    this.isNanFunction(this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_totale);
  }

  this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.Prix_vente_Concep =
    this.isNanFunction(
      this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance
    );


}
someMargeTotaux_foncier() {
  this.Etude_fonciere_projet.Marge_totaux = 0;
  return (this.Etude_fonciere_projet.Marge_totaux =
    this.isNanFunction(this.Etude_fonciere_projet.Marge_totaux) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Optimisation_emplacement_site.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Releve_topographique.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Rapport_geometre.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Plan_masse.marge_totale
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Analyse_geotechnique_primaire
        .marge_totale
    )+
    this.isNanFunction(
      this.Etude_fonciere_projet.Analyse_geotechnique_approfondie
        .marge_totale
    )+
    this.isNanFunction(
      this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV
        .marge_totale
    ));


}

sommeSoutraitanceTotaux_foncier() {
  if (
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance ==
      null ||
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance == ""
  ) {
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance =
      this.conceptions[0].Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance;

    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance =
      this.conceptions[0].Etude_fonciere_projet.Releve_topographique.SS_Traitance;

    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance =
      this.conceptions[0].Etude_fonciere_projet.Rapport_geometre.SS_Traitance;

    this.Etude_fonciere_projet.Plan_masse.SS_Traitance =
      this.conceptions[0].Etude_fonciere_projet.Plan_masse.SS_Traitance;

    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance =
      this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance;
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance =
      this.conceptions[0].Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance;
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance =
      this.conceptions[0].Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance;
  }

  var ssTraitance1 = this.isNanFunction(
    this.Etude_fonciere_projet.Optimisation_emplacement_site.SS_Traitance
  );
  var ssTraitance2 = this.isNanFunction(
    this.Etude_fonciere_projet.Releve_topographique.SS_Traitance
  );
  var ssTraitance3 = this.isNanFunction(
    this.Etude_fonciere_projet.Rapport_geometre.SS_Traitance
  );
  var ssTraitance4 = this.isNanFunction(
    this.Etude_fonciere_projet.Plan_masse.SS_Traitance
  );
  var ssTraitance5 = this.isNanFunction(
    this.Etude_fonciere_projet.Analyse_geotechnique_primaire.SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.Etude_fonciere_projet.Analyse_geotechnique_approfondie.SS_Traitance
  );
  var ssTraitance7 = this.isNanFunction(
    this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV.SS_Traitance
  );

  this.Etude_fonciere_projet.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.Etude_fonciere_projet.Sous_Total_Conception
  );
  return (this.Etude_fonciere_projet.Sous_Total_Conception =

    +ssTraitance1 +
    +ssTraitance2 +
    +ssTraitance3 +
    +ssTraitance4 +
    +ssTraitance5+
    +ssTraitance6+
    +ssTraitance7);
}

somePrixDeVneteTotaux_foncier() {
  this.Etude_fonciere_projet.Sous_Total_Prix_vente_Concep = 0;
  return (this.Etude_fonciere_projet.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(this.Etude_fonciere_projet.Sous_Total_Prix_vente_Concep) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Optimisation_emplacement_site.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Releve_topographique.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Rapport_geometre.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Plan_masse.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.Etude_fonciere_projet.Analyse_geotechnique_primaire
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.Etude_fonciere_projet.Analyse_geotechnique_approfondie
        .Prix_vente_Concep
    )+
    this.isNanFunction(
      this.Etude_fonciere_projet.Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV
        .Prix_vente_Concep
    ));
}
//Tab4
sercurisation_gaziers:any= {
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
}
sommeDeMarge_gaz1() {
  if (
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance ==
      "" ||
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance ==
      null
  ) {
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance = 0;
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_percent =
      this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_percent;
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_euro =
      this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance
  )
    ? this.isNanFunction(
        this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance
      )
    : this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_euro
  )
    ? this.isNanFunction(
        this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_euro
      )
    : this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

}
somme_privVente_gaz1(){

  if (
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance ==
      "" ||
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance ==
      null
  ) {
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance = 0;
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_totale =
      this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_totale;
  }

 return this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.Prix_vente_Concep =
    this.isNanFunction(
      this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_totale
    ) +
    this.isNanFunction(
      this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance
    );
}

sommeDeMarge_gaz2() {
  if (
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance ==
      "" ||
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance ==
      null
  ) {
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance = 0;
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_percent =
      this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_percent;
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_euro =
      this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance
  )
    ? this.isNanFunction(
        this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance
      )
    : this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_euro
  )
    ? this.isNanFunction(
        this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_euro
      )
    : this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_gaz2(){
  if (
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance ==
      "" ||
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance ==
      null
  ) {
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance = 0;
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_totale =
      this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_totale;
  }

 return this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.Prix_vente_Concep =
    this.isNanFunction(
      this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_totale
    ) +
    this.isNanFunction(
      this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance
    );


}
sommeDeMarge_gaz3() {
  if (
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance ==
      "" ||
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance ==
      null
  ) {
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance = 0;
    this.sercurisation_gaziers.Contrat_vente_biomethane.marge_percent =
      this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane.marge_percent;
    this.sercurisation_gaziers.Contrat_vente_biomethane.marge_euro =
      this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance
  )
    ? this.isNanFunction(
        this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance
      )
    : this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.sercurisation_gaziers.Contrat_vente_biomethane.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.sercurisation_gaziers.Contrat_vente_biomethane
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.sercurisation_gaziers.Contrat_vente_biomethane.marge_euro
  )
    ? this.isNanFunction(
        this.sercurisation_gaziers.Contrat_vente_biomethane.marge_euro
      )
    : this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.sercurisation_gaziers.Contrat_vente_biomethane.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));


}
somme_privVente_gaz3(){
  if (
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance ==
      "" ||
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance ==
      null
  ) {
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance = 0;
    this.sercurisation_gaziers.Contrat_vente_biomethane.marge_totale =
      this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane.marge_totale;
  }

 return this.sercurisation_gaziers.Contrat_vente_biomethane.Prix_vente_Concep =
    this.isNanFunction(
      this.sercurisation_gaziers.Contrat_vente_biomethane.marge_totale
    ) +
    this.isNanFunction(
      this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance
    );


}
someMargeTotaux_gaz() {
  this.sercurisation_gaziers.Marge_totaux = 0;
  return (this.sercurisation_gaziers.Marge_totaux =
    this.isNanFunction(this.sercurisation_gaziers.Marge_totaux) +
    this.isNanFunction(
      this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.marge_totale
    ) +
    this.isNanFunction(
      this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.marge_totale
    ) +
    this.isNanFunction(
      this.sercurisation_gaziers.Contrat_vente_biomethane.marge_totale
    ) );


}

sommeSoutraitanceTotaux_gaz() {
  if (
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance ==
      null ||
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance == ""
  ) {



    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance =
      this.conceptions[0].sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance;
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance =
      this.conceptions[0].sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance;
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance =
      this.conceptions[0].sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance;
  }


  var ssTraitance5 = this.isNanFunction(
    this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz.SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau.SS_Traitance
  );
  var ssTraitance7 = this.isNanFunction(
    this.sercurisation_gaziers.Contrat_vente_biomethane.SS_Traitance
  );

  this.sercurisation_gaziers.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.sercurisation_gaziers.Sous_Total_Conception
  );
  return (this.sercurisation_gaziers.Sous_Total_Conception =
    s0 +

    ssTraitance5+
    ssTraitance6+
    ssTraitance7);
}

somePrixDeVneteTotaux_gaz() {
  this.sercurisation_gaziers.Sous_Total_Prix_vente_Concep = 0;
  return (this.sercurisation_gaziers.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(this.sercurisation_gaziers.Sous_Total_Prix_vente_Concep) +

    this.isNanFunction(
      this.sercurisation_gaziers.etude_detaille_reseau_transport__distribution_gaz
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.sercurisation_gaziers.Convention_raccordement_gestionnaire_reseau
        .Prix_vente_Concep
    )+
    this.isNanFunction(
      this.sercurisation_gaziers.Contrat_vente_biomethane
        .Prix_vente_Concep
    ));
}


//Tab5
valorisation_digestat: any={
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
  Marge_totaux:"",
}

sommeDeMarge_val() {
  if (
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance ==
      "" ||
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance = 0;
    this.valorisation_digestat.etude_qualite_digestat.marge_percent =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.etude_qualite_digestat.marge_percent);
    this.valorisation_digestat.etude_qualite_digestat.marge_euro =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.etude_qualite_digestat.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance
  )
    ? this.isNanFunction(
        this.valorisation_digestat.etude_qualite_digestat.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.etude_qualite_digestat
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.valorisation_digestat.etude_qualite_digestat.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.valorisation_digestat.etude_qualite_digestat
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].valorisation_digestat.etude_qualite_digestat
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.valorisation_digestat.etude_qualite_digestat.marge_euro
  )
    ? this.isNanFunction(
        this.valorisation_digestat.etude_qualite_digestat.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.etude_qualite_digestat
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.valorisation_digestat.etude_qualite_digestat.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_val(){






  if (
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance ==
      "" ||
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance = 0;
    this.valorisation_digestat.etude_qualite_digestat.marge_totale =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.etude_qualite_digestat.marge_totale);
  }



var ssTraitance = this.isNanFunction(
this.valorisation_digestat.etude_qualite_digestat.SS_Traitance
)
? this.isNanFunction(
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance
  )
: this.isNanFunction(this.conceptions[0].valorisation_digestat.etude_qualite_digestat
    .SS_Traitance);

var marge_totale = this.isNanFunction(
this.valorisation_digestat.etude_qualite_digestat.marge_totale
)
?
    this.isNanFunction(
      this.valorisation_digestat.etude_qualite_digestat
        .marge_totale)

:
this.isNanFunction(this.conceptions[0].valorisation_digestat.etude_qualite_digestat
      .marge_totale);


return (this.valorisation_digestat.etude_qualite_digestat.Prix_vente_Concep =
  this.isNanFunction(ssTraitance + marge_totale));


}

sommeDeMarge_val1() {
  if (
    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance = 0;
    this.valorisation_digestat.Diagnostic_zone_epandable.marge_percent =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable.marge_percent);
    this.valorisation_digestat.Diagnostic_zone_epandable.marge_euro =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.valorisation_digestat.Diagnostic_zone_epandable.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.valorisation_digestat.Diagnostic_zone_epandable
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.valorisation_digestat.Diagnostic_zone_epandable.marge_euro
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Diagnostic_zone_epandable.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.valorisation_digestat.Diagnostic_zone_epandable.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_val1(){
  if (
    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance = 0;
    this.valorisation_digestat.Diagnostic_zone_epandable.marge_totale =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable.marge_totale);
  }

 return this.valorisation_digestat.Diagnostic_zone_epandable.Prix_vente_Concep =
    this.isNanFunction(
      this.valorisation_digestat.Diagnostic_zone_epandable.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance
    );


}


sommeDeMarge_val2() {
  if (
    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance = 0;
    this.valorisation_digestat.Chiffrage_budget_epandage.marge_percent =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage.marge_percent);
    this.valorisation_digestat.Chiffrage_budget_epandage.marge_euro =
      this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.valorisation_digestat.Chiffrage_budget_epandage.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.valorisation_digestat.Chiffrage_budget_epandage
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.valorisation_digestat.Chiffrage_budget_epandage.marge_euro
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Chiffrage_budget_epandage.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.valorisation_digestat.Chiffrage_budget_epandage.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
//

}
somme_privVente_val2(){

  if (
    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance = 0;
    this.valorisation_digestat.Chiffrage_budget_epandage.marge_totale =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage.marge_totale);
  }

 return this.valorisation_digestat.Chiffrage_budget_epandage.Prix_vente_Concep =
    this.isNanFunction(
      this.valorisation_digestat.Chiffrage_budget_epandage.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance
    );


}


sommeDeMarge_val3() {

  if (
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance = 0;
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_percent =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage.marge_percent);
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_euro =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.valorisation_digestat.Dossier_autorisation_plan_epandage
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_euro
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_val3(){
  if (
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance = 0;
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_totale =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage.marge_totale);
  }

 return this.valorisation_digestat.Dossier_autorisation_plan_epandage.Prix_vente_Concep =
    this.isNanFunction(
      this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance
    );



}

sommeDeMarge_val4() {
  if (
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance = 0;
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_percent =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_percent);
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_euro =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_euro
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

}
somme_privVente_val4(){

  if (
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance = 0;
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_totale =
    this.isNanFunction(this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_totale);
  }

  return this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.Prix_vente_Concep =
    this.isNanFunction(
      this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance
    );
}

sommeDeMarge_val5() {
  if (
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance = 0;
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_percent =
      this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_percent;
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_euro =
      this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance
      )
    : this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_euro
  )
    ? this.isNanFunction(
        this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_euro
      )
    : this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_val5(){
  if (
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance ==
      "" ||
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance ==
      null
  ) {
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance = 0;
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_totale =
      this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_totale;
  }

  return this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.Prix_vente_Concep =
    this.isNanFunction(
      this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance
    );


}


someMargeTotaux_val() {

  this.valorisation_digestat.Marge_totaux = 0;
  return (this.valorisation_digestat.Marge_totaux =
    this.isNanFunction(this.valorisation_digestat.Marge_totaux) +
    this.isNanFunction(
      this.valorisation_digestat.etude_qualite_digestat.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Diagnostic_zone_epandable.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Chiffrage_budget_epandage.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Dossier_autorisation_plan_epandage.marge_totale
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
        .marge_totale
    )+
    this.isNanFunction(
      this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
        .marge_totale
    ));


}

sommeSoutraitanceTotaux_val() {
  if (
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance ==
      null ||
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance == ""
  ) {
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance =
      this.conceptions[0].valorisation_digestat.etude_qualite_digestat.SS_Traitance;

    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance =
      this.conceptions[0].valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance;

    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance =
      this.conceptions[0].valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance;

    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance =
      this.conceptions[0].valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance;

    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance =
      this.conceptions[0].valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance;
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance =
      this.conceptions[0].valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance;

  }

  var ssTraitance1 = this.isNanFunction(
    this.valorisation_digestat.etude_qualite_digestat.SS_Traitance
  );
  var ssTraitance2 = this.isNanFunction(
    this.valorisation_digestat.Diagnostic_zone_epandable.SS_Traitance
  );
  var ssTraitance3 = this.isNanFunction(
    this.valorisation_digestat.Chiffrage_budget_epandage.SS_Traitance
  );
  var ssTraitance4 = this.isNanFunction(
    this.valorisation_digestat.Dossier_autorisation_plan_epandage.SS_Traitance
  );
  var ssTraitance5 = this.isNanFunction(
    this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat.SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV.SS_Traitance
  );


  this.valorisation_digestat.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.valorisation_digestat.Sous_Total_Conception
  );
  return (this.valorisation_digestat.Sous_Total_Conception =

    +ssTraitance1 +
    +ssTraitance2 +
    +ssTraitance3 +
    +ssTraitance4 +
    +ssTraitance5+
    +ssTraitance6
    );
}

somePrixDeVneteTotaux_val() {
  this.valorisation_digestat.Sous_Total_Prix_vente_Concep = 0;
  return (this.valorisation_digestat.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(this.valorisation_digestat.Sous_Total_Prix_vente_Concep) +
    this.isNanFunction(
      this.valorisation_digestat.etude_qualite_digestat.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Diagnostic_zone_epandable.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Chiffrage_budget_epandage.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Dossier_autorisation_plan_epandage.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.valorisation_digestat.Rendez_vous_exploitants_recevront_digestat
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.valorisation_digestat.Assistance_juridique_Contrat_epandage_SPV
        .Prix_vente_Concep
    ));
}
//TAB6
Realisation_Marketing: any={
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
}

sommeDeMarge_mark() {
  if (
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance ==
      "" ||
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance ==
      null
  ) {
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance = 0;
    this.Realisation_Marketing.Plaquette_presentation.marge_percent =
    this.isNanFunction(this.conceptions[0].Realisation_Marketing.Plaquette_presentation.marge_percent);
    this.Realisation_Marketing.Plaquette_presentation.marge_euro =
      this.conceptions[0].Realisation_Marketing.Plaquette_presentation.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance
  )
    ? this.isNanFunction(
        this.Realisation_Marketing.Plaquette_presentation.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].Realisation_Marketing.Plaquette_presentation
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.Realisation_Marketing.Plaquette_presentation.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Realisation_Marketing.Plaquette_presentation
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].Realisation_Marketing.Plaquette_presentation
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Realisation_Marketing.Plaquette_presentation.marge_euro
  )
    ? this.isNanFunction(
        this.Realisation_Marketing.Plaquette_presentation.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].Realisation_Marketing.Plaquette_presentation
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Realisation_Marketing.Plaquette_presentation.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
//

}
somme_privVente_mark(){

  if (
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance ==
      "" ||
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance ==
      null
  ) {
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance = 0;
    this.Realisation_Marketing.Plaquette_presentation.marge_totale =
    this.isNanFunction(this.conceptions[0].Realisation_Marketing.Plaquette_presentation.marge_totale);
  }

 return this.Realisation_Marketing.Plaquette_presentation.Prix_vente_Concep =
    this.isNanFunction(
      this.Realisation_Marketing.Plaquette_presentation.marge_totale
    ) +
    this.isNanFunction(
      this.Realisation_Marketing.Plaquette_presentation.SS_Traitance
    );


}


sommeDeMarge_mark1() {

  if (
    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance ==
      "" ||
    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance ==
      null
  ) {
    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance = 0;
    this.Realisation_Marketing.Realisation_infographie_3D.marge_percent =
    this.isNanFunction(this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D.marge_percent);
    this.Realisation_Marketing.Realisation_infographie_3D.marge_euro =
    this.isNanFunction(this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance
  )
    ? this.isNanFunction(
        this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.Realisation_Marketing.Realisation_infographie_3D.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Realisation_Marketing.Realisation_infographie_3D
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Realisation_Marketing.Realisation_infographie_3D.marge_euro
  )
    ? this.isNanFunction(
        this.Realisation_Marketing.Realisation_infographie_3D.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Realisation_Marketing.Realisation_infographie_3D.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_mark1(){
  if (
    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance ==
      "" ||
    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance ==
      null
  ) {
    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance = 0;
    this.Realisation_Marketing.Realisation_infographie_3D.marge_totale =
    this.isNanFunction(this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D.marge_totale);
  }

 return this.Realisation_Marketing.Realisation_infographie_3D.Prix_vente_Concep =
    this.isNanFunction(
      this.Realisation_Marketing.Realisation_infographie_3D.marge_totale
    ) +
    this.isNanFunction(
      this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance
    );



}

sommeDeMarge_mark2() {
  if (
    this.Realisation_Marketing.Film_animation.SS_Traitance ==
      "" ||
    this.Realisation_Marketing.Film_animation.SS_Traitance ==
      null
  ) {
    this.Realisation_Marketing.Film_animation.SS_Traitance = 0;
    this.Realisation_Marketing.Film_animation.marge_percent =
    this.isNanFunction(this.conceptions[0].Realisation_Marketing.Film_animation.marge_percent);
    this.Realisation_Marketing.Film_animation.marge_euro =
    this.isNanFunction(this.conceptions[0].Realisation_Marketing.Film_animation.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.Realisation_Marketing.Film_animation.SS_Traitance
  )
    ? this.isNanFunction(
        this.Realisation_Marketing.Film_animation.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].Realisation_Marketing.Film_animation
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.Realisation_Marketing.Film_animation.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Realisation_Marketing.Film_animation
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].Realisation_Marketing.Film_animation
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.Realisation_Marketing.Film_animation.marge_euro
  )
    ? this.isNanFunction(
        this.Realisation_Marketing.Film_animation.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].Realisation_Marketing.Film_animation
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Realisation_Marketing.Film_animation.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

}
somme_privVente_mark2(){

  if (
    this.Realisation_Marketing.Film_animation.SS_Traitance ==
      "" ||
    this.Realisation_Marketing.Film_animation.SS_Traitance ==
      null
  ) {
    this.Realisation_Marketing.Film_animation.SS_Traitance = 0;
    this.Realisation_Marketing.Film_animation.marge_totale =
    this.isNanFunction(this.conceptions[0].Realisation_Marketing.Film_animation.marge_totale);
  }

 return this.Realisation_Marketing.Film_animation.Prix_vente_Concep =
    this.isNanFunction(
      this.Realisation_Marketing.Film_animation.marge_totale
    ) +
    this.isNanFunction(
      this.Realisation_Marketing.Film_animation.SS_Traitance
    );
}

sommeDeMarge_mark3() {
  if (
    this.Realisation_Marketing.Site_internet.SS_Traitance ==
      "" ||
    this.Realisation_Marketing.Site_internet.SS_Traitance ==
      null
  ) {
    this.Realisation_Marketing.Site_internet.SS_Traitance = 0;
    this.Realisation_Marketing.Site_internet.marge_percent =
      this.conceptions[0].Realisation_Marketing.Site_internet.marge_percent;
    this.Realisation_Marketing.Site_internet.marge_euro =
      this.conceptions[0].Realisation_Marketing.Site_internet.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.Realisation_Marketing.Site_internet.SS_Traitance
  )
    ? this.isNanFunction(
        this.Realisation_Marketing.Site_internet.SS_Traitance
      )
    : this.conceptions[0].Realisation_Marketing.Site_internet
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.Realisation_Marketing.Site_internet.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.Realisation_Marketing.Site_internet
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].Realisation_Marketing.Site_internet
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.Realisation_Marketing.Site_internet.marge_euro
  )
    ? this.isNanFunction(
        this.Realisation_Marketing.Site_internet.marge_euro
      )
    : this.conceptions[0].Realisation_Marketing.Site_internet
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.Realisation_Marketing.Site_internet.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_mark3(){
  if (
    this.Realisation_Marketing.Site_internet.SS_Traitance ==
      "" ||
    this.Realisation_Marketing.Site_internet.SS_Traitance ==
      null
  ) {
    this.Realisation_Marketing.Site_internet.SS_Traitance = 0;
    this.Realisation_Marketing.Site_internet.marge_totale =
      this.conceptions[0].Realisation_Marketing.Site_internet.marge_totale;
  }

  return this.Realisation_Marketing.Site_internet.Prix_vente_Concep =
    this.isNanFunction(
      this.Realisation_Marketing.Site_internet.marge_totale
    ) +
    this.isNanFunction(
      this.Realisation_Marketing.Site_internet.SS_Traitance
    );


}


someMargeTotaux_mark() {
  this.Realisation_Marketing.Marge_totaux = 0;
  return (this.Realisation_Marketing.Marge_totaux =
    this.isNanFunction(this.Realisation_Marketing.Marge_totaux) +

    this.isNanFunction(
      this.Realisation_Marketing.Plaquette_presentation.marge_totale
    ) +
    this.isNanFunction(
      this.Realisation_Marketing.Realisation_infographie_3D.marge_totale
    ) +
    this.isNanFunction(
      this.Realisation_Marketing.Film_animation
        .marge_totale
    )+
    this.isNanFunction(
      this.Realisation_Marketing.Site_internet
        .marge_totale
    ));


}

sommeSoutraitanceTotaux_mark() {
  if (
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance ==
      null ||
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance == ""
  ) {
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance =
    this.conceptions[0].Realisation_Marketing.Plaquette_presentation.SS_Traitance;





    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance =
      this.conceptions[0].Realisation_Marketing.Realisation_infographie_3D.SS_Traitance;

    this.Realisation_Marketing.Film_animation.SS_Traitance =
      this.conceptions[0].Realisation_Marketing.Film_animation.SS_Traitance;
    this.Realisation_Marketing.Site_internet.SS_Traitance =
      this.conceptions[0].Realisation_Marketing.Site_internet.SS_Traitance;

  }


  var ssTraitance3 = this.isNanFunction(
    this.Realisation_Marketing.Plaquette_presentation.SS_Traitance
  );
  var ssTraitance4 = this.isNanFunction(
    this.Realisation_Marketing.Realisation_infographie_3D.SS_Traitance
  );
  var ssTraitance5 = this.isNanFunction(
    this.Realisation_Marketing.Film_animation.SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.Realisation_Marketing.Site_internet.SS_Traitance
  );


  this.Realisation_Marketing.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.Realisation_Marketing.Sous_Total_Conception
  );
  return (this.Realisation_Marketing.Sous_Total_Conception =


    +ssTraitance3 +
    +ssTraitance4 +
    +ssTraitance5+
    +ssTraitance6
    );
}

somePrixDeVneteTotaux_mark() {
  this.Realisation_Marketing.Sous_Total_Prix_vente_Concep = 0;
  return (this.Realisation_Marketing.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(this.Realisation_Marketing.Sous_Total_Prix_vente_Concep) +

    this.isNanFunction(
      this.Realisation_Marketing.Plaquette_presentation.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.Realisation_Marketing.Realisation_infographie_3D.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.Realisation_Marketing.Film_animation
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.Realisation_Marketing.Site_internet
        .Prix_vente_Concep
    ));
}



//tab7
acceptabilite_projet: any={
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
}
sommeDeMarge_accep() {
  if (
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance = 0;
    this.acceptabilite_projet.Diagnostic_territorial.marge_percent =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Diagnostic_territorial.marge_percent);
    this.acceptabilite_projet.Diagnostic_territorial.marge_euro =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Diagnostic_territorial.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].acceptabilite_projet.Diagnostic_territorial
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.acceptabilite_projet.Diagnostic_territorial.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.acceptabilite_projet.Diagnostic_territorial
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].acceptabilite_projet.Diagnostic_territorial
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.acceptabilite_projet.Diagnostic_territorial.marge_euro
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Diagnostic_territorial.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].acceptabilite_projet.Diagnostic_territorial
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.acceptabilite_projet.Diagnostic_territorial.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));


}
somme_privVente_accep(){
  if (
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance = 0;
    this.acceptabilite_projet.Diagnostic_territorial.marge_totale =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Diagnostic_territorial.marge_totale);
  }

  return this.acceptabilite_projet.Diagnostic_territorial.Prix_vente_Concep =
    this.isNanFunction(
      this.acceptabilite_projet.Diagnostic_territorial.marge_totale
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance
    );


}


sommeDeMarge_accep1() {
  if (
    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance = 0;
    this.acceptabilite_projet.Realisation_plans_action.marge_percent =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Realisation_plans_action.marge_percent);
    this.acceptabilite_projet.Realisation_plans_action.marge_euro =
      this.conceptions[0].acceptabilite_projet.Realisation_plans_action.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Realisation_plans_action.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].acceptabilite_projet.Realisation_plans_action
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.acceptabilite_projet.Realisation_plans_action.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.acceptabilite_projet.Realisation_plans_action
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].acceptabilite_projet.Realisation_plans_action
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.acceptabilite_projet.Realisation_plans_action.marge_euro
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Realisation_plans_action.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].acceptabilite_projet.Realisation_plans_action
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.acceptabilite_projet.Realisation_plans_action.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
//

}
somme_privVente_accep1(){

  if (
    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance = 0;
    this.acceptabilite_projet.Realisation_plans_action.marge_totale =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Realisation_plans_action.marge_totale);
  }

 return this.acceptabilite_projet.Realisation_plans_action.Prix_vente_Concep =
    this.isNanFunction(
      this.acceptabilite_projet.Realisation_plans_action.marge_totale
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Realisation_plans_action.SS_Traitance
    );


}


sommeDeMarge_accep2() {

  if (
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance = 0;
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_percent =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_percent);
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_euro =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_euro
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_accep2(){
  if (
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance = 0;
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_totale =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_totale);
  }

 return this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.Prix_vente_Concep =
    this.isNanFunction(
      this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_totale
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance
    );



}

sommeDeMarge_accep3() {
  if (
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance = 0;
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_percent =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_percent);
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_euro =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_euro
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

}
somme_privVente_accep3(){

  if (
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance = 0;
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_totale =
    this.isNanFunction(this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_totale);
  }

  return this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.Prix_vente_Concep =
    this.isNanFunction(
      this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.marge_totale
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance
    );
}

sommeDeMarge_accep4() {
  if (
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance = 0;
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_percent =
      this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques.marge_percent;
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_euro =
      this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance
      )
    : this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.acceptabilite_projet.Reponses_questions_enquete_publiques
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_euro
  )
    ? this.isNanFunction(
        this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_euro
      )
    : this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_accep4(){
  if (
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance ==
      "" ||
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance ==
      null
  ) {
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance = 0;
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_totale =
      this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques.marge_totale;
  }

 return this.acceptabilite_projet.Reponses_questions_enquete_publiques.Prix_vente_Concep =
    this.isNanFunction(
      this.acceptabilite_projet.Reponses_questions_enquete_publiques.marge_totale
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance
    );


}



someMargeTotaux_accep() {
  this.acceptabilite_projet.Marge_totaux = 0;
  return (this.acceptabilite_projet.Marge_totaux =
    this.isNanFunction(this.acceptabilite_projet.Marge_totaux) +

    this.isNanFunction(
      this.acceptabilite_projet.Diagnostic_territorial.marge_totale
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Realisation_plans_action.marge_totale
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.marge_totale
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale
        .marge_totale
    )+
    this.isNanFunction(
      this.acceptabilite_projet.Reponses_questions_enquete_publiques
        .marge_totale
    ));


}

sommeSoutraitanceTotaux_accep() {
  if (
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance ==
      null ||
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance == ""
  ) {
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance =
    this.conceptions[0].acceptabilite_projet.Diagnostic_territorial.SS_Traitance;



    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance =
      this.conceptions[0].acceptabilite_projet.Realisation_plans_action.SS_Traitance;

    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance =
      this.conceptions[0].acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance;

    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance =
      this.conceptions[0].acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance;
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance =
      this.conceptions[0].acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance;

  }


  var ssTraitance2 = this.isNanFunction(
    this.acceptabilite_projet.Diagnostic_territorial.SS_Traitance
  );
  var ssTraitance3 = this.isNanFunction(
    this.acceptabilite_projet.Realisation_plans_action.SS_Traitance
  );
  var ssTraitance4 = this.isNanFunction(
    this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.SS_Traitance
  );
  var ssTraitance5 = this.isNanFunction(
    this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale.SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.acceptabilite_projet.Reponses_questions_enquete_publiques.SS_Traitance
  );


  this.acceptabilite_projet.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.acceptabilite_projet.Sous_Total_Conception
  );
  return (this.acceptabilite_projet.Sous_Total_Conception =
    +ssTraitance2 +
    +ssTraitance3 +
    +ssTraitance4 +
    +ssTraitance5+
    +ssTraitance6
    );
}

somePrixDeVneteTotaux_accep() {
  this.acceptabilite_projet.Sous_Total_Prix_vente_Concep = 0;
  return (this.acceptabilite_projet.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(this.acceptabilite_projet.Sous_Total_Prix_vente_Concep) +

    this.isNanFunction(
      this.acceptabilite_projet.Diagnostic_territorial.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Realisation_plans_action.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Film_aniFormation_riverains_bienfaits_methanisationmation.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.acceptabilite_projet.Defense_promotion_projet_elus_population_locale
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.acceptabilite_projet.Reponses_questions_enquete_publiques
        .Prix_vente_Concep
    ));
}


//Tab8
realisation_Projet:any= {
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
  Marge_totaux:""

}
sommeDeMarge_realisation() {
  if (
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance ==
      "" ||
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance = 0;
    this.realisation_Projet.Dimensionnement_Projet.marge_percent =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Dimensionnement_Projet.marge_percent);
    this.realisation_Projet.Dimensionnement_Projet.marge_euro =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Dimensionnement_Projet.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance
  )
    ? this.isNanFunction(
        this.realisation_Projet.Dimensionnement_Projet.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.Dimensionnement_Projet
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.realisation_Projet.Dimensionnement_Projet.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.realisation_Projet.Dimensionnement_Projet
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].realisation_Projet.Dimensionnement_Projet
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.realisation_Projet.Dimensionnement_Projet.marge_euro
  )
    ? this.isNanFunction(
        this.realisation_Projet.Dimensionnement_Projet.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.Dimensionnement_Projet
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.realisation_Projet.Dimensionnement_Projet.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_realisation(){


  if (
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance ==
      "" ||
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance = 0;
    this.realisation_Projet.Dimensionnement_Projet.marge_totale =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Dimensionnement_Projet.marge_totale);
  }



var ssTraitance = this.isNanFunction(
this.realisation_Projet.Dimensionnement_Projet.SS_Traitance
)
? this.isNanFunction(
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance
  )
: this.isNanFunction(this.conceptions[0].realisation_Projet.Dimensionnement_Projet
    .SS_Traitance);

var marge_totale = this.isNanFunction(
this.realisation_Projet.Dimensionnement_Projet.marge_totale
)
?
    this.isNanFunction(
      this.realisation_Projet.Dimensionnement_Projet
        .marge_totale)

:
this.isNanFunction(this.conceptions[0].realisation_Projet.Dimensionnement_Projet
      .marge_totale);


return (this.realisation_Projet.Dimensionnement_Projet.Prix_vente_Concep =
  this.isNanFunction(ssTraitance + marge_totale));


}

sommeDeMarge_realisation1() {
  if (
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance ==
      "" ||
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance = 0;
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_percent =
    this.isNanFunction(this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle.marge_percent);
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_euro =
    this.isNanFunction(this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance
  )
    ? this.isNanFunction(
        this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.realisation_Projet.etude_dispersion_odeur_eventuelle
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_euro
  )
    ? this.isNanFunction(
        this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_realisation1(){
  if (
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance ==
      "" ||
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance = 0;
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_totale =
    this.isNanFunction(this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle.marge_totale);
  }

  this.realisation_Projet.etude_dispersion_odeur_eventuelle.Prix_vente_Concep =
    this.isNanFunction(
      this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance
    );


}


sommeDeMarge_realisation2() {
  if (
    this.realisation_Projet.Proposition_choix_process.SS_Traitance ==
      "" ||
    this.realisation_Projet.Proposition_choix_process.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Proposition_choix_process.SS_Traitance = 0;
    this.realisation_Projet.Proposition_choix_process.marge_percent =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Proposition_choix_process.marge_percent);
    this.realisation_Projet.Proposition_choix_process.marge_euro =
      this.conceptions[0].realisation_Projet.Proposition_choix_process.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.realisation_Projet.Proposition_choix_process.SS_Traitance
  )
    ? this.isNanFunction(
        this.realisation_Projet.Proposition_choix_process.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.Proposition_choix_process
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.realisation_Projet.Proposition_choix_process.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.realisation_Projet.Proposition_choix_process
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].realisation_Projet.Proposition_choix_process
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.realisation_Projet.Proposition_choix_process.marge_euro
  )
    ? this.isNanFunction(
        this.realisation_Projet.Proposition_choix_process.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.Proposition_choix_process
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.realisation_Projet.Proposition_choix_process.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
//

}
somme_privVente_realisation2(){

  if (
    this.realisation_Projet.Proposition_choix_process.SS_Traitance ==
      "" ||
    this.realisation_Projet.Proposition_choix_process.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Proposition_choix_process.SS_Traitance = 0;
    this.realisation_Projet.Proposition_choix_process.marge_totale =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Proposition_choix_process.marge_totale);
  }

  this.realisation_Projet.Proposition_choix_process.Prix_vente_Concep =
    this.isNanFunction(
      this.realisation_Projet.Proposition_choix_process.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.Proposition_choix_process.SS_Traitance
    );


}


sommeDeMarge_realisation3() {

  if (
    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance ==
      "" ||
    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance = 0;
    this.realisation_Projet.Dossier_consultation_Entreprises.marge_percent =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises.marge_percent);
    this.realisation_Projet.Dossier_consultation_Entreprises.marge_euro =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance
  )
    ? this.isNanFunction(
        this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.realisation_Projet.Dossier_consultation_Entreprises.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.realisation_Projet.Dossier_consultation_Entreprises
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.realisation_Projet.Dossier_consultation_Entreprises.marge_euro
  )
    ? this.isNanFunction(
        this.realisation_Projet.Dossier_consultation_Entreprises.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.realisation_Projet.Dossier_consultation_Entreprises.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_realisation3(){
  if (
    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance ==
      "" ||
    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance = 0;
    this.realisation_Projet.Dossier_consultation_Entreprises.marge_totale =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises.marge_totale);
  }

  this.realisation_Projet.Dossier_consultation_Entreprises.Prix_vente_Concep =
    this.isNanFunction(
      this.realisation_Projet.Dossier_consultation_Entreprises.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance
    );



}

sommeDeMarge_realisation4() {
  if (
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance ==
      "" ||
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance = 0;
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_percent =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_percent);
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_euro =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance
  )
    ? this.isNanFunction(
        this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_euro
  )
    ? this.isNanFunction(
        this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

}
somme_privVente_realisation4(){

  if (
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance ==
      "" ||
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance = 0;
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_totale =
    this.isNanFunction(this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_totale);
  }

  this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.Prix_vente_Concep =
    this.isNanFunction(
      this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance
    );
}

sommeDeMarge_realisation5() {
  if (
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance ==
      "" ||
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance = 0;
    this.realisation_Projet.Business_Plan_detaille.marge_percent =
      this.conceptions[0].realisation_Projet.Business_Plan_detaille.marge_percent;
    this.realisation_Projet.Business_Plan_detaille.marge_euro =
      this.conceptions[0].realisation_Projet.Business_Plan_detaille.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance
  )
    ? this.isNanFunction(
        this.realisation_Projet.Business_Plan_detaille.SS_Traitance
      )
    : this.conceptions[0].realisation_Projet.Business_Plan_detaille
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.realisation_Projet.Business_Plan_detaille.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.realisation_Projet.Business_Plan_detaille
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].realisation_Projet.Business_Plan_detaille
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.realisation_Projet.Business_Plan_detaille.marge_euro
  )
    ? this.isNanFunction(
        this.realisation_Projet.Business_Plan_detaille.marge_euro
      )
    : this.conceptions[0].realisation_Projet.Business_Plan_detaille
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.realisation_Projet.Business_Plan_detaille.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_realisation5(){
  if (
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance ==
      "" ||
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance = 0;
    this.realisation_Projet.Business_Plan_detaille.marge_totale =
      this.conceptions[0].realisation_Projet.Business_Plan_detaille.marge_totale;
  }

  this.realisation_Projet.Business_Plan_detaille.Prix_vente_Concep =
    this.isNanFunction(
      this.realisation_Projet.Business_Plan_detaille.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.Business_Plan_detaille.SS_Traitance
    );


}
sommeDeMarge_realisation6(){
  if (
    this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance ==
      "" ||
    this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance = 0;
    this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_percent =
      this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique.marge_percent;
    this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_euro =
      this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance
  )
    ? this.isNanFunction(
        this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance
      )
    : this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.realisation_Projet.Contrat_prestataire_Controle_technique
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_euro
  )
    ? this.isNanFunction(
        this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_euro
      )
    : this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
}

somme_privVente_realisation6(){
  if (
    this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance ==
      "" ||
    this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance ==
      null
  ) {
    this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance = 0;
    this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_totale =
      this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique.marge_totale;
  }

  this.realisation_Projet.Contrat_prestataire_Controle_technique.Prix_vente_Concep =
    this.isNanFunction(
      this.realisation_Projet.Contrat_prestataire_Controle_technique.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance
    );
}

someMargeTotaux_realisation() {
  this.realisation_Projet.Marge_totaux = 0;
  return (this.realisation_Projet.Marge_totaux =
    this.isNanFunction(this.realisation_Projet.Marge_totaux) +
    this.isNanFunction(
      this.realisation_Projet.Dimensionnement_Projet.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.etude_dispersion_odeur_eventuelle.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.Proposition_choix_process.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.Dossier_consultation_Entreprises.marge_totale
    ) +
    this.isNanFunction(
      this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
        .marge_totale
    )+
    this.isNanFunction(
      this.realisation_Projet.Business_Plan_detaille
        .marge_totale
    )+
    this.isNanFunction(
      this.realisation_Projet.Contrat_prestataire_Controle_technique
        .marge_totale
    ));


}

sommeSoutraitanceTotaux_realisation() {
  if (
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance ==
      null ||
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance == ""
  ) {
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance =
      this.conceptions[0].realisation_Projet.Dimensionnement_Projet.SS_Traitance;

    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance =
      this.conceptions[0].realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance;

    this.realisation_Projet.Proposition_choix_process.SS_Traitance =
      this.conceptions[0].realisation_Projet.Proposition_choix_process.SS_Traitance;

    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance =
      this.conceptions[0].realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance;

    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance =
      this.conceptions[0].realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance;
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance =
      this.conceptions[0].realisation_Projet.Business_Plan_detaille.SS_Traitance;

      this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance =
      this.conceptions[0].realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance;

  }

  var ssTraitance1 = this.isNanFunction(
    this.realisation_Projet.Dimensionnement_Projet.SS_Traitance
  );
  var ssTraitance2 = this.isNanFunction(
    this.realisation_Projet.etude_dispersion_odeur_eventuelle.SS_Traitance
  );
  var ssTraitance3 = this.isNanFunction(
    this.realisation_Projet.Proposition_choix_process.SS_Traitance
  );
  var ssTraitance4 = this.isNanFunction(
    this.realisation_Projet.Dossier_consultation_Entreprises.SS_Traitance
  );
  var ssTraitance5 = this.isNanFunction(
    this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee.SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.realisation_Projet.Business_Plan_detaille.SS_Traitance
  );
  var ssTraitance7 = this.isNanFunction(
    this.realisation_Projet.Contrat_prestataire_Controle_technique.SS_Traitance
  );


  this.realisation_Projet.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.realisation_Projet.Sous_Total_Conception
  );
  return (this.realisation_Projet.Sous_Total_Conception =

    +ssTraitance1 +
    +ssTraitance2 +
    +ssTraitance3 +
    +ssTraitance4 +
    +ssTraitance5+
    +ssTraitance6+
    +ssTraitance7

    );
}


somePrixDeVneteTotaux_realisation() {
  this.realisation_Projet.Sous_Total_Prix_vente_Concep = 0;
  return (this.realisation_Projet.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(this.realisation_Projet.Sous_Total_Prix_vente_Concep) +
    this.isNanFunction(
      this.realisation_Projet.Dimensionnement_Projet.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.realisation_Projet.etude_dispersion_odeur_eventuelle.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.realisation_Projet.Proposition_choix_process.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.realisation_Projet.Dossier_consultation_Entreprises.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.realisation_Projet.Contrat_TRC_TRME_Exploitation_negociee
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.realisation_Projet.Business_Plan_detaille
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.realisation_Projet.Contrat_prestataire_Controle_technique
        .Prix_vente_Concep)

    );
}
//tab9
obtention_autorisations_urbanisme_exploitation_Projet:any= {
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
  Marge_totaux:"",
}
sommeDeMarge_urban() {
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_percent =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_percent);
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_euro =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_euro
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_urban(){


  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_totale =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_totale);
  }



var ssTraitance = this.isNanFunction(
this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance
)
? this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance
  )
: this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
    .SS_Traitance);

var marge_totale = this.isNanFunction(
this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_totale
)
?
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
        .marge_totale)

:
this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental
      .marge_totale);


return (this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.Prix_vente_Concep =
  this.isNanFunction(ssTraitance + marge_totale));


}

sommeDeMarge_urban1() {
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_percent =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_percent);
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_euro =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_euro
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_urban1(){
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_totale =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_totale);
  }

  this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance
    );


}


sommeDeMarge_urban2() {
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_percent =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_percent);
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_euro =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_euro
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
//

}
somme_privVente_urban2(){

  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_totale =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_totale);
  }

  this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance
    );


}


sommeDeMarge_urban3() {

  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_percent =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_percent);
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_euro =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_euro
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));



}
somme_privVente_urban3(){
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_totale =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_totale);
  }

  this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance
    );



}

sommeDeMarge_urban4() {
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_percent =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_percent);
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_euro =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_euro);
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
        .SS_Traitance);

  var margePercent = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
            .marge_percent
        ),
        100
      )
    : this.quotion(
      this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
          .marge_percent),
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_euro
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_euro
      )
    : this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
        .marge_euro);

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

}
somme_privVente_urban4(){

  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_totale =
    this.isNanFunction(this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_totale);
  }

  this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance
    );
}

sommeDeMarge_urban5() {
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_percent =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_percent;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_euro =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance
      )
    : this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_euro
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_euro
      )
    : this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

//

}
somme_privVente_urban5(){
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_totale =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_totale;
  }

  this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance
    );


}
sommeDeMarge_urban6(){
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_percent =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_percent;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_euro =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance
      )
    : this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur
        .SS_Traitance;

  var margePercent = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur
            .marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur
          .marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_euro
  )
    ? this.isNanFunction(
        this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_euro
      )
    : this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur
        .marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
}

somme_privVente_urban6(){
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance ==
      "" ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance ==
      null
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance = 0;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_totale =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_totale;
  }

  this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance
    );
}

someMargeTotaux_urban() {
  this.obtention_autorisations_urbanisme_exploitation_Projet.Marge_totaux = 0;
  return (this.obtention_autorisations_urbanisme_exploitation_Projet.Marge_totaux =
    this.isNanFunction(this.obtention_autorisations_urbanisme_exploitation_Projet.Marge_totaux) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
        .marge_totale
    )+
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier
        .marge_totale
    )+
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur
        .marge_totale
    ));


}

sommeSoutraitanceTotaux_urban() {
  if (
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance ==
      null ||
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance == ""
  ) {
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance;

    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance;

    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance;

    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance;

    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance;
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance;

      this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance =
      this.conceptions[0].obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance;

  }

  var ssTraitance1 = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.SS_Traitance
  );
  var ssTraitance2 = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.SS_Traitance
  );
  var ssTraitance3 = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.SS_Traitance
  );
  var ssTraitance4 = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.SS_Traitance
  );
  var ssTraitance5 = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE.SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier.SS_Traitance
  );
  var ssTraitance7 = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur.SS_Traitance
  );


  this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Conception
  );
  return (this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Conception =

    +ssTraitance1 +
    +ssTraitance2 +
    +ssTraitance3 +
    +ssTraitance4 +
    +ssTraitance5+
    +ssTraitance6+
    +ssTraitance7

    );
}


somePrixDeVneteTotaux_urban() {
  this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Prix_vente_Concep = 0;
  return (this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Prix_vente_Concep) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Diagnostic_environnemental.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_agrement_sanitaire.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.etude_loi_eau.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.etude_foudre.Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Dossier_ICPE
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Obtention_arret_PC_Passage_huissier
        .Prix_vente_Concep
    )+this.isNanFunction(
      this.obtention_autorisations_urbanisme_exploitation_Projet.Rendez_vous_service_instructeur
        .Prix_vente_Concep)

    );
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
  if (
    this.obtention_subvention_Projet.Reunion_organismes
      .SS_Traitance == "" ||
    this.obtention_subvention_Projet.Reunion_organismes
      .SS_Traitance == null
  ) {
    this.obtention_subvention_Projet.Reunion_organismes.SS_Traitance = 0;
    this.obtention_subvention_Projet.Reunion_organismes.marge_percent =
      this.conceptions[0].obtention_subvention_Projet.Reunion_organismes.marge_percent;
    this.obtention_subvention_Projet.Reunion_organismes.marge_euro =
      this.conceptions[0].obtention_subvention_Projet.Reunion_organismes.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_subvention_Projet.Reunion_organismes
      .SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_subvention_Projet.Reunion_organismes
          .SS_Traitance
      )
    : this.conceptions[0].obtention_subvention_Projet
        .Reunion_organismes.SS_Traitance;

  var margePercent = this.isNanFunction(
    this.obtention_subvention_Projet.Reunion_organismes
      .marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_subvention_Projet
            .Reunion_organismes.marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].obtention_subvention_Projet
          .Reunion_organismes.marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_subvention_Projet.Reunion_organismes
      .marge_euro
  )
    ? this.isNanFunction(
        this.obtention_subvention_Projet.Reunion_organismes
          .marge_euro
      )
    : this.conceptions[0].obtention_subvention_Projet
        .Reunion_organismes.marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_subvention_Projet.Reunion_organismes.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
}
somme_privVente_TAB10() {
  if (
    this.obtention_subvention_Projet.Reunion_organismes
      .SS_Traitance == "" ||
    this.obtention_subvention_Projet.Reunion_organismes
      .SS_Traitance == null
  ) {
    this.obtention_subvention_Projet.Reunion_organismes.SS_Traitance = 0;
    this.obtention_subvention_Projet.Reunion_organismes.marge_totale =
      this.conceptions[0].obtention_subvention_Projet.Reunion_organismes.marge_totale;
  }

  return this.obtention_subvention_Projet.Reunion_organismes.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_subvention_Projet.Reunion_organismes
        .marge_totale
    ) +
    this.isNanFunction(
      this.obtention_subvention_Projet.Reunion_organismes
        .SS_Traitance
    );
}

sommeDeMarge_2_TAB10() {
  if (
    this.obtention_subvention_Projet.Depot_dossier_subventions
      .SS_Traitance == "" ||
    this.obtention_subvention_Projet.Depot_dossier_subventions
      .SS_Traitance == null
  ) {
    this.obtention_subvention_Projet.Depot_dossier_subventions.SS_Traitance = 0;
    this.obtention_subvention_Projet.Depot_dossier_subventions.marge_percent =
      this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions.marge_percent;
    this.obtention_subvention_Projet.Depot_dossier_subventions.marge_euro =
      this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_subvention_Projet.Depot_dossier_subventions
      .SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_subvention_Projet
          .Depot_dossier_subventions.SS_Traitance
      )
    : this.conceptions[0].obtention_subvention_Projet
        .Depot_dossier_subventions.SS_Traitance;

  var margePercent = this.isNanFunction(
    this.obtention_subvention_Projet.Depot_dossier_subventions
      .marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_subvention_Projet
            .Depot_dossier_subventions.marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].obtention_subvention_Projet
          .Depot_dossier_subventions.marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_subvention_Projet.Depot_dossier_subventions
      .marge_euro
  )
    ? this.isNanFunction(
        this.obtention_subvention_Projet
          .Depot_dossier_subventions.marge_euro
      )
    : this.conceptions[0].obtention_subvention_Projet
        .Depot_dossier_subventions.marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_subvention_Projet.Depot_dossier_subventions.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

  //
}
somme_privVente_2_TAB10() {
  if (
    this.obtention_subvention_Projet.Depot_dossier_subventions
      .SS_Traitance == "" ||
    this.obtention_subvention_Projet.Depot_dossier_subventions
      .SS_Traitance == null
  ) {
    this.obtention_subvention_Projet.Depot_dossier_subventions.SS_Traitance = 0;
    this.obtention_subvention_Projet.Depot_dossier_subventions.marge_totale =
      this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions.marge_totale;
  }

return  this.obtention_subvention_Projet.Depot_dossier_subventions.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_subvention_Projet
        .Depot_dossier_subventions.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_subvention_Projet
        .Depot_dossier_subventions.SS_Traitance
    );
}

someMargeTotaux_TAB10() {
  this.obtention_subvention_Projet.Marge_totaux = 0;
  return (this.obtention_subvention_Projet.Marge_totaux =
    this.isNanFunction(
      this.obtention_subvention_Projet.Marge_totaux
    ) +
    this.isNanFunction(
      this.obtention_subvention_Projet.Reunion_organismes
        .marge_totale
    ) +
    this.isNanFunction(
      this.obtention_subvention_Projet
        .Depot_dossier_subventions.marge_totale
    ));
}

sommeSoutraitanceTotaux_TAB10() {
  if (
    this.obtention_subvention_Projet.Reunion_organismes
      .SS_Traitance == null ||
    this.obtention_subvention_Projet.Reunion_organismes
      .SS_Traitance == ""
  ) {
    this.obtention_subvention_Projet.Reunion_organismes.SS_Traitance =
      this.conceptions[0].obtention_subvention_Projet.Reunion_organismes.SS_Traitance;
    this.obtention_subvention_Projet.Depot_dossier_subventions.SS_Traitance =
      this.conceptions[0].obtention_subvention_Projet.Depot_dossier_subventions.SS_Traitance;
  }

  var ssTraitance5 = this.isNanFunction(
    this.obtention_subvention_Projet.Reunion_organismes
      .SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.obtention_subvention_Projet.Depot_dossier_subventions
      .SS_Traitance
  );

  this.obtention_subvention_Projet.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.obtention_subvention_Projet.Sous_Total_Conception
  );
  return (this.obtention_subvention_Projet.Sous_Total_Conception =
    s0 + ssTraitance5 + ssTraitance6);
}

somePrixDeVneteTotaux_TAB10() {
  this.obtention_subvention_Projet.Sous_Total_Prix_vente_Concep = 0;
  return (this.obtention_subvention_Projet.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_subvention_Projet.Sous_Total_Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.obtention_subvention_Projet.Reunion_organismes
        .Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.obtention_subvention_Projet
        .Depot_dossier_subventions.Prix_vente_Concep
    ));
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
  if (
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .SS_Traitance == "" ||
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .SS_Traitance == null
  ) {
    this.obtention_financement_Projet.Instruction_dossier_bancaire.SS_Traitance = 0;
    this.obtention_financement_Projet.Instruction_dossier_bancaire.marge_percent =
      this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire.marge_percent;
    this.obtention_financement_Projet.Instruction_dossier_bancaire.marge_euro =
      this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_financement_Projet
          .Instruction_dossier_bancaire.SS_Traitance
      )
    : this.conceptions[0].obtention_financement_Projet
        .Instruction_dossier_bancaire.SS_Traitance;

  var margePercent = this.isNanFunction(
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_financement_Projet
            .Instruction_dossier_bancaire.marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].obtention_financement_Projet
          .Instruction_dossier_bancaire.marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .marge_euro
  )
    ? this.isNanFunction(
        this.obtention_financement_Projet
          .Instruction_dossier_bancaire.marge_euro
      )
    : this.conceptions[0].obtention_financement_Projet
        .Instruction_dossier_bancaire.marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_financement_Projet.Instruction_dossier_bancaire.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));
}
somme_privVente_TAB11() {
  if (
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .SS_Traitance == "" ||
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .SS_Traitance == null
  ) {
    this.obtention_financement_Projet.Instruction_dossier_bancaire.SS_Traitance = 0;
    this.obtention_financement_Projet.Instruction_dossier_bancaire.marge_totale =
      this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire.marge_totale;
  }

return(this.obtention_financement_Projet.Instruction_dossier_bancaire.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_financement_Projet.Instruction_dossier_bancaire
        .marge_totale
    ) +
    this.isNanFunction(
      this.obtention_financement_Projet.Instruction_dossier_bancaire
        .SS_Traitance
    ));
}

sommeDeMarge_2_TAB11() {
  if (
    this.obtention_financement_Projet
      .Suivi_instructions_negociations.SS_Traitance == "" ||
    this.obtention_financement_Projet
      .Suivi_instructions_negociations.SS_Traitance == null
  ) {
    this.obtention_financement_Projet.Suivi_instructions_negociations.SS_Traitance = 0;
    this.obtention_financement_Projet.Suivi_instructions_negociations.marge_percent =
      this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations.marge_percent;
    this.obtention_financement_Projet.Suivi_instructions_negociations.marge_euro =
      this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations.marge_euro;
  }

  var ssTraitance = this.isNanFunction(
    this.obtention_financement_Projet
      .Suivi_instructions_negociations.SS_Traitance
  )
    ? this.isNanFunction(
        this.obtention_financement_Projet
          .Suivi_instructions_negociations.SS_Traitance
      )
    : this.conceptions[0].obtention_financement_Projet
        .Suivi_instructions_negociations.SS_Traitance;

  var margePercent = this.isNanFunction(
    this.obtention_financement_Projet
      .Suivi_instructions_negociations.marge_percent
  )
    ? this.quotion(
        this.isNanFunction(
          this.obtention_financement_Projet
            .Suivi_instructions_negociations.marge_percent
        ),
        100
      )
    : this.quotion(
        this.conceptions[0].obtention_financement_Projet
          .Suivi_instructions_negociations.marge_percent,
        100
      );
  var margeEuro = this.isNanFunction(
    this.obtention_financement_Projet
      .Suivi_instructions_negociations.marge_euro
  )
    ? this.isNanFunction(
        this.obtention_financement_Projet
          .Suivi_instructions_negociations.marge_euro
      )
    : this.conceptions[0].obtention_financement_Projet
        .Suivi_instructions_negociations.marge_euro;

  console.log(
    "margePercent margePercent margePercent",
    margePercent,
    margeEuro,
    ssTraitance
  );

  return (this.obtention_financement_Projet.Suivi_instructions_negociations.marge_totale =
    this.isNanFunction(this.produit2(ssTraitance, margePercent) + margeEuro));

  //
}
somme_privVente_2_TAB11() {
  if (
    this.obtention_financement_Projet
      .Suivi_instructions_negociations.SS_Traitance == "" ||
    this.obtention_financement_Projet
      .Suivi_instructions_negociations.SS_Traitance == null
  ) {
    this.obtention_financement_Projet.Suivi_instructions_negociations.SS_Traitance = 0;
    this.obtention_financement_Projet.Suivi_instructions_negociations.marge_totale =
      this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations.marge_totale;
  }

 return( this.obtention_financement_Projet.Suivi_instructions_negociations.Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_financement_Projet
        .Suivi_instructions_negociations.marge_totale
    ) +
    this.isNanFunction(
      this.obtention_financement_Projet
        .Suivi_instructions_negociations.SS_Traitance
    ));
}

someMargeTotaux_TAB11() {
  this.obtention_financement_Projet.Marge_totaux = 0;
  return (this.obtention_financement_Projet.Marge_totaux =
    this.isNanFunction(this.obtention_financement_Projet.Marge_totaux) +
    this.isNanFunction(
      this.obtention_financement_Projet.Instruction_dossier_bancaire
        .marge_totale
    ) +
    this.isNanFunction(
      this.obtention_financement_Projet
        .Suivi_instructions_negociations.marge_totale
    ));
}

sommeSoutraitanceTotaux_TAB11() {
  if (
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .SS_Traitance == null ||
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .SS_Traitance == ""
  ) {
    this.obtention_financement_Projet.Instruction_dossier_bancaire.SS_Traitance =
      this.conceptions[0].obtention_financement_Projet.Instruction_dossier_bancaire.SS_Traitance;
    this.obtention_financement_Projet.Suivi_instructions_negociations.SS_Traitance =
      this.conceptions[0].obtention_financement_Projet.Suivi_instructions_negociations.SS_Traitance;
  }

  var ssTraitance5 = this.isNanFunction(
    this.obtention_financement_Projet.Instruction_dossier_bancaire
      .SS_Traitance
  );
  var ssTraitance6 = this.isNanFunction(
    this.obtention_financement_Projet
      .Suivi_instructions_negociations.SS_Traitance
  );

  this.obtention_financement_Projet.Sous_Total_Conception = 0;
  var s0 = this.isNanFunction(
    this.obtention_financement_Projet.Sous_Total_Conception
  );
  return (this.obtention_financement_Projet.Sous_Total_Conception =
    s0 + ssTraitance5 + ssTraitance6);
}

somePrixDeVneteTotaux_TAB11() {
  this.obtention_financement_Projet.Sous_Total_Prix_vente_Concep = 0;
  return (this.obtention_financement_Projet.Sous_Total_Prix_vente_Concep =
    this.isNanFunction(
      this.obtention_financement_Projet.Sous_Total_Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.obtention_financement_Projet.Instruction_dossier_bancaire
        .Prix_vente_Concep
    ) +
    this.isNanFunction(
      this.obtention_financement_Projet
        .Suivi_instructions_negociations.Prix_vente_Concep
    ));
}

// totaux_SS_traitance_Total:"";
//   totaux_marge_Total:"";
//   totaux_prixVente_Total:"";
//TOTALL------------------------------------------------------------------------
SommeTotal_totaux_SS_Traitance(){
  this.totaux_SS_traitance_Total=0
  console.log("rrrrrrrr",this.totaux_SS_traitance_Total);

 return (this.totaux_SS_traitance_Total=
  this.isNanFunction(this.Interet_porteur_projet.Sous_Total_Conception)+
  this.isNanFunction(this.Etude_biomasse_projet.Sous_Total_Conception)+
  this.isNanFunction(this.Etude_fonciere_projet.Sous_Total_Conception)+
  this.isNanFunction(this.sercurisation_gaziers.Sous_Total_Conception)+
  this.isNanFunction(this.valorisation_digestat.Sous_Total_Conception)+
  this.isNanFunction(this.Realisation_Marketing.Sous_Total_Conception)+
  this.isNanFunction(this.acceptabilite_projet.Sous_Total_Conception)

  // this.isNanFunction(this.realisation_Projet.Sous_Total_Conception)+
  // this.isNanFunction(this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Conception)+
  // this.isNanFunction(this.obtention_subvention_Projet.Sous_Total_Conception)+
  // this.isNanFunction(this.obtention_financement_Projet.Sous_Total_Conception)

 );
}
SommeTotal_totaux_Prix_Vente_totaux(){
  this.totaux_prixVente_Total=0
  return (this.totaux_prixVente_Total=
   this.isNanFunction(this.Interet_porteur_projet.Sous_Total_Prix_vente_Concep)+
   this.isNanFunction(this.Etude_biomasse_projet.Sous_Total_Prix_vente_Concep)+
   this.isNanFunction(this.Etude_fonciere_projet.Sous_Total_Prix_vente_Concep)+
   this.isNanFunction(this.sercurisation_gaziers.Sous_Total_Prix_vente_Concep)+
   this.isNanFunction(this.valorisation_digestat.Sous_Total_Prix_vente_Concep)+
   this.isNanFunction(this.Realisation_Marketing.Sous_Total_Prix_vente_Concep)+
   this.isNanFunction(this.acceptabilite_projet.Sous_Total_Prix_vente_Concep)
  //  +
  //  this.isNanFunction(this.realisation_Projet.Sous_Total_Prix_vente_Concep)+
  //  this.isNanFunction(this.obtention_autorisations_urbanisme_exploitation_Projet.Sous_Total_Prix_vente_Concep)+
  //  this.isNanFunction(this.obtention_subvention_Projet.Sous_Total_Prix_vente_Concep)+
  //  this.isNanFunction(this.obtention_financement_Projet.Sous_Total_Prix_vente_Concep)

  );
}
SommeTotal_totaux_Marge_totaux(){
  this.totaux_marge_Total=0
  return (this.totaux_marge_Total=
   this.isNanFunction(this.Interet_porteur_projet.Marge_totaux)+
   this.isNanFunction(this.Etude_biomasse_projet.Marge_totaux)+
   this.isNanFunction(this.Etude_fonciere_projet.Marge_totaux)+
   this.isNanFunction(this.sercurisation_gaziers.Marge_totaux)+
   this.isNanFunction(this.valorisation_digestat.Marge_totaux)+
   this.isNanFunction(this.Realisation_Marketing.Marge_totaux)+
   this.isNanFunction(this.acceptabilite_projet.Marge_totaux)
  //  +
  //  this.isNanFunction(this.realisation_Projet.Marge_totaux)+
  //  this.isNanFunction(this.obtention_autorisations_urbanisme_exploitation_Projet.Marge_totaux)+
  //  this.isNanFunction(this.obtention_subvention_Projet.Marge_totaux)+
  //  this.isNanFunction(this.obtention_financement_Projet.Marge_totaux)

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
