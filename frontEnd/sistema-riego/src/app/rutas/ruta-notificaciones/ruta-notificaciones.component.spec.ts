import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaNotificacionesComponent } from './ruta-notificaciones.component';

describe('RutaNotificacionesComponent', () => {
  let component: RutaNotificacionesComponent;
  let fixture: ComponentFixture<RutaNotificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaNotificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
