import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewPositionComponent } from './new-position/new-position.component';
import { PositionModel } from 'src/app/_models/position.model';
import { CivilStatus, Sexualities, Nationalities, DegreOfDisabilities, EducationStatus, ComplatedEdications, BloodGroups, WorkType } from 'src/app/_models/employee-detail.model';
import { NewEmployeeProviders } from 'src/app/_services/new-employee.providers';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {
  model: NgbDateStruct;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  isClickJobInfo = true;
  isClickPersonalInfo = false;
  isClickContactInfo = false;
  isClickEducationInfo = false;
  //#region ::model
  positionModel: PositionModel;
  positionList: PositionModel[] = [];
  workTypes: WorkType[] = [];
  civilStatus: CivilStatus[] = [];
  sexualities: Sexualities[] = [];
  disabilities: DegreOfDisabilities[] = [];
  nationalities: Nationalities[] = [];
  bloodGroups: BloodGroups[] = [];
  educationStatus: EducationStatus[] = [];
  complatedEdications: ComplatedEdications[] = [];
  //#endregion

  //#region ::form page header
  title = "Yeni Çalışan";
  subtitle = "Şirketinize başlayan yeni çalışanlar ile ilgili tüm bilgileri kaydedebilirsiniz."
  //#endregion
  constructor(public dialog: MatDialog,
    private api: NewEmployeeProviders) { }

  ngOnInit() {
    this.getWorkTypes();
    this.getCivilStatus();
    this.getSexualities();
    this.getNationalities();
    this.getBloodGroups();
    this.getDegreOfDisabilities();
    this.getEducationStatus();
    this.getComplatedEdications();
  }

  allClickReset() {
    this.isClickJobInfo = false;
    this.isClickPersonalInfo = false;
    this.isClickContactInfo = false;
    this.isClickEducationInfo = false;
  }
  clickJobInfo() {
    this.allClickReset();
    this.isClickJobInfo = true;
  }
  clickPersonalInfo() {
    this.allClickReset();
    this.isClickPersonalInfo = true;
  }
  clickContactInfo() {
    this.allClickReset();
    this.isClickContactInfo = true;
  }
  clickEducationInfo() {
    this.allClickReset();
    this.isClickEducationInfo = true;
  }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }
  public addPosition() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.closeOnNavigation = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '700px';
    const dialogRef = this.dialog.open(NewPositionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.positionModel = result;
      this.positionList.push(this.positionModel);
      console.log('result', this.positionModel);
      console.log('list', this.positionList);
    });
  }
  getWorkTypes() {
    this.api.getWorkTypes().subscribe(data => {
      this.workTypes = data;
    })
  }
  getCivilStatus() {
    this.api.getCivilStatus().subscribe(data => {
      this.civilStatus = data;
    })
  }
  getSexualities() {
    this.api.getSexualities().subscribe(data => {
      this.sexualities = data;
    })
  }
  getDegreOfDisabilities() {
    this.api.getDegreOfDisabilities().subscribe(data => {
      this.disabilities = data;
    })
  }
  getNationalities() {
    this.api.getNationalities().subscribe(data => {
      this.nationalities = data;
    })
  }
  getBloodGroups() {
    this.api.getBloodGroups().subscribe(data => {
      this.bloodGroups = data;
    })
  }
  getEducationStatus() {
    this.api.getEducationStatus().subscribe(data => {
      this.educationStatus = data;
    })
  }
  getComplatedEdications() {
    this.api.getComplatedEdications().subscribe(data => {
      this.complatedEdications = data;
    })
  }
   
}
