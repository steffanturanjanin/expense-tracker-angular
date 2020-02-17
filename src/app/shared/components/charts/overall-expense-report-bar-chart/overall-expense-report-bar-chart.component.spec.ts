import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallExpenseReportBarChartComponent } from './overall-expense-report-bar-chart.component';

describe('OverallExpenseReportBarChartComponent', () => {
  let component: OverallExpenseReportBarChartComponent;
  let fixture: ComponentFixture<OverallExpenseReportBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallExpenseReportBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallExpenseReportBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
