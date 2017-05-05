// Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// Imports models
import { Consumer } from './../models/consumer';
import { Group } from './../models/group';

@Injectable()
export class GroupsService {

  constructor(private http: Http) { }

  public list(): Observable<Group[]> {
    return this.http.get('http://featuretoggleservice.euromonitor.local:9000/api/groups')
      .map((x) => x.json().map((y) => this.mapGroup(y)));
  }
  
  private mapGroup(group: any): Group {
    return new Group(group.key, group.name, group.consumers, group.createdTimestamp);
  }

}
