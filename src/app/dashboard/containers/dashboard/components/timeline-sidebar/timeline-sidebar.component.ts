import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Month {
  year: number;
  number: number;
  name: string;
}

@Component({
  selector: 'app-timeline-sidebar',
  templateUrl: './timeline-sidebar.component.html',
  styleUrls: ['./timeline-sidebar.component.css']
})
export class TimelineSidebarComponent {
  @Input() months$;
  @Output() monthlyReportSelected: EventEmitter<Month> = new EventEmitter();
  @Output() overallReportSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onMonthlyReportSelected(month: Month) {
    this.monthlyReportSelected.emit(month);
  }

  onOverallReportSelected() {
    this.overallReportSelected.emit();
  }

}
