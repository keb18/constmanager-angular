import { Component, OnInit } from '@angular/core';

import { Project } from '../../project';

import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  ngOnInit() {  }

}
