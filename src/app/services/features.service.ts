// Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// Imports models
import { Feature } from './../models/feature';
import { FeatureGroup } from './../models/feature-group';
import { Option } from './../models/option';
import { AssociatedProject } from './../models/associated-project';

@Injectable()
export class FeaturesService {

  constructor(private http: Http) { }

  public list(projectKey: string): Observable<Feature[]> {
    if (projectKey === null) {
      return this.http.get(`http://featuretoggleservice.euromonitor.local:9000/api/features`)
        .map((x) => x.json().map((y) => this.mapFeature(y)));
    } else {
      return this.http.get(`http://featuretoggleservice.euromonitor.local:9000/api/features?projectKey=${projectKey}`)
        .map((x) => x.json().map((y) => this.mapFeature(y)));
    }
  }

  public find(key: string): Observable<Feature> {
    return this.http.get(`http://featuretoggleservice.euromonitor.local:9000/api/features?key=${key}`)
      .map((x) => this.mapFeature(x.json()));
  }

  public addGroups(key: string, groupKeys: string[]): Observable<boolean> {
    return this.http.post(`http://featuretoggleservice.euromonitor.local:9000/api/features/groups`, {
      key: key,
      groupKeys: groupKeys
    })
      .map((x) => true);
  }

  public removeGroups(key: string, groupKeys: string[]): Observable<boolean> {
    return this.http.delete(`http://featuretoggleservice.euromonitor.local:9000/api/features/groups`, new RequestOptions({
      body: {
        key: key,
        groupKeys: groupKeys
      }
    })).map((x) => true);
  }

  public create(name: string, key: string, type: string, projectKey: string): Observable<Feature> {
    return this.http.post('http://featuretoggleservice.euromonitor.local:9000/api/features', {
      name: name,
      key: key,
      type: type,
      projectKey: projectKey
    }).map((x) => this.mapFeature(x.json()));
  }

  public toggle(key: string): Observable<boolean> {
    return this.http.put('http://featuretoggleservice.euromonitor.local:9000/api/features/toggle', {
      key: key,
    }).map((x) => true);
  }

  private mapGroups(groups: any[]): FeatureGroup[] {
    return groups.map((x) => new FeatureGroup(x.key, x.name, x.createdTimestamp));
  }

  private mapOptions(options: any[]): Option[] {
    return options.map((x) => new Option(x.key, x.name, x.value));
  }

  private mapAssociatedProject(associatedProject: any): AssociatedProject {
    return new AssociatedProject(associatedProject.key, associatedProject.name, associatedProject.createdTimestamp);
  }

  private mapFeature(feature: any): Feature {
    const obj = new Feature(feature.key, feature.name, feature.type, this.mapGroups(feature.groups), this.mapAssociatedProject(feature.associatedProject), feature.createdTimestamp, this.mapOptions(feature.options));

    obj.enabled = feature.enabled;

    return obj;
  }

}
