import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomerNewRequest } from '../model/customer-new-request';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services';
import { Custom } from './model/custom';
import { ROLETYPE } from '../../shared/role-type.dictionary';
import { MatDialog } from '@angular/material';
import { RemoveItemComponent } from 'src/app/components/remove-item/remove-item.component';
import { POPUPTYPE } from 'src/app/shared/popup';
import { RequestProviders } from 'src/app/_services/request.providers';
import { RequestModel } from 'src/app/_models/request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  //#region page header param
  title = "Talep Listesi";
  subtitle = "Taleplerinizi statülerine göre filtreleyebilir ve istediğiniz verileri görüntüleyebilirsiniz.";
  //#endregion
  // Request list params
  clickNewRequest = true;
  clickProgressRequest = false;
  clickCompletedRequest = false;

  requests: RequestModel[] = [];
  // new Ticket for customer model
  customerNewRequest: CustomerNewRequest;
  rolCustomButton: Custom[] = [];
  //roledata
  roleId: number;

  source: LocalDataSource; // add a property to the component

  settings = {
    hideSubHeader: true,
    actions: {
      position: 'right',
      columnTitle: '',
      custom: this.getCustomButtonForRole(),
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      id: {
        title: 'Talep No',
        filter: false
      },
      companyName: {
        title: 'Cari',
        filter: false,
      },
      name: {
        title: 'Talep Tipi',
        filter: false,
      },
      subject: {
        title: 'Talep Detayı',
        filter: false
      },
      requestStatusName: {
        title: 'Statü',
        filter: false
      },
      createTime: {
        title: 'Oluşturulma',
        filter: false,
        valuePrepareFunction: (date) => {
          const raw = new Date(date);
          const formatted = this.datepipe.transform(raw, 'HH:mm  dd/MM/yyyy');
          return formatted;
        }
      }
    }
  };


  constructor(public datepipe: DatePipe,
    private api: RequestProviders,
    private router: Router,
    public authApi: AuthenticationService,
    public dialog: MatDialog) {
    this.roleId = authApi.getroleId();
    this.source = new LocalDataSource(this.requests); // create the source
  }

  ngOnInit() {
    this.getRequestByTypeAPI(1);
  }

  getRequestByTypeAPI(type) {
    this.api.getRequestsByType(type).subscribe(data => {
      this.requests = data
    })
  }

  getCustomButtonForRole(): Custom[] {
    const roleId = this.authApi.getroleId();
    console.log('ENUM', ROLETYPE.ADMIN);
    console.log('roleId', roleId)
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
        name: 'assignAction',
        title: '<i class="fas fa-angle-right" title="Talebi Ata"></i>'
      },
      {
        name: 'editAction',
        title: '<i class="fas fa-edit" title="Talebi Düzenle"></i>'
      },
      {
        name: 'deleteAction',
        title: '<i class="fas fa-trash-alt" title="Talebi Sil"></i>'
      }
    ];
  }

  setCustomArrayForCustomer() {
    return [
      {
        name: 'reminderAction',
        title: '<i class="fas fa-bell" title="Talebi Hatırlat"></i>'
      },
      {
        name: 'editAction',
        title: '<i class="fas fa-edit" title="Talebi Düzenle"></i>'
      },
      {
        name: 'deleteAction',
        title: '<i class="fas fa-trash-alt" title="Talebi Sil"></i>'
      }
    ];
  }

  setCustomArrayForOtherRole() {
    return [
      {
        name: 'editAction',
        title: '<i class="fas fa-edit" title="Talebi Düzenle"></i>'
      },
      {
        name: 'deleteAction',
        title: '<i class="fas fa-trash-alt" title="Talebi Sil"></i>'
      }
    ];
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'itemTypeId',
        search: query
      },
      {
        field: 'itemName',
        search: query
      },
      {
        field: 'requestStatusId',
        search: query
      }
    ], false);
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

  clickRequestButton(requestType) {
    switch (requestType) {
      case 'new': {
        this.clickNewRequest = true;
        this.clickCompletedRequest = false;
        this.clickProgressRequest = false;
        this.getRequestByTypeAPI(1);
        break;
      }
      case 'progress': {
        this.clickNewRequest = false;
        this.clickCompletedRequest = false;
        this.clickProgressRequest = true;
        this.getRequestByTypeAPI(2);
        break;
      }
      case 'completed': {
        this.clickNewRequest = false;
        this.clickCompletedRequest = true;
        this.clickProgressRequest = false;
        this.getRequestByTypeAPI(3);
        break;
      }
    }
  }

  onUserRowSelect(event) {

    if (true) { // eğer müşteri ise yaz
      this.customerNewRequest = event.selected[0];
      const ticketId = this.customerNewRequest.id;

      //BURADA REQUEST-DETAİL COMPONENTİNE TICKETID YOLLAMALIYIM
      const url = '/request-detail/' + ticketId;
      debugger;
      this.router.navigateByUrl(url);
      /***this.api.getRequestsDetailById(ticketId).subscribe(data=>{
      })***/
    }
  }

  onCustomAction(event) {
    switch (event.action) {
      case 'assignAction':
        this.assignAction(event.data);
        break;
      case 'reminderAction':
        this.reminderAction(event.data);
        break;
      case 'editAction':
        this.editAction(event.data);
        break;
      case 'deleteAction':
        this.deleteAction(event.data);
        break;
    }
  }


  public assignAction(formData: any) {
    //TODO:kontrol eklenecek. Atamayı yapan rol önemli
    console.log('assign action', formData);
    console.log(formData.id);
    if (true) {
      const url = '/request-assign/' + formData.id;
      this.router.navigateByUrl(url);
    }
  }

  public reminderAction(formData: any) {
    console.log('reminder action', formData);
  }

  public editAction(formData: any) {
    console.log('edit action', formData);
  }

  public deleteAction(formData: any) {
    console.log('delete action', formData);
    const dialogRef = this.dialog.open(RemoveItemComponent, {
      width: '500px',
      data: { id: formData.id, popupType: POPUPTYPE.CANCEL }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getRequestByTypeAPI(1);// statüsü yeni olanları tekrar çağırıp tabloyu refreshliyorum
    });
  }
}
