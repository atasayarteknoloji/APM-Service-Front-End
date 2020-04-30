import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeelistProviders } from 'src/app/_services/employee.provider';
import { Employee } from 'src/app/_models/employee.model';
import {Router} from '@angular/router';
import {ROUTING} from 'src/app/shared/routing';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;
  textchange = false;
  employeesArray: Employee[] = [];
  employee: Employee;
  imageshow: string;
  
  employserch: Employee[] = [];
  values = '';
  //imagemodel: image= new image();


  constructor(private api: EmployeelistProviders,private router: Router) {
    
  }

  ngOnInit() {
    this.getEmployees();
  }

  onKeydown(event) {
    this.values = event.target.value;
    if (this.values.length > 2) {
      console.log(this.values);
      this.getSearch(this.values);
    }
    else {
      this.getEmployees();
    }
  };

  getSearch(value) {
    this.api.getSearch(value).subscribe(data => {
      this.employeesArray = data;
    });
  }

  getEmployees() {
    this.api.getEmployee().subscribe(data => {
      this.employeesArray = data;
    });
  }

  addNewEmployee(){
    const url = '/'+ROUTING.NEW_EMPLOYEE;
    this.router.navigateByUrl(url);
  }
}
