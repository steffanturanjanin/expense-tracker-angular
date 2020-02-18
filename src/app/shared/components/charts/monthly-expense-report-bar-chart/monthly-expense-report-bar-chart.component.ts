import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {Observable} from 'rxjs';

export interface MonthlyReport {
  year
}

@Component({
  selector: 'app-monthly-expense-report-bar-chart',
  templateUrl: './monthly-expense-report-bar-chart.component.html',
  styleUrls: ['./monthly-expense-report-bar-chart.component.css']
})
export class MonthlyExpenseReportBarChartComponent implements OnInit {
  @Input() report$: Observable<any>;
  constructor() { }

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    legend: {
      display: false
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];


  ngOnInit() {
    this.report$.subscribe((report) => {
      if (report !== null) {
        this.barChartData = [];
        this.barChartLabels[0] = Object.values(Object.values(report)[0])[1] + ' ' + Object.keys(report)[0];
        Object.keys(report).forEach((monthlyReport) => {
          report[monthlyReport].days.forEach((day, index) => {
            this.barChartData.push({ data: [0], label: (index + 1).toString()});
            /*const value = day.expenses.filter((expense) => expense.type === 'expense')
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue.amount;
              }, 0);
            this.barChartData.push({ data: [value], label: (index + 1).toString()});*/
            });
          report[monthlyReport].days.forEach((day, index) => {
            const value = day.expenses.filter((expense) => expense.type === 'expense')
              .reduce((accumulator, currentValue) => {
                return accumulator + currentValue.amount;
              }, 0);
            // this.barChartData.push({ data: [value], label: (index + 1).toString()});
            this.barChartData[index].data[0] = value;
          });
          });
        console.log(this.barChartData);
      }
    });
  }

}
