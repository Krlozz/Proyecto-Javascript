import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGestionSensorComponent } from './formulario-gestion-sensor.component';

describe('FormularioGestionSensorComponent', () => {
  let component: FormularioGestionSensorComponent;
  let fixture: ComponentFixture<FormularioGestionSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGestionSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGestionSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
