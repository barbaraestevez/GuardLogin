import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authloginGuard: CanActivateFn = (route, state) => { //la guarda es funcional, hace un año era de otra manera
  
  // /* const _ROUTER = new Router*/
  const _ROUTER = inject(Router);
  const TOKEN = localStorage.getItem('token');


  if(TOKEN) {
    return true;
  }
  else {
    _ROUTER.navigate(['']);
    return false;
  }
  
  // const user = route.params;
  // console.log(user);

  // return localStorage.getItem('token') !=null;
};