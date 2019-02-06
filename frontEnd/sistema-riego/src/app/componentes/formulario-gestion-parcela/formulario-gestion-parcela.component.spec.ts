import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGestionParcelaComponent } from './formulario-gestion-parcela.component';

describe('FormularioGestionParcelaComponent', () => {
  let component: FormularioGestionParcelaComponent;
  let fixture: ComponentFixture<FormularioGestionParcelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGestionParcelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGestionParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
