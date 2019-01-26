import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaParcelasComponent } from './ruta-parcelas.component';

describe('RutaParcelasComponent', () => {
  let component: RutaParcelasComponent;
  let fixture: ComponentFixture<RutaParcelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaParcelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaParcelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
