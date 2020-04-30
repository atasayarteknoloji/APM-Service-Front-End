import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-widget',
  templateUrl: './basic-widget.component.html',
  styleUrls: ['./basic-widget.component.scss']
})
export class BasicWidgetComponent implements OnInit {
@Input('') backgroundColor;
@Input('')icon;
@Input('') cardCategory;
@Input('') cardValue;

  constructor() { }

  ngOnInit() {
  }

  getIcon(){
    switch (this.icon) {
      case 'completed':
        return 'far fa-check-circle';
      case 'progress':
        return 'fas fa-sync';
      case 'new':
        return 'far fa-list-alt'
    }
  }
}
