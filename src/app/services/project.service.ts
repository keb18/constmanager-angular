import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Project } from '../project';
// import { PROJECTS } from '../mock-projects';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private companyId = '5aff2106ee464f54902b0297';
  private project_url = 'http://localhost:3000';
  projectsUrl = `${this.project_url}/dashboard/${this.companyId}/projects`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    // TODO: Send the message after fetching the projects
    this.messageService.add('Successfully fetched projects from server');
    return this.http.get<Project[]>(this.projectsUrl);
  }


  // Log a ProjectService message with the MessageService
  private log(message: string) {
    this.messageService.add('ProjectService: ' + message);
  }
}
