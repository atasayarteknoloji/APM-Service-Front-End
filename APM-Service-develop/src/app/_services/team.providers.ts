import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import 'rxjs/add/operator/map';
import {catchError, map} from 'rxjs/operators';
import {endpoints} from '../shared/endpoints';
import {User} from '../_models';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {CompanyModel} from '../_models/company.model';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../_models/employee.model';
import { Team, AllTeams } from '../_models/team.model';


@Injectable()
export class TeamlistProviders {
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
    getTeams(): Observable<Team[]> {
        return this.http.get(endpoints.teams.getTeams.path,
            { headers: this.header }).pipe(
                map((data: Team[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getEmployee hata!');
                })
            );
    }
    getAllTeams(): Observable<AllTeams[]> {
        return this.http.get(endpoints.teams.getAllTeams.path,
            { headers: this.header }).pipe(
                map((data: AllTeams[]) => {
                    return data;
                }), catchError(error => {
                    this.toastr.error('Lütfen gerekli yerleri doldurunuz.', 'HATA', {
                        timeOut: 3000
                    });
                    return throwError('getEmployee hata!');
                })
            );
    }
    getSearchTeam(value): Observable<Team[]> {
        return this.http.get(endpoints.teams.getSearchTeam.path,
            { headers: this.header, params: { searchValue: value, page: "0"} }).pipe(
                map((data: Team[]) => {
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
