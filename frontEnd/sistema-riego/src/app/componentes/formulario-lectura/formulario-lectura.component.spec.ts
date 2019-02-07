import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLecturaComponent } from './formulario-lectura.component';

describe('FormularioLecturaComponent', () => {
  let component: FormularioLecturaComponent;
  let fixture: ComponentFixture<FormularioLecturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioLecturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
