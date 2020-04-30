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


@Injectable()
export class CompanyProviders {
  header: HttpHeaders;
  private currentUserSubject;

  constructor(private http: HttpClient,
    private router: Router,
    private authenticationService: AuthenticationService) {
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

  getAllCustomer(): Observable<CompanyModel[]> {
    return this.http.get(endpoints.company.getAllCustomer.path, { headers: this.header }).pipe(
      map((data: CompanyModel[]) => {
        return data;
      }), catchError(error => {

        return throwError('getAllCustomer hata!');
      })
    );
  }

  getCompanies(): Observable<CompanyModel[]> {
    return this.http.get(endpoints.company.getCompanies.path, { headers: this.header }).pipe(
      map((data: CompanyModel[]) => {
        return data;
      }), catchError(error => {
        //his.authenticationService.logout();
        //this.router.navigate(['/login']);
        return throwError('getRequestType hata!');
      })
    );
  }
}
