import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizarHaciendaComponent } from './formulario-actualizar-hacienda.component';

describe('FormularioActualizarHaciendaComponent', () => {
  let component: FormularioActualizarHaciendaComponent;
  let fixture: ComponentFixture<FormularioActualizarHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioActualizarHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualizarHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
