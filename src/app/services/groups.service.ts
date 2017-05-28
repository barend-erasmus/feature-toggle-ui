// Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

// Imports models
import { Consumer } from './../models/consumer';
import { Group } from './../models/group';

@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  public list(): Observable<Group[]> {
    return this.http.get(`${environment.api.uri}:${environment.api.port}/api/groups`)
      .map((x) => x.json().map((y) => this.mapGroup(y)));
  }

  public create(name: string, key: string): Observable<Group> {
    return this.http.post(`${environment.api.uri}:${environment.api.port}/api/groups`, {
      name: name,
      key: key
    }).map((x) => this.mapGroup(x.json()));
  }

  public find(key: string): Observable<Group> {
    return this.http.get(`${environment.api.uri}:${environment.api.port}/api/groups?key=${key}`).map((x) => this.mapGroup(x.json()));
  }

  public addConsumers(key: string, consumerIds: string[]): Observable<boolean> {
    return this.http.post(`${environment.api.uri}:${environment.api.port}/api/groups/consumers`, {
      key: key,
      consumerIds: consumerIds,
      type: 'normal'
    })
      .map((x) => true);
  }

  public removeConsumers(key: string, consumerIds: string[]): Observable<boolean> {
    return this.http.delete(`${environment.api.uri}:${environment.api.port}/api/groups/consumers`, new RequestOptions({
      body: {
        key: key,
        consumerIds: consumerIds,
        type: 'normal'
      }
    })).map((x) => true);
  }
  
  private mapGroup(group: any): Group {
    return new Group(group.key, group.name, group.consumers, group.createdTimestamp);
  }

}
