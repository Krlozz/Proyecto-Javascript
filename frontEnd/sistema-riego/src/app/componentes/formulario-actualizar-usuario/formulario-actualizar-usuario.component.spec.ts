import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizarUsuarioComponent } from './formulario-actualizar-usuario.component';

describe('FormularioActualizarUsuarioComponent', () => {
  let component: FormularioActualizarUsuarioComponent;
  let fixture: ComponentFixture<FormularioActualizarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioActualizarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioActualizarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
