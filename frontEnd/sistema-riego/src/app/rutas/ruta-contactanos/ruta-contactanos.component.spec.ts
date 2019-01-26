import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaContactanosComponent } from './ruta-contactanos.component';

describe('RutaContactanosComponent', () => {
  let component: RutaContactanosComponent;
  let fixture: ComponentFixture<RutaContactanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
