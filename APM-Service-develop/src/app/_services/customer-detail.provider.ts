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
import { Backupcostumer } from '../_models/backup.model';
import { customerdetail } from '../_models/customer-detail.model';


@Injectable()
export class customerdetaillistProviders {
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
        this.header = new HttpHeaders()
            .set('Authorization', `Bearer ${(this.currentUserSubject.token)}`)
            .set('Content-Type', 'application/json');
    }
   
   

    getBackupEmployeDetail(value): Observable<customerdetail[]> {
        return this.http.get(endpoints.backupDetail.getBackupEmployeDetail.path,
            { headers: this.header, params: {idCostumer: value} }).pipe(
                map((data: customerdetail[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getSearch hata!');
                })
            );
    }



}
