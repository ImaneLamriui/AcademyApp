import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosAcademiaService {

  
  muestraAlertaEnTemplate(alerta: string){
    alert(alerta)
}
}
