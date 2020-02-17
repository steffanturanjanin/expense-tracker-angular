import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-overall-expense-report-bar-chart',
  templateUrl: './overall-expense-report-bar-chart.component.html',
  styleUrls: ['./overall-expense-report-bar-chart.component.css']
})
export class OverallExpenseReportBarChartComponent implements OnInit {
  @Input() report$: Observable<any>;
  constructor() {}

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'January' },
    { data: [], label: 'February' },
    { data: [], label: 'March' },
    { data: [], label: 'April' },
    { data: [], label: 'May' },
    { data: [], label: 'June' },
    { data: [], label: 'July' },
    { data: [], label: 'August' },
    { data: [], label: 'September' },
    { data: [], label: 'October' },
    { data: [], label: 'November' },
    { data: [], label: 'December' },
  ];

  ngOnInit() {
    this.report$.subscribe((report) => {
      if (report !== null && report !== undefined) {
        const dataArrayLength = Object.keys(report).length;
        this.barChartData.forEach((dataset) => {
          for (let i = 0; i < dataArrayLength; i++) {
            dataset.data.push(0);
          }
        });
        Object.keys(report).forEach((key, index) => {
          this.barChartLabels.push(key);
          report[key].forEach((month) => {
            const spending = month.expenses.filter((expense) => expense.type === 0)
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue.amount;
            }, 0);
            this.barChartData[month.number - 1].data[index] = spending;
          });
        });
      }
    });
  }

}
