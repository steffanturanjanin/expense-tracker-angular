import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSidebar: boolean;
  @Input() user: User;
  @Output() loggedOut: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.showSidebar = true;
  }

  ngOnInit() {
  }

  onLoggedOut() {
    this.loggedOut.emit(true);
  }

}
