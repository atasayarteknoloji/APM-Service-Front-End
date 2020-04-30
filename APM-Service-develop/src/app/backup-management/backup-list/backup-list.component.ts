
import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';
import { ROLETYPE } from '../../shared/role-type.dictionary';
import { MatDialog } from '@angular/material';
import { RequestModel } from 'src/app/_models/request.model';
import { Backupcostumer } from 'src/app/_models/backup.model';
import { CustomerNewRequest } from 'src/app/requests/model/customer-new-request';
import { Custom } from 'src/app/requests/request-list/model/custom';
import { BackuplistProviders } from 'src/app/_services/backup.provider';
import { customerdetail } from 'src/app/_models/customer-detail.model';
import { CustomerDetailComponent } from '../customer-detail/customer-detail/customer-detail.component';
import { POPUPTYPE } from 'src/app/shared/popup';

@Component({
  selector: 'app-backup-list',
  templateUrl: './backup-list.component.html',
  styleUrls: ['./backup-list.component.scss']
})
export class BackupListComponent implements OnInit {
 

  requests: Backupcostumer [] = [];
  customerArray :Backupcostumer [] = [];
  customerNewRequest: customerdetail;
  rolCustomButton: Custom[] = [];
  day:string;
  week:string;
  month:string;
 
  roleId: number;
  source: LocalDataSource;
  Backuprequests: Backupcostumer [] = [];
  
 
  settings = {
    hideSubHeader: true,
    actions: {
      position: 'right',
     
      custom: this.getCustomButtonForRole(),
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      idCostumer: {
        title: 'Müşteri ID',
        filter: true
      },
      name: {
        title: 'İsim',
        filter: false
      },
      family: {
        title: 'Soyisim',
        filter: false,

      },
    
       
      company: {
        title: 'Şirket',
        filter: false
      },
     
      dateStart: {
        title: '  Başlangıç Tarihi',
        filter: false
      },
      tblStatusName: {
        title: 'Durum',
        filter: false
      },
    
    }
  };

  
  constructor(public datepipe: DatePipe,
    private api: BackuplistProviders,
    private router: Router,
    public authApi: AuthenticationService,
    public dialog: MatDialog) {
    this.roleId = authApi.getroleId();
    this.source = new LocalDataSource(this.requests); // create the source
  }

  ngOnInit() {
  this.getBackupEmploye();
  }

  getBackupEmploye() {
    
    this.api.getBackupEmploye().subscribe(data=>{
      this.customerArray = data;
    
      this.requests = data;
    })
  }
  onUserRowSelect(event) {

    if (true) { // eğer müşteri ise yaz
      this.customerNewRequest = event.selected[0];
      const id = this.customerNewRequest.idCostumer;
      const url = '/customer-detail/' + id;
      this.router.navigateByUrl(url);
     
    }
  }
  
  getCustomButtonForRole(): Custom[] {
    const roleId = this.authApi.getroleId();
    console.log('ENUM', ROLETYPE.ADMIN);
    if (roleId === ROLETYPE.CUSTOMER) {
      return this.setCustomArrayForCustomer();
    } else if (roleId === ROLETYPE.ADMIN || roleId === ROLETYPE.TECH_TEAM_MANAGER) {
      return this.setCustomArrayForTechTeamLeader();
    } else {
      return this.setCustomArrayForOtherRole();
    }
  }
  setCustomArrayForTechTeamLeader(): Custom[] {
    return [
      {
        name: 'customerAction',
        title: '<i class="fas fa-angle-right" title="Lisans Detayıni Gör"></i>'
      },
      {
        name: 'editAction',
        title: '<i class="fas fa-edit" title="Tüşteri Bigilerini Güncele"></i>'
      },
     
    ];
  }
  setCustomArrayForCustomer() {
    return [
      {
        name: 'reminderAction',
        title: '<i class="fas fa-bell" title="Lisans Detayıni Gör"></i>'
      },
    
    
    ];
  }

  setCustomArrayForOtherRole() {
    return [
      {
        name: 'editAction',
        title: '<i class="fas fa-edit" title="Lisans Detayıni Gör"></i>'
      },
      {
        name: 'deleteAction',
        title: '<i class="fas fa-trash-alt" title="Talebi Sil"></i>'
      }
    ];
  }

  onCustomAction(event) {
    switch (event.action) {
      case 'customerAction':
        this.customerAction(event.data);
        break;
      case 'reminderAction':
        this.reminderAction(event.data);
        break;
      case 'editAction':
        this.editAction(event.data);
        break;
     
    }
  }
   public reminderAction(formData: any) {
    console.log('reminder action', formData);
  }

  public editAction(formData: any) {

    console.log('customer action', formData);
    console.log(formData.idCostumer);
    if (true) {
      const url = '/customer-edit/' + formData.idCostumer;
      this.router.navigateByUrl(url);
    }
    
  }

  public customerAction(formData: any) {
    console.log('customer action', formData);
    console.log(formData.idCostumer);
    if (true) {
      const url = '/customer-detail/' + formData.idCostumer;
      this.router.navigateByUrl(url);
    }
  }

  

  public assignAction(formData: any) {
    //TODO:kontrol eklenecek. Atamayı yapan rol önemli
    console.log('assign action', formData);
    const dialogRef = this.dialog.open(CustomerDetailComponent, {
      width: '500px',
      data: { id: formData.id, popupType: POPUPTYPE.REQUEST }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBackupEmploye();
    });
  }



}
