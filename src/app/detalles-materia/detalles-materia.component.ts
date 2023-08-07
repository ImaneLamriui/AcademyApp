import { Component, EventEmitter, Output } from '@angular/core';
import { ServiciosAcademiaService } from '../servicios-academia.service';

@Component({
  selector: 'app-detalles-materia',
  templateUrl: './detalles-materia.component.html',
  styleUrls: ['./detalles-materia.component.css']
})
export class DetallesMateriaComponent {
@Output () DetalleMateria = new EventEmitter<string>();

//constructor(private segundoServicio: ServiciosAcademiaService ){

//}
agregarDetalleMateria(value: string) {
//  this.segundoServicio.muestraAlertaEnTemplate(value)
//  this.DetalleMateria.emit(value);
}

}
