import { Component } from '@angular/core';
import { Modulo } from '../materias.model';
import { ServiciosAcademiaService } from '../servicios-academia.service';
import { moduloService } from '../modulo.service';

@Component({
  selector: 'app-home-component',
 
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'Art academy';
  moduloService: any;
  constructor(private primerServicio: ServiciosAcademiaService, private moduloservice:moduloService) {
   // this.modulos= this.moduloservice.modulos;
  }
  ngOnInit(): void {
    // this.modulos= this.moduloservice.modulos;
    // this.moduloService.obtenerDatosBBDD().subscribe((misMaterias:string)=>{console.log(misMaterias)});
    this.moduloservice.obtenerDatosBBDD().subscribe(misMaterias=>{console.log(misMaterias)
    this.modulos=Object.values(misMaterias);
    this.moduloservice.colocarMaterias(this.modulos);
    })
  
  }
  modulos: Modulo[]=[];
  agregarModulo(): void{
    let newModulo= new Modulo(this.nombreInput, this.lessonsInput, this.horasInput);

   //this.primerServicio.muestraAlertaEnTemplate("Nombre del Modulo: " + newModulo.nombre);
   this.moduloservice.agregarModulosServicio(newModulo)
 };

 

  nombreInput:string="";
  lessonsInput:string="";
  horasInput:string="";
}
