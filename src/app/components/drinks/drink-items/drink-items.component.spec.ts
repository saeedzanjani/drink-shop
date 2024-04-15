import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkItemsComponent } from './drink-items.component';

describe('DrinkItemsComponent', () => {
  let component: DrinkItemsComponent;
  let fixture: ComponentFixture<DrinkItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
