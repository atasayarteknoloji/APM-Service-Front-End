import { Component, OnInit } from '@angular/core';
import { RequestProviders } from 'src/app/_services/request.providers';
import { SupportTicket } from 'src/app/_models/support-ticket.model';
import { MatDialog } from '@angular/material';
import { RemoveItemComponent } from 'src/app/components/remove-item/remove-item.component';
import { POPUPTYPE } from '../../popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-tickets',
  templateUrl: './support-tickets.component.html',
  styleUrls: ['./support-tickets.component.scss']
})
export class SupportTicketsComponent implements OnInit {
  isClickedDaily = true;
  isClickedWeekly = false;
  isClickedMonthly = false;
  supportTicketModel: SupportTicket[] = [];
  name: string;
  nameArray: string[] = [];

  constructor(private requestApi: RequestProviders,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.getMyWorkPool(1);
  }
  getMyWorkPool(prm) {
    this.requestApi.getMyWorkPool(prm).subscribe(data => {
      this.supportTicketModel = data;
      this.supportTicketModel.forEach(item => {
        this.name = item.userName.charAt(0);
        this.nameArray.push(this.name);
        console.log(this.supportTicketModel)
      })
    })

  }
  showSupportTickets(type) {
    switch (type) {
      case 'daily': {
        this.isClickedDaily = true;
        this.isClickedMonthly = false;
        this.isClickedWeekly = false;
        this.getMyWorkPool(1);
        break;
      }
      case 'weekly': {
        this.isClickedDaily = false;
        this.isClickedMonthly = false;
        this.isClickedWeekly = true;
        this.getMyWorkPool(2);
        break;
      }
      case 'monthly': {
        this.isClickedDaily = false;
        this.isClickedMonthly = true;
        this.isClickedWeekly = false;
        this.getMyWorkPool(3);
        break;
      }
    }
  }
  public startAction(formData: any) {
    console.log('Start action', formData);
    const dialogRef = this.dialog.open(RemoveItemComponent, {
      width: '500px',
      data: { id: formData, popupType: POPUPTYPE.START }
    });
    dialogRef.afterClosed().subscribe(result => {
      //KAPANINCA NE OLACAĞINI BİLMİYORUM HENÜZ
    });
  }
  public pauseAction(formData: any) {
    console.log('pause action', formData);
    const dialogRef = this.dialog.open(RemoveItemComponent, {
      width: '500px',
      data: { id: formData, popupType: POPUPTYPE.PAUSE }
    });
    dialogRef.afterClosed().subscribe(result => {
      //KAPANINCA NE OLACAĞINI BİLMİYORUM HENÜZ
    });
  }
  public stopAction(formData: any) {
    console.log('pause action', formData);
    const dialogRef = this.dialog.open(RemoveItemComponent, {
      width: '500px',
      data: { id: formData, popupType: POPUPTYPE.STOP }
    });
    dialogRef.afterClosed().subscribe(result => {
      //KAPANINCA NE OLACAĞINI BİLMİYORUM HENÜZ
    });
  }
  onUserRowSelect(event) {
    console.log(event)
    const url = '/closed-ticket/' + event;
    debugger;
    this.router.navigateByUrl(url);
  }
}
