import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaHistorialComponent } from './ruta-historial.component';

describe('RutaHistorialComponent', () => {
  let component: RutaHistorialComponent;
  let fixture: ComponentFixture<RutaHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
