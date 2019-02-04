import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGestionSubparcelaComponent } from './formulario-gestion-subparcela.component';

describe('FormularioGestionSubparcelaComponent', () => {
  let component: FormularioGestionSubparcelaComponent;
  let fixture: ComponentFixture<FormularioGestionSubparcelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGestionSubparcelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGestionSubparcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
