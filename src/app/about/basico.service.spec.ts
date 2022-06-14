import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';

import { BasicoService } from './basico.service';

describe('BasicoService', () => {
  let service: BasicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
    });
    service = TestBed.inject(BasicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
