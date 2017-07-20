// Imports
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

// Imports models
import { Project } from './../models/project';

@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  public list(): Observable<Project[]> {
    return this.http.get(`${environment.api.uri}/api/projects`)
    .map((x) => x.json().map((y) => this.mapProject(y)));
  }

  public create(name: string, key: string): Observable<Project> {
    return this.http.post(`${environment.api.uri}/api/projects`, {
      name: name,
      key: key
    }).map((x) => this.mapProject(x.json()));
  }

  private mapProject(project: any): Project {
    return new Project(project.key, project.name, project.createdTimestamp);
  }

}
