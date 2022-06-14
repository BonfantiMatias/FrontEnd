import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';

import { ExperienciaService } from './experiencia.service';

describe('ExperienciaService', () => {
  let service: ExperienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
    });
    service = TestBed.inject(ExperienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
