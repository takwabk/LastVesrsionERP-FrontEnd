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
import { AdminGuard } from "./services/guard/admin.service";
import { AuthGuard } from "./services/guard/auth.service";

const routes: Routes = [
  {

    path: "",
    component: LayoutComponent,canActivate:[AuthGuard],

    children: [
      { path: "", component: AddClientComponent ,canActivate:[AuthGuard] },
      { path: "home", component: HomeComponent ,canActivate:[AuthGuard]},
      { path: "add-staff", component: AddStaffComponent ,canActivate:[AuthGuard,AdminGuard]},
      { path: "add-client", component: AddClientComponent ,canActivate:[AuthGuard]},
      { path: "liste-staff", component: ListaStaffComponent ,canActivate:[AuthGuard,AdminGuard]},
      { path: "liste-client", component: ListeClientComponent ,canActivate:[AuthGuard,AdminGuard]},
      { path: "fiche", component: FicheClientComponent,canActivate:[AuthGuard] },
      { path: "Conception-data", component: DonnesConstructionComponent ,canActivate:[AuthGuard,AdminGuard]},
      { path: "Exploitation-data", component: ExploitationComponent ,canActivate:[AuthGuard,AdminGuard]},
      { path: "Exploitation140-data", component: Exploitation140Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "Exploitation190-data", component: Exploitation190Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "Exploitation240-data", component: Exploitation240Component ,canActivate:[AuthGuard,AdminGuard] },
      { path: "Exploitation260-data", component: Exploitation260Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "Exploitation560-data", component: Exploitation560Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "Exploitation760-data", component: Exploitation760Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "Exploitation960-data", component: Exploitation960Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "Exploitation1120-data", component: Exploitation1120Component ,canActivate:[AuthGuard,AdminGuard]},

      { path: "construction", component: ConstructionComponent,canActivate:[AuthGuard,AdminGuard] },
      { path: "injection140", component: Injection140Component,canActivate:[AuthGuard,AdminGuard] },
      { path: "injection190", component: Injection190Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "injection240", component: Injection240Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "injection280", component: Injection280Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "cogeneration560", component: Cogeneration560Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "cogeneration760", component: Cogeneration760Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "cogeneration960", component: Cogeneration960Component ,canActivate:[AuthGuard,AdminGuard]},
      { path: "cogeneration1120", component: Cogeneration1120Component ,canActivate:[AuthGuard,AdminGuard]},
      // { path: "capex", component: CapexComponent },
      // { path: "opex", component: OpexComponent },
      { path: "affichage", component: AffichageComponent ,canActivate:[AuthGuard,AdminGuard]},
      { path: "scenario", component: ScenarioComponent ,canActivate:[AuthGuard,AdminGuard]},
      { path: "projet", component: FicheProjetComponent ,canActivate:[AuthGuard]},
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
