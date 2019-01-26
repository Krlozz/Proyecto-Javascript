import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionHaciendaComponent } from './ruta-gestion-hacienda.component';

describe('RutaGestionHaciendaComponent', () => {
  let component: RutaGestionHaciendaComponent;
  let fixture: ComponentFixture<RutaGestionHaciendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionHaciendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionHaciendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
