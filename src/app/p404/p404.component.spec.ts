import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';

import { P404Component } from './p404.component';

describe('P404Component', () => {
  let component: P404Component;
  let fixture: ComponentFixture<P404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent, P404Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
