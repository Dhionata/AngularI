import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable()


export class AuthGuard implements CanActivate {

  constructor(

    private authService: AuthService,
    private route: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):
  Observable<boolean> | boolean {
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.route.navigate(['/login'])
    return false;
  }



}
export class AuthGuardService {


}
