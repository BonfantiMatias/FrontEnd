import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';

import { EducacionService } from './educacion.service';

describe('EducacionService', () => {
  let service: EducacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
    });
    service = TestBed.inject(EducacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
