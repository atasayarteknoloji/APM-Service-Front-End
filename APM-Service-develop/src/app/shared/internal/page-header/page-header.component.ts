import {Component, OnInit, Input} from '@angular/core';
import {SidebarService} from 'src/app/components/sidebar/sidebar.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],

})
export class PageHeaderComponent implements OnInit {
  @Input('') title;
  @Input('') subtitle;
  constructor(public sidebarservice: SidebarService) {
    console.log('title',this.title);
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
}
