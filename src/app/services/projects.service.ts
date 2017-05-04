// Imports
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

// Imports models
import { Project } from './../models/project';

@Injectable()
export class ProjectsService {

  constructor() { }

  public list(): Observable<Project[]> {
    return new Observable(observer => {
         observer.next([new Project('project-1', 'Project-1', null)]);
         observer.complete();
      });
  }

  public create(name: string, key: string): Observable<Project> {
    return new Observable(observer => {
         observer.next(new Project(key, name, null));
         observer.complete();
      });
  }

}
