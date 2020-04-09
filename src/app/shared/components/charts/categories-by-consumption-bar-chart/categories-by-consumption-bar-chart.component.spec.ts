import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesByConsumptionBarChartComponent } from './categories-by-consumption-bar-chart.component';

describe('CategoriesByConsumptionBarChartComponent', () => {
  let component: CategoriesByConsumptionBarChartComponent;
  let fixture: ComponentFixture<CategoriesByConsumptionBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesByConsumptionBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesByConsumptionBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
