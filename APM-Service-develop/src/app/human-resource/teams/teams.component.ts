import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ROUTING } from '../../shared/routing';
import { Router } from '@angular/router';
import { Team } from 'src/app/_models/team.model';
import { TeamlistProviders } from 'src/app/_services/team.providers';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;
  teamArray: Team[];
  teams: Team[] = [];
  team: Team;
  imageshow: string;
  imageModel;
  values = '';
  constructor(private api: TeamlistProviders) {
    
  }

  ngOnInit() {

  }


  onKeydown(event) {
    this.values = event.target.value;
    if (this.values.length > 2) {
      console.log(this.values);
      this.getSearchTeam(this.values);
    }
    else {
      this.getTeams();
    }

  };

  getSearchTeam(value) {

    this.api.getSearchTeam(value).subscribe(data => {
      this.teamArray = data;

    })
    // this.team = new Team();
    //  this.imageshow = 'data:image/jpeg;base64,';
    // this.api.getSearchTeam(value).subscribe(data => {
    // this.teamArray = data;
    //  this.teamArray.forEach(item => {
    // this.employee.src = item.src;
    // })
    // this.imageshow = this.imageshow + this.employee.src;
    // })
  }

  getTeams() {
    this.api.getTeams().subscribe(data => {
      this.teams = data;
      console.log("team",this.teams)
    })
  }
  setTeams() {
    this.teamArray.forEach(item => {
      this.team.teamCountDTOs = item.teamCountDTOs;
      this.team.empList = item.empList;
      this.teamArray.push(this.team);
      console.log("gelen", this.teamArray);
      console.log("tek", this.team);
      console.log("gösterilen", this.teams)
    })
  }
}
