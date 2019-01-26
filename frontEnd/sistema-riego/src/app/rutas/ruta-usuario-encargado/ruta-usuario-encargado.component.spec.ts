import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUsuarioEncargadoComponent } from './ruta-usuario-encargado.component';

describe('RutaUsuarioEncargadoComponent', () => {
  let component: RutaUsuarioEncargadoComponent;
  let fixture: ComponentFixture<RutaUsuarioEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUsuarioEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaUsuarioEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
