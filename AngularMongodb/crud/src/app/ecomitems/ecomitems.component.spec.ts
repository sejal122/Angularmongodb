import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomitemsComponent } from './ecomitems.component';

describe('EcomitemsComponent', () => {
  let component: EcomitemsComponent;
  let fixture: ComponentFixture<EcomitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcomitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcomitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
