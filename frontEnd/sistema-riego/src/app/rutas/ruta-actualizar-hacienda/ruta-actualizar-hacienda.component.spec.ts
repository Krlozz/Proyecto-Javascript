import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarHaciendaComponent } from './ruta-actualizar-hacienda.component';

describe('RutaActualizarHaciendaComponent', () => {
  let component: RutaActualizarHaciendaComponent;
  let fixture: ComponentFixture<RutaActualizarHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
