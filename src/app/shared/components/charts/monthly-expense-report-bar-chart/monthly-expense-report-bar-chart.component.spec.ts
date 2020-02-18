import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpenseReportBarChartComponent } from './monthly-expense-report-bar-chart.component';

describe('MonthlyExpenseReportBarChartComponent', () => {
  let component: MonthlyExpenseReportBarChartComponent;
  let fixture: ComponentFixture<MonthlyExpenseReportBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyExpenseReportBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExpenseReportBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
