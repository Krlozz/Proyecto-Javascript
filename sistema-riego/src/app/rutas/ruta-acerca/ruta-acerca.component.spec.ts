import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAcercaComponent } from './ruta-acerca.component';

describe('RutaAcercaComponent', () => {
  let component: RutaAcercaComponent;
  let fixture: ComponentFixture<RutaAcercaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAcercaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAcercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
