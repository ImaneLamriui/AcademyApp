import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Modulo } from "./materias.model";
import { loginService } from "./login/login.service";
@Injectable()
export class DataServices {
constructor(private httpClient: HttpClient, private loginService:loginService){}

obtenerModulos(){
  const token = this.loginService.getIdToken();
    return this.httpClient.get('https://academia-bf787-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+ token)
}
guardarModulos(modulos:Modulo[]){
  this.httpClient.put('https://academia-bf787-default-rtdb.europe-west1.firebasedatabase.app/datos.json', modulos).subscribe(
   response=>console.log("Se han guardado los modulos:" + response),
   error=>console.log("Error: Tenemos el siguiente error ==> " + error),

 );
}
actualizarModulos(indice:number, modulo:Modulo){
    let url='https://academia-bf787-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
    this.httpClient.put(url, modulo).subscribe(
      response=>console.log("Se ha modificado correctamente la materia:" +response),
      error=>console.log("Error: " + error),
       
);
}
eliminarModulos(indice:number){
  let url='https://academia-bf787-default-rtdb.europe-west1.firebasedatabase.app/' + indice + '.json';
  this.httpClient.delete(url).subscribe(
    response=>console.log("Se ha eliminado correctamente la materia:" + response),
    error=>console.log("Error es el siguiente: " + error),
     
    );
}
}