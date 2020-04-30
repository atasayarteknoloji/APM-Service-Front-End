import { Component, OnInit } from '@angular/core';
import { customerdetail } from 'src/app/_models/customer-detail.model';
import { Router, ActivatedRoute } from '@angular/router';
import { customerdetaillistProviders } from 'src/app/_services/customer-detail.provider';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customer:customerdetail;
  customerdetail :customerdetail[]=[];
  
  constructor(private route: ActivatedRoute,
    private api:customerdetaillistProviders
    ) { 

    }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      
      this.getBackupEmployeDetail(params.get('idCostumer'))
    });
  }

  getBackupEmployeDetail(value){

    this.api.getBackupEmployeDetail(value).subscribe(data => {
  
      this.customerdetail = data;
    });
  }


}
