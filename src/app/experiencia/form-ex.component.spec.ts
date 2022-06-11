import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExComponent } from './form-ex.component';

describe('FormExComponent', () => {
  let component: FormExComponent;
  let fixture: ComponentFixture<FormExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
