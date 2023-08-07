import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMateriaComponent } from './detalles-materia.component';

describe('DetallesMateriaComponent', () => {
  let component: DetallesMateriaComponent;
  let fixture: ComponentFixture<DetallesMateriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesMateriaComponent]
    });
    fixture = TestBed.createComponent(DetallesMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
