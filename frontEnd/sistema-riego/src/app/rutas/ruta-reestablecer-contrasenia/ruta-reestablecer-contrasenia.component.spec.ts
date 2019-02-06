import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaReestablecerContraseniaComponent } from './ruta-reestablecer-contrasenia.component';

describe('RutaReestablecerContraseniaComponent', () => {
  let component: RutaReestablecerContraseniaComponent;
  let fixture: ComponentFixture<RutaReestablecerContraseniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaReestablecerContraseniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaReestablecerContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
