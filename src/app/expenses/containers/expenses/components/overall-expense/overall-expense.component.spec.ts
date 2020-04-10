import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallExpenseComponent } from './overall-expense.component';

describe('OverallExpenseComponent', () => {
  let component: OverallExpenseComponent;
  let fixture: ComponentFixture<OverallExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
