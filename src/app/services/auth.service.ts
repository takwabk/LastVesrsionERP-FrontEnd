import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { AppError } from "../common/app-error";
import { BadInput } from "../common/bad-input";
import { NotFoundError } from "../common/not-found-error";
import { ConfigService } from "./config.service";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  roles: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private config: ConfigService
  ) {}
  login(user: any) {
    console.log("hiiii srv user");
    return this.http
      .post(this.config.baseURL + "/login", user)
      .pipe(
        map((data: any) => {
          if (data && data.token) {
            localStorage.setItem("token", data.token);
            return true;
          }
          return false;
        })
      )

      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400) return throwError(new BadInput(error));

    if (error.status === 404) return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }

  register(user: any) {
    console.log("user from user", user);
    return this.http.post(this.config.baseURL + "/register", user);
  }
  addUser(user: any) {
    console.log("user",user);
    return this.http.post(this.config.baseURL + "/addClient", user);


  }

  //showing or hiding element
  isLoggedIn() {
    let token = this.getToken();
    let jwtHelper = new JwtHelperService();
    if (!token) return false;
    //let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }
  //showing/hide using isAdmin--display name
  get currentUser() {
    let token = this.getToken();
    if (!token) return null;
    return new JwtHelperService().decodeToken(token);
  }

  logout() {
    this.removeToken();
    this.router.navigate(["/login"]);
  }

  setToken(token: any) {
    return localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  getDecodedToken() {
    let token = this.getToken();
    if (!token) return null;
    return new JwtHelperService().decodeToken(localStorage.getItem("token"));
  }
  removeToken() {
    return localStorage.removeItem("token");
  }
  public isInRole(roleName: any) {
    let token = localStorage.getItem("token");
    if (!token) return null;
    let decodedToken = new JwtHelperService().decodeToken(token);
    this.roles = decodedToken["role"];
    return this.roles.indexOf(roleName) > -1;
  }

  getUserById(id: any) {
    return this.http.get(this.config.baseURL + "/getUserById/" + id);
  }
  getAllRole() {
    return this.http.get(this.config.baseURL + "/roles");
  }
  signUpStaff(staff) {
    return this.http.post(this.config.baseURL + "/staffs", staff);
  }
}
