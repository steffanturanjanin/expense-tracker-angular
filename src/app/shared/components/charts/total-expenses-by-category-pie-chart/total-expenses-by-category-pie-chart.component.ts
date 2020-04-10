import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Expense } from '../../../models/expense/expense';
import { Category } from '../../../models/category/category';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-total-expenses-by-category-pie-chart',
  templateUrl: './total-expenses-by-category-pie-chart.component.html',
  styleUrls: ['./total-expenses-by-category-pie-chart.component.css']
})
export class TotalExpensesByCategoryPieChartComponent implements OnInit, OnChanges {

  @Input() expenses$: Observable<Expense[]>;
  @Input() categories$: Observable<Category[]>;
  @Input() requestingExpenses$: Observable<boolean>;
  @Input() requestingCategories$: Observable<boolean>;

  constructor() { }

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'left'
    },
    // tooltips: {
    //   callbacks: {
    //     label: (tooltipItem, data) => {
    //       return new DecimalPipe('en').transform(Number(data.datasets[tooltipItem.datasetIndex].label), '1.0-2');
    //     }
    //   }
    // }
  };

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';
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

  ngOnInit() {
    this.categories$.subscribe((categories) => {
      this.pieChartLabels = this.getCategoryNames(categories);
      for (const i of this.pieChartLabels) {
        this.pieChartData.push(0);
      }
      this.expenses$.subscribe((expenses) => {
        this.pieChartLabels.forEach((category, index) => {
           this.pieChartData[index] = expenses.filter(expense => expense.category !== null && expense.category.name === category)
             .reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
        });
        this.pieChartData = this.pieChartData.slice();
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

  ngOnChanges(changes: SimpleChanges): void {
  }

}
