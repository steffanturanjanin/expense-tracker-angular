import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../../../shared/models/category/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input() category: Category;
  @Input() deletingCategoryId: number;
  @Input() requesting$: Observable<boolean>;

  @Output() deletedCategory = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit() {
  }

  deleteCategory(id: number) {
    this.deletedCategory.emit(id);
  }
}
