import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAsignarSensorComponent } from './ruta-asignar-sensor.component';

describe('RutaAsignarSensorComponent', () => {
  let component: RutaAsignarSensorComponent;
  let fixture: ComponentFixture<RutaAsignarSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAsignarSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAsignarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
