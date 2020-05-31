import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholesalerComponent } from './wholesaler.component';

describe('WholesalerComponent', () => {
  let component: WholesalerComponent;
  let fixture: ComponentFixture<WholesalerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholesalerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholesalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
