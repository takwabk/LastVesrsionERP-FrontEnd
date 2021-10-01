import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userSRV: AuthService, private router: Router) {}
  canActivate() {
    let user = this.userSRV.currentUser;
    console.log("AdminGuard", this.userSRV.currentUser.role);
    if (user && user.role === "Admin") return true;
    this.router.navigate(["/login"]);
    return false;
  }
}
