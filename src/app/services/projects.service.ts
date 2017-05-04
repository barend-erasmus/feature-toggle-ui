// Imports
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// Imports models
import { Project } from './../models/project';

@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  public list(): Observable<Project[]> {
    return this.http.get('http://featuretoggleservice.euromonitor.local:9000/api/projects')
    .map((x) => x.json().map((y) => new Project(y.key, y.name, y.createdTimestamp)));
  }

  public create(name: string, key: string): Observable<Project> {
    return this.http.post('http://featuretoggleservice.euromonitor.local:9000/api/projects', {
      name: name,
      key: key
    }).map((x) => new Project(x.json().key, x.json().name, x.json().createdTimestamp));
  }

}
