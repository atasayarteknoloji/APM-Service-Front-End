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


@Injectable()
export class BackuplistProviders {
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


    getBackupEmploye(): Observable<Backupcostumer[]> {
        return this.http.get(endpoints.backup.getBackupEmploye.path, { headers: this.header }).pipe(
            map((data: Backupcostumer[]) => {
              
              return data;
            }), catchError(error => {
              this.toastr.error('Oppps! Ufak bir hata ekibimiz ile iletişime geçiniz.', 'Hata!', {
                timeOut: 3000
              });
              return throwError('getBackupEmploye hata!');
            })
          );
    }

    /*  getBackupEmploye(): Observable<Backupcostumer[]> {
          debugger
          return this.http.get(endpoints.backup.getBackupEmploye.path, { headers: this.header }).pipe(
              map((data: Backupcostumer[]) => {
                return data;
              }), catchError(error => {
        
                return throwError('getAllCustomer hata!');
              })
            );
      }
  */


}
