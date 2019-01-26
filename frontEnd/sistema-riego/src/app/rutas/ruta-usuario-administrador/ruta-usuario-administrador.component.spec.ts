import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUsuarioAdministradorComponent } from './ruta-usuario-administrador.component';

describe('RutaUsuarioAdministradorComponent', () => {
  let component: RutaUsuarioAdministradorComponent;
  let fixture: ComponentFixture<RutaUsuarioAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUsuarioAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaUsuarioAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
