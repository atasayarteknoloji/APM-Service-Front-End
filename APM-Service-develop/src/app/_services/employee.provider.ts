import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { endpoints } from '../shared/endpoints';
import { User } from '../_models';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { CompanyModel } from '../_models/company.model';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../_models/employee.model';
import { EmployeeDetail } from '../_models/employee-detail.model';


@Injectable()
export class EmployeelistProviders {
    [x: string]: any;
    header: HttpHeaders;
    private currentUserSubject;

    constructor(private http: HttpClient,
        private router: Router,
        private authenticationService: AuthenticationService,
        private toastr: ToastrService) {
        this.setHeader();
    }

    setHeader() {
        this.currentUserSubject = (JSON.parse(localStorage.getItem('currentUser')));
        if (this.currentUserSubject) {
            this.header = new HttpHeaders()
                .set('Authorization', `Bearer ${(this.currentUserSubject.token)}`)
                .set('Content-Type', 'application/json');
        }
    }
    getEmployee(): Observable<Employee[]> {
        return this.http.get(endpoints.employees.getEmployees.path,
            { headers: this.header }).pipe(
                map((data: Employee[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getEmployee hata!');
                })
            );
    }
    getSearch(value): Observable<Employee[]> {
        return this.http.get(endpoints.employees.getSearch.path,
            { headers: this.header, params: { searchValue: value, page: "0" } }).pipe(
                map((data: Employee[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getSearch hata!');
                })
            );
    }
    getEmployeePagination(pageValue): Observable<Employee[]> {
        return this.http.get(endpoints.employees.getEmployeePagination.path,
            { headers: this.header, params: { page: pageValue } }).pipe(
                map((data: Employee[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getEmployeePagination hata!');
                })
            );
    }
    getEmployeeDetailById(): Observable<EmployeeDetail[]> {
        return this.http.get(endpoints.employees.getEmployeeDetailById.path,
            { headers: this.header, params: { id: "1" } }).pipe(
                map((data: EmployeeDetail[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getEmployeePagination hata!');
                })
            );
    }

}
