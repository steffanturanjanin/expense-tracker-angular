import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {icons} from '../../../../constants/icons';

@Component({
  selector: 'app-category-icon-list',
  templateUrl: './category-icon-list.component.html',
  styleUrls: ['./category-icon-list.component.css']
})
export class CategoryIconListComponent implements OnInit {

  icons: string[];
  filteredIcons: string[];
  @Input() selected: string;
  @Output() selectedIcon = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.icons = icons;
    this.filteredIcons = icons;
  }

  onChange(searchValue: string) {
    this.filteredIcons = icons;
    this.filteredIcons = this.filteredIcons.filter((icon) => (icon.includes(searchValue)));
    console.log(this.filteredIcons);
  }

  onIconSelected(icon: string) {
    this.selectedIcon.emit(icon);
    //this.selected = icon;
  }
}
