import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoipmentComponent } from './appoipment.component';

describe('AppoipmentComponent', () => {
  let component: AppoipmentComponent;
  let fixture: ComponentFixture<AppoipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
