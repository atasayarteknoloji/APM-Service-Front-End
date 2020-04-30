import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignItemComponent } from 'src/app/components/assign-item/assign-item.component';
import { AssignTeamComponent } from 'src/app/components/assign-team/assign-team.component';
import { RequestProviders } from 'src/app/_services/request.providers';
import { RequestModel } from 'src/app/_models/request.model';
import { LogModel } from 'src/app/_models/request-log.model';
import { ItemModel } from 'src/app/_models/item.model';
import { AllTeams } from 'src/app/_models/team.model';
import { ItemProviders } from 'src/app/_services/item.providers';
import { Employee } from 'src/app/_models/employee.model';
import { AssignRequest, SelectedRequest, RequestItems } from 'src/app/_models/assign-request.model';


@Component({
  selector: 'app-assign-request',
  templateUrl: './assign-request.component.html',
  styleUrls: ['./assign-request.component.scss']
})
export class AssignRequestComponent implements OnInit {
  isClickOpenTeamPopup = false;
  isClickOpenToolboxPopup = false;
  isClickTeamButton = false;
  expAssignment = '';
  reqDetails: RequestModel;
  requestLog: LogModel[];
  items: ItemModel[] = [];
  materials: ItemModel[] = [];
  teamsArray: AllTeams[] = [];
  teams: AllTeams;
  employee: Employee[] = [];
  assingRequestModel: AssignRequest;
  assignRequestModelArray: AssignRequest[] = [];
  begginDate: Date;
  endDate: Date;
  title = 'Talep Atama';
  subtitle = 'Talebinize ekipler ve malzemeler atayabilirsiniz.';

  constructor(private route: ActivatedRoute,
    public dialog: MatDialog,
    private api: RequestProviders,
    private itemApi: ItemProviders) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getRequestDetailAPI(params.get('ticketId'));
    });
  }

  getRequestDetailAPI(id) {
    this.api.getRequestsDetailById(id).subscribe(data => {
      this.reqDetails = data;
    });
  }

  clickOpenPopup(popupType) {
    switch (popupType) {
      case 'team': {
        this.assignTeam(popupType);
        break;
      }
      case 'material': {
        this.assingMaterial(popupType);
        break;
      }
    }
  }

  clickAssignRequest() {
    this.setAssignRequest();
    //TODO atama post servisi çağırılacak
  }
  setAssignRequest() {
    this.reqDetails = new RequestModel;
    this.assingRequestModel = new AssignRequest;
    this.assingRequestModel.requests = new SelectedRequest;
    debugger;
    this.assingRequestModel.requests.id = this.reqDetails.id;
    this.assingRequestModel.requests.expAssignment = this.expAssignment;
    this.assingRequestModel.requests.plannedStartDate = this.begginDate;
    this.assingRequestModel.requests.plannedFinishDate = this.endDate;
    console.log(this.assingRequestModel)
  }

  requestAssignmentAPI(assingReq) {
    this.api.updateRequestStatus(assingReq).subscribe(data => {
      //BU NEDEN BURADA???!??
    });
  }

  public assignTeam(formData: any) {
    console.log('ekip atama', formData);
    const dialogRef = this.dialog.open(AssignTeamComponent, {
      width: '500px',
      data: { popupType: formData }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        result.forEach(employee => {
          this.employee.push(employee);
        });
        result.forEach(team => {
          this.teamsArray.push(team);
        });
      }
    });
    console.log('employee', this.employee);
    console.log('team', this.teamsArray);
  }

  public assingMaterial(formData: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    const dialogRef = this.dialog.open(AssignItemComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        result.forEach(item => {
          this.materials.push(item);
        });
      }
    });
  }

  getRequestTimeLineById(id) {
    this.api.getRequestTimeLineById(id).subscribe(data => {
      this.requestLog = data;
    });
  }

  clickDeleteItem(assignitem) {
    console.log(assignitem);
    const index = this.materials.indexOf(assignitem, 0);
    if (index > -1) {
      this.materials.splice(index, 1);
    }
    console.log(this.materials)
  }

  getAllItems() {
    this.itemApi.getAllItems().subscribe(data => {
      this.items = data;
    });
  }

}
