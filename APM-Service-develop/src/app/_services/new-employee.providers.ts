import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError, map } from 'rxjs/operators';
import { endpoints } from '../shared/endpoints';
import { User } from '../_models';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { CivilStatus, Sexualities, DegreOfDisabilities, Nationalities, EducationStatus, ComplatedEdications, BloodGroups, WorkType } from '../_models/employee-detail.model';


@Injectable()
export class NewEmployeeProviders {
    header: HttpHeaders;
    private currentUserSubject;
    toastr: any;

    constructor(private http: HttpClient,
        private router: Router,
        private authenticationService: AuthenticationService, ) {
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
    getWorkTypes(): Observable<WorkType[]> {
        return this.http.get(endpoints.WorkTypes.getWorkTypes.path,
            { headers: this.header }).pipe(
                map((data: WorkType[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getWorkTypes hata!');
                })
            );
    }
    getCivilStatus(): Observable<CivilStatus[]> {
        return this.http.get(endpoints.CivilStatus.getCivilStatus.path,
            { headers: this.header }).pipe(
                map((data: CivilStatus[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getCivilStatus hata!');
                })
            );
    }
    getSexualities(): Observable<Sexualities[]> {
        return this.http.get(endpoints.Sexualities.getSexualities.path,
            { headers: this.header }).pipe(
                map((data: Sexualities[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getSexualities hata!');
                })
            );
    }
    getDegreOfDisabilities(): Observable<DegreOfDisabilities[]> {
        return this.http.get(endpoints.DegreOfDisabilities.getDegreOfDisabilities.path,
            { headers: this.header }).pipe(
                map((data: DegreOfDisabilities[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getDegreOfDisabilities hata!');
                })
            );
    }
    getNationalities(): Observable<Nationalities[]> {
        return this.http.get(endpoints.Nationalities.getNationalities.path,
            { headers: this.header }).pipe(
                map((data: Nationalities[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getNationalities hata!');
                })
            );
    }
    getBloodGroups(): Observable<BloodGroups[]> {
        return this.http.get(endpoints.BloodGroups.getBloodGroups.path,
            { headers: this.header }).pipe(
                map((data: BloodGroups[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getBloodGroups hata!');
                })
            );
    }
    getEducationStatus(): Observable<EducationStatus[]> {
        return this.http.get(endpoints.EducationStatus.getEducationStatus.path,
            { headers: this.header }).pipe(
                map((data: EducationStatus[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getEducationStatus hata!');
                })
            );
    }
    getComplatedEdications(): Observable<ComplatedEdications[]> {
        return this.http.get(endpoints.ComplatedEdications.getComplatedEdications.path,
            { headers: this.header }).pipe(
                map((data: ComplatedEdications[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getComplatedEdications hata!');
                })
            );
    }
}
