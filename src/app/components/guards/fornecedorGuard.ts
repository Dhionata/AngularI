import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class fornecedorGuard implements CanActivateChild {

    	canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean>|boolean {

           console.log(route);

             if (state.url.includes('FORNECEDOR')){
              //alert('Usuário sem acesso');
              //return Observable.of(false);
              return false;
          }

          return true;
        }

}
