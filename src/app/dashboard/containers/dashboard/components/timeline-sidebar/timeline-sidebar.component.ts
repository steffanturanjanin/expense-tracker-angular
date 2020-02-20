import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
export class TimelineSidebarComponent implements OnInit {
  @Input() months$;
  @Output() monthlyReportSelected: EventEmitter<Month> = new EventEmitter();
  @Output() overallReportSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMonthlyReportSelected(month: Month) {
    this.monthlyReportSelected.emit(month);
  }

  onOverallReportSelected() {
    this.overallReportSelected.emit();
  }

}
