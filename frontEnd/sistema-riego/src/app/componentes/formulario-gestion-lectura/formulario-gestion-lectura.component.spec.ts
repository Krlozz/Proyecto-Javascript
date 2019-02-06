import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGestionLecturaComponent } from './formulario-gestion-lectura.component';

describe('FormularioGestionLecturaComponent', () => {
  let component: FormularioGestionLecturaComponent;
  let fixture: ComponentFixture<FormularioGestionLecturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGestionLecturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGestionLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
