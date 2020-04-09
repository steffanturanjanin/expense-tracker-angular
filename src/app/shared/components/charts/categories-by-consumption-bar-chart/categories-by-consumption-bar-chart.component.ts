import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Observable } from 'rxjs';
import { Expense } from '../../../models/expense/expense';
import { Category } from '../../../models/category/category';

@Component({
  selector: 'app-categories-by-consumption-bar-chart',
  templateUrl: './categories-by-consumption-bar-chart.component.html',
  styleUrls: ['./categories-by-consumption-bar-chart.component.css']
})
export class CategoriesByConsumptionBarChartComponent implements OnInit {

  @Input() expenses$: Observable<Expense[]>;
  @Input() categories$: Observable<Category[]>;
  @Input() requestingExpenses$: Observable<boolean>;
  @Input() requestingCategories$: Observable<boolean>;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}]},
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    },
    legend: {
      position: 'right'
    }
  };

  public barChartLabels: Label[] = ['Categories'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public chartColors = [{backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']}];

  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    this.categories$.subscribe((categories) => {
      const categoryNames = this.getCategoryNames(categories);
      this.barChartData = [];
      categoryNames.forEach((category) => {
        this.barChartData.push({ data: [0], label: category});
      });
      this.expenses$.subscribe((expenses) => {
        categoryNames.forEach((category, index) => {

          this.barChartData[index].data[0] = expenses
            .filter(expense => expense.category !== null && expense.category.name === category)
            .reduce((accumulator) => accumulator + 1, 0);
        });
        this.barChartData = this.barChartData.slice();
      });
    });
  }

  getCategoryNames(categories: Category[]): string[] {
    const categoryNames = [];
    categories.forEach(category => {
      categoryNames.push(category.name);
    });
    return categoryNames;
  }

}
