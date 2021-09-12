import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  baseURL = environment.API_URL;
  constructor() {}
}
