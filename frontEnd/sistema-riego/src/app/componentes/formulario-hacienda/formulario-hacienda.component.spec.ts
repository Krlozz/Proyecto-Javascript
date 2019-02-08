import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHaciendaComponent } from './formulario-hacienda.component';

describe('FormularioHaciendaComponent', () => {
  let component: FormularioHaciendaComponent;
  let fixture: ComponentFixture<FormularioHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
