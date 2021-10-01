import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ConfigService } from "./config.service";

@Injectable({
  providedIn: "root",
})
export class AgriService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  addFicheClient(value) {


    return this.http.post(this.config.baseURL + "/fiches", value);
  }
  getAllCients() {
    return this.http.get(this.config.baseURL + "/clients");
  }
  getAllStaffs() {
    return this.http.get(this.config.baseURL + "/staffs");
  }
  getAllActivites() {
    return this.http.get(this.config.baseURL + "/activites");
  }
  getAllSystems() {
    return this.http.get(this.config.baseURL + "/operations");
  }
  getAllProjets() {
    return this.http.get(this.config.baseURL + "/projets");
  }
  getAllEtas() {
    return this.http.get(this.config.baseURL + "/");
  }
  createProjet(projet: any) {
    return this.http.post(this.config.baseURL + "/projets", projet);
  }
  getClientById(id: any) {
    return this.http.get(this.config.baseURL + "/clients/" + id);
  }

  getIC1() {
    return this.http.get(this.config.baseURL + "/ic1s");
  }
  getTypes() {
    return this.http.get(this.config.baseURL + "/types");
  }
  getIC2() {
    return this.http.get(this.config.baseURL + "/ic2s");
  }
  getDesxription() {
    return this.http.get(this.config.baseURL + "/descriptions");
  }
  getfichesInfo() {
    return this.http.get(this.config.baseURL + "/fiches");
  }

  private resultSubject = new Subject<string>();
  dispatchPostCreated(id: string) {
    this.resultSubject.next(id);
  }

  handlePostCreated() {
    return this.resultSubject.asObservable();
  }
  delete(id: any) {
    return this.http.delete(this.config.baseURL + "/clients/" + id);
  }

  //construction
  getDataConstruction(){
    return this.http.get(this.config.baseURL + "/getDonnees");
  }
  getData(){
    return this.http.get(this.config.baseURL + "/getconstructions");
  }
  getDataExploitation(){
    return this.http.get(this.config.baseURL + "/getexploitations");
  }
  SubmitDataConception(value){
    return this.http.post(this.config.baseURL + "/donnees", value);
  }

  updateDataconceptionByID(id,val){
    console.log("sstraitance",id,val);
    return this.http.post(this.config.baseURL + "/updateDate/" + id,val);
    }

    updateDataconstructionByID(id,val){
      return this.http.post(this.config.baseURL + "/updateConstruction/" + id,val);
      }

      updateDataexploitationByID(id,val){
       return this.http.post(this.config.baseURL + "/updateexploitation/" + id,val);
        }


}
