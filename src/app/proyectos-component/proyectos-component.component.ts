import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosAcademiaService } from '../servicios-academia.service';
import { Modulo } from '../materias.model';
import { moduloService } from '../modulo.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit  {
  constructor(private router:Router, private primerServicio: ServiciosAcademiaService, private moduloservice:moduloService) {}
  modulos: Modulo[]=[];
  ngOnInit(): void {
    this.modulos= this.moduloservice.modulos;
  }
  
  
irAlHome() {
this.router.navigate([''])
}

agregarModulo(){
  let newModulo= new Modulo(this.nombreInput, this.lessonsInput, this.horasInput);

 //this.primerServicio.muestraAlertaEnTemplate("Nombre del Modulo: " + newModulo.nombre);
  this.moduloservice.agregarModulosServicio(newModulo)
  this.router.navigate([''])
  
};

nombreInput:string="";
lessonsInput:string="";
horasInput:string="";

}