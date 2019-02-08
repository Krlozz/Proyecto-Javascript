import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAjustesComponent } from './ruta-ajustes.component';

describe('RutaAjustesComponent', () => {
  let component: RutaAjustesComponent;
  let fixture: ComponentFixture<RutaAjustesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAjustesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
