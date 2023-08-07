import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiciosAcademiaService } from '../servicios-academia.service';
import { Modulo } from '../materias.model';
import { moduloService } from '../modulo.service';
@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent {
  constructor(private router:Router, private primerServicio: ServiciosAcademiaService, private moduloservice:moduloService, private route:ActivatedRoute) {}
  modulos: Modulo[]=[];
  accion: number;
 
  ngOnInit(): void {
    this.accion = this.route.snapshot.queryParams['accion'];

    this.modulos= this.moduloservice.modulos;
    this.indice= this.route.snapshot.params['id']
    let mmodulo:Modulo = this.moduloservice.encontrarModulo(this.indice)
  this.nombreInput=mmodulo.nombre; 
this.lessonsInput=mmodulo.lessons;
this.horasInput=mmodulo.horas; }
  
  
irAlHome() {
this.router.navigate([''])
}

// updateModulo(){
//   let newModulo = new Modulo(this.nombreInput, this.lessonsInput, this.horasInput);

//  //this.primerServicio.muestraAlertaEnTemplate("Nombre del Modulo: " + newModulo.nombre);
//   this.moduloservice.updateMmodulo(this.indice, newModulo)
//   this.router.navigate([''])
  
// };

// borrarModulo(){

//   this.moduloservice.borrarModulo(this.indice)
//   this.router.navigate([''])
// }
updateModulo(){
  if(this.accion == 1) {
  let newModulo = new Modulo(this.nombreInput, this.lessonsInput, this.horasInput);

 //this.primerServicio.muestraAlertaEnTemplate("Nombre del Modulo: " + newModulo.nombre);
  this.moduloservice.updateMmodulo(this.indice, newModulo)
  this.router.navigate([''])}
 else{
  this.moduloservice.borrarModulo(this.indice)
  this.router.navigate([''])
}
  
};
nombreInput:string="";
lessonsInput:string="";
horasInput:string="";
indice: number;
}
