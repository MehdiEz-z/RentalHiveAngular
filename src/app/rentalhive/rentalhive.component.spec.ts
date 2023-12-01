import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalhiveComponent } from './rentalhive.component';

describe('RentalhiveComponent', () => {
  let component: RentalhiveComponent;
  let fixture: ComponentFixture<RentalhiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalhiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalhiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
