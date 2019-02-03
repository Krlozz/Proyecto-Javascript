import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionParcelaComponent } from './ruta-gestion-parcela.component';

describe('RutaGestionParcelaComponent', () => {
  let component: RutaGestionParcelaComponent;
  let fixture: ComponentFixture<RutaGestionParcelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionParcelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
