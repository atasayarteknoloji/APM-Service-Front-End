import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../app/_models';
import { AuthenticationService, UserService } from '../../app/_services';
import { SidebarService } from '../components/sidebar/sidebar.service';
import { RequestProviders } from '../_services/request.providers';
import { SixMonth } from '../_models/six-month.model';
import { Label } from 'ng2-charts';

@Component(
  {
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
  })
export class HomeComponent implements OnInit {
  myComplatedJob: SixMonth[] = [];
  chartLabels: Label;
  chartData: number;
  chartDataArray: number[] = [];
  chartLabelArray: Label[] = [];
  myJobToday: any;
  myJobInProgress: any;
  myJobDone: any;
  loading = false;
  currentUser: User;
  userFromApi: User;
  title: string = "Dashboard";
  subtitle: string = "APM Yönetici Paneli";

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    public sidebarservice: SidebarService,
    private api: RequestProviders
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    this.getMyRequestCount();
    this.getMyWork6Month();
  }
  getMyRequestCount(){
    this.api.getMyRequestsCount().subscribe(data=>{
      this.myJobToday=data[0];
      this.myJobInProgress = data[1];
      this.myJobDone = data[2];
    })
  }
  
  /***
 * SON 6 AYIN VERİLERİ ÇEKİLİYOR
 */
  getMyWork6Month() {
    this.api.getMyWork6Month().subscribe(data => {
      this.myComplatedJob = data;
      console.log(this.myComplatedJob)
      this.setMyWorkMonth();
    })
  }

  /***
   * DEĞİŞKENLER DOLDURULUYOR
   */
  setMyWorkMonth() {
    this.myComplatedJob.forEach(item => {
      this.chartLabels = item[0]
      this.chartData = item[1]
      this.chartLabelArray.push(this.chartLabels)
      this.chartDataArray.push(this.chartData)
      console.log("data", this.chartDataArray);
      console.log("label", this.chartLabelArray)
    })
  }
}
