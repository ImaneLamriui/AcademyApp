import { Component, Input } from '@angular/core';
import { Modulo } from '../materias.model';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
// Binding bidereccional
export class MateriaComponent {
@Input () moduloidentif: Modulo;
@Input () indice: number;
arrayDetalles = [''];

//Agregar caracteristicas

anyadirCaracteristica(nuevoDetalle: string) {
  this.arrayDetalles.push(nuevoDetalle);
};

}
