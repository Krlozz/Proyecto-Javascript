import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionSubparcelaComponent } from './ruta-gestion-subparcela.component';

describe('RutaGestionSubparcelaComponent', () => {
  let component: RutaGestionSubparcelaComponent;
  let fixture: ComponentFixture<RutaGestionSubparcelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionSubparcelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionSubparcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
