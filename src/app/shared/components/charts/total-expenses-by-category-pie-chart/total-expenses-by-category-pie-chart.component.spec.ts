import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExpensesByCategoryPieChartComponent } from './total-expenses-by-category-pie-chart.component';

describe('TotalExpensesByCategoryPieChartComponent', () => {
  let component: TotalExpensesByCategoryPieChartComponent;
  let fixture: ComponentFixture<TotalExpensesByCategoryPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalExpensesByCategoryPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalExpensesByCategoryPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
