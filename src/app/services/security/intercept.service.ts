import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class Intercept {
  constructor(private userSRV: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.userSRV.getToken();
    if (token) {
      const _reqCloned = req.clone({
        headers: req.headers.set("x-auth-token", token),
      });
      return next.handle(_reqCloned);
    }
    return next.handle(req);
  }
}
