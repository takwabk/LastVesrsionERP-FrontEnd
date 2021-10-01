import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AffichageComponent } from "./capex/affichage/affichage.component";
import { CapexComponent } from "./capex/capex.component";
import { AddClientComponent } from "./components/gestionClient/add-client/add-client.component";
import { FicheClientComponent } from "./components/gestionClient/fiche-client/fiche-client.component";
import { ListeClientComponent } from "./components/gestionClient/liste-client/liste-client.component";
import { AddStaffComponent } from "./components/gestionStaff/add-staff/add-staff.component";
import { ListaStaffComponent } from "./components/gestionStaff/lista-staff/lista-staff.component";
import { HomeComponent } from "./components/home/home.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { Cogeneration1120Component } from "./construction/cogeneration1120/cogeneration1120.component";
import { Cogeneration560Component } from "./construction/cogeneration560/cogeneration560.component";
import { Cogeneration760Component } from "./construction/cogeneration760/cogeneration760.component";
import { Cogeneration960Component } from "./construction/cogeneration960/cogeneration960.component";
import { ConstructionComponent } from "./construction/construction.component";
import { Injection140Component } from "./construction/injection140/injection140.component";
import { Injection190Component } from "./construction/injection190/injection190.component";
import { Injection240Component } from "./construction/injection240/injection240.component";
import { Injection280Component } from "./construction/injection280/injection280.component";
import { DonnesConstructionComponent } from "./donnes-construction/donnes-construction.component";
import { ExploitationComponent } from "./exploitation/exploitation.component";
import { Exploitation1120Component } from "./exploitation/exploitation1120/exploitation1120.component";
import { Exploitation140Component } from "./exploitation/exploitation140/exploitation140.component";
import { Exploitation190Component } from "./exploitation/exploitation190/exploitation190.component";
import { Exploitation240Component } from "./exploitation/exploitation240/exploitation240.component";
import { Exploitation260Component } from "./exploitation/exploitation260/exploitation260.component";
import { Exploitation560Component } from "./exploitation/exploitation560/exploitation560.component";
import { Exploitation760Component } from "./exploitation/exploitation760/exploitation760.component";
import { Exploitation960Component } from "./exploitation/exploitation960/exploitation960.component";
import { FicheProjetComponent } from "./fiche-projet/fiche-projet.component";
import { LoginComponent } from "./login/login.component";
import { OpexComponent } from "./opex/opex.component";
import { RegisterComponent } from "./register/register.component";
import { ScenarioComponent } from "./scenario/scenario.component";

const routes: Routes = [
  {

    path: "",
    component: LayoutComponent,

    children: [
      { path: "", component: AddClientComponent },
      { path: "home", component: HomeComponent },
      { path: "add-staff", component: AddStaffComponent },
      { path: "add-client", component: AddClientComponent },
      { path: "liste-staff", component: ListaStaffComponent },
      { path: "liste-client", component: ListeClientComponent },
      { path: "fiche", component: FicheClientComponent },
      { path: "Construction-data", component: DonnesConstructionComponent },
      { path: "Exploitation-data", component: ExploitationComponent },
      { path: "Exploitation140-data", component: Exploitation140Component },
      { path: "Exploitation190-data", component: Exploitation190Component },
      { path: "Exploitation240-data", component: Exploitation240Component },
      { path: "Exploitation260-data", component: Exploitation260Component },
      { path: "Exploitation560-data", component: Exploitation560Component },
      { path: "Exploitation760-data", component: Exploitation760Component },
      { path: "Exploitation960-data", component: Exploitation960Component },
      { path: "Exploitation1120-data", component: Exploitation1120Component },

      { path: "construction", component: ConstructionComponent },
      { path: "injection140", component: Injection140Component },
      { path: "injection190", component: Injection190Component },
      { path: "injection240", component: Injection240Component },
      { path: "injection280", component: Injection280Component },
      { path: "cogeneration560", component: Cogeneration560Component },
      { path: "cogeneration760", component: Cogeneration760Component },
      { path: "cogeneration960", component: Cogeneration960Component },
      { path: "cogeneration1120", component: Cogeneration1120Component },
      // { path: "capex", component: CapexComponent },
      // { path: "opex", component: OpexComponent },
      { path: "affichage", component: AffichageComponent },
      { path: "scenario", component: ScenarioComponent },
      { path: "projet", component: FicheProjetComponent },
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
