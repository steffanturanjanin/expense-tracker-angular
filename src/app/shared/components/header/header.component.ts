import {Component, Input, OnInit} from '@angular/core';
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

  constructor() {
    this.showSidebar = true;
  }

  ngOnInit() {
  }

  toggleShowSidebar() {
    this.showSidebar = !this.showSidebar;
  }

}
