import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { loginService } from "./login.service";
@Injectable()

export class Guardian implements CanActivate {
    constructor(private loginService: loginService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  
       
        if(this.loginService.estaLogueado()){
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }

    }
}
