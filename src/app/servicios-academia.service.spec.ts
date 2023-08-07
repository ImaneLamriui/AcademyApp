import { TestBed } from '@angular/core/testing';

import { ServiciosAcademiaService } from './servicios-academia.service';

describe('ServiciosAcademiaService', () => {
  let service: ServiciosAcademiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosAcademiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
