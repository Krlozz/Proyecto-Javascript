import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaReestablecerContrasenaComponent } from './ruta-reestablecer-contrasena.component';

describe('RutaReestablecerContrasenaComponent', () => {
  let component: RutaReestablecerContrasenaComponent;
  let fixture: ComponentFixture<RutaReestablecerContrasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaReestablecerContrasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaReestablecerContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
