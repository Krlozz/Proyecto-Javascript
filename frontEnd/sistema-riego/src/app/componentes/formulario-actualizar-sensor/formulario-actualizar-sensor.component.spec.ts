import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizarSensorComponent } from './formulario-actualizar-sensor.component';

describe('FormularioActualizarSensorComponent', () => {
  let component: FormularioActualizarSensorComponent;
  let fixture: ComponentFixture<FormularioActualizarSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioActualizarSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualizarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
