import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';

import { ProyectosService } from './proyectos.service';

describe('ProyectosService', () => {
  let service: ProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
    });
    service = TestBed.inject(ProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
