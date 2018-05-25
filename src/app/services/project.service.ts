import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from '../project';
import { PROJECTS } from '../mock-projects';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private messageService: MessageService) { }

  getProjects(): Observable<Project[]> {
    // TODO: Send the message after fetching the projects
    this.messageService.add('Successfully fetched projects from server');
    return of(PROJECTS);
  }
}
