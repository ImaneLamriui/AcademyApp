import { ModifierFn } from "popper.js";
import { Modulo } from "./materias.model";
import { Injectable } from "@angular/core";
import { ServiciosAcademiaService } from "./servicios-academia.service";
import { DataServices } from "./data.services";

@Injectable ()
export class moduloService {
    constructor(private servicioVentanaEmergente: ServiciosAcademiaService, private dataService: DataServices){

    }
    colocarMaterias(misMaterias: Modulo[]){
        this.modulos=misMaterias;

    }
    obtenerDatosBBDD(){
        return this.dataService.obtenerModulos()
    }

    modulos: Modulo[]=[];
        // new Modulo("Creativity", "15 classes","100 horas"),
        // new Modulo("Paint", "15 classes"," 50 horas"),
        // new Modulo("Design", "20 classes","70 horas")
        
        //  muestra alerta de los datos que va a agregar y despues se agregan con push
        agregarModulosServicio(modulo: Modulo) {
            this.servicioVentanaEmergente.muestraAlertaEnTemplate("This is the module that will be added: " + "\n" + "name:" +  modulo.nombre + "\n" + "hours: " + modulo.horas)
            this.modulos.push(modulo);
            this.dataService.guardarModulos(this.modulos)
        }
        // se busca el modulo por indice, en lenguaje typescript se defini el tipo el objeto
        encontrarModulo(indice: number){
            let mmodulo:Modulo=this.modulos[indice]
            return mmodulo;

        }

        // sobreescribir los nuevos datos ( modificar) datos del del modulo
        updateMmodulo(indice:number, modulo:Modulo){
          
        let moduloUp = this.modulos[indice]  
        moduloUp.nombre=modulo.nombre;
        moduloUp.lessons=modulo.lessons;
        moduloUp.horas=modulo.horas;
        this.dataService.actualizarModulos (indice, modulo)

        }
        borrarModulo(indice: number){
         this.modulos.splice(indice, 1)
         this.dataService.eliminarModulos(indice);
         if(this.modulos!=null)
         this.dataService.guardarModulos(this.modulos)
        }
}