import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/_models/employee.model';
import { EmployeelistProviders } from 'src/app/_services/employee.provider';
import { AllTeams } from 'src/app/_models/team.model';
import { TeamlistProviders } from 'src/app/_services/team.providers';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

interface DialogData {
  popupType: string;
}

@Component({
  selector: 'app-assign-team',
  templateUrl: './assign-team.component.html',
  styleUrls: ['./assign-team.component.scss']
})
export class AssignTeamComponent implements OnInit {
  questionText: string = '';
  isClickTeamButton = false;
  employees: Employee[] = [];
  teams: AllTeams[] = [];
  form: FormGroup;
  selectedEmployees: Employee[] = [];
  selectedTeams: AllTeams[] = [];
  pageNumber: number = 1;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AssignTeamComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private employeeAPI: EmployeelistProviders,
    private teamAPI: TeamlistProviders,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getEmployeePagination(this.pageNumber - 1);
    this.callAssignTeamAPI();
    this.form = this.fb.group({
      id: new FormArray([])
    });
  }

  getEmployeePagination(page) {
    //TODO çalışan atama servisi çağrılacak
    this.employeeAPI.getEmployeePagination(page).subscribe(data => {
      this.employees = data;
    });
  }

  callAssignTeamAPI() {
    //TODO ekip atama servisi çağrılacak
    this.teamAPI.getAllTeams().subscribe(data => {
      this.teams = data;
    });
  }

  clickClosePopup(event) {
    switch (event) {
      case 'close': {
        this.dialogRef.close();
        break;
      }
      case 'save': {
        if (this.selectedEmployees.length > 0) {
          this.dialogRef.close(this.selectedEmployees);
        }
        else{
          this.dialogRef.close(this.selectedTeams);
        }
        break;
      }
    }
  }

  clickGetTeams() {
    this.isClickTeamButton = true;
    this.callAssignTeamAPI();

  }

  clickGetEmployee() {
    this.isClickTeamButton = false;
    this.getEmployeePagination(this.pageNumber);
  }

  onCheckboxChange(id, event) {
    switch (event) {
      case 'calisan': {
        this.selectedEmployees.push(this.employees.find(item => item.id === id));
        console.log(this.selectedEmployees)
        break;
      }
      case 'ekip': {
        this.selectedTeams.push(this.teams.find(item => item.id === id))
        console.log(this.selectedTeams)
        break;
      }
    }
  }
  clickPagination(event) {
    switch (event) {
      case 'prev': {
        if (this.pageNumber != 1)
          this.pageNumber = this.pageNumber - 1;
        this.getEmployeePagination(this.pageNumber - 1);
        break;
      }
      case 'next': {
        this.pageNumber = this.pageNumber + 1;
        this.getEmployeePagination(this.pageNumber - 1);
        break;
      }
    }
  }
}
