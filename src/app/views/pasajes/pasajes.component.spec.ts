import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasajesComponent } from './pasajes.component';

describe('PasajesComponent', () => {
  let component: PasajesComponent;
  let fixture: ComponentFixture<PasajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
