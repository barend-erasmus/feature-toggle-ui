// Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from './../../environments/environment';

// Imports models
import { Feature } from './../models/feature';
import { FeatureGroup } from './../models/feature-group';
import { Option } from './../models/option';
import { Environment } from './../models/environment';
import { AssociatedProject } from './../models/associated-project';

@Injectable()
export class FeaturesService {

  constructor(private http: Http) { }

  public list(projectKey: string): Observable<Feature[]> {
    if (projectKey === null) {
      return this.http.get(`${environment.api.uri}/api/features`)
        .map((x) => x.json().map((y) => this.mapFeature(y)));
    } else {
      return this.http.get(`${environment.api.uri}/api/features?projectKey=${projectKey}`)
        .map((x) => x.json().map((y) => this.mapFeature(y)));
    }
  }

  public find(key: string): Observable<Feature> {
    return this.http.get(`${environment.api.uri}/api/features?key=${key}`)
      .map((x) => this.mapFeature(x.json()));
  }

  public addGroups(key: string, groupKeys: string[], environmentKey: string): Observable<boolean> {
    return this.http.post(`${environment.api.uri}/api/features/groups`, {
      key: key,
      groupKeys: groupKeys,
      environmentKey: environmentKey
    })
      .map((x) => true);
  }

  public removeGroups(key: string, groupKeys: string[], environmentKey: string): Observable<boolean> {
    return this.http.delete(`${environment.api.uri}/api/features/groups`, new RequestOptions({
      body: {
        key: key,
        groupKeys: groupKeys,
        environmentKey: environmentKey
      }
    })).map((x) => true);
  }

  public addOptions(key: string, options: Option[], environmentKey: string): Observable<boolean> {
    return this.http.post(`${environment.api.uri}/api/features/options`, {
      key: key,
      options: options,
      environmentKey: environmentKey
    })
      .map((x) => true);
  }

  public removeOptions(key: string, optionKeys: string[], environmentKey: string): Observable<boolean> {
    return this.http.delete(`${environment.api.uri}/api/features/options`, new RequestOptions({
      body: {
        key: key,
        optionKeys: optionKeys,
        environmentKey: environmentKey
      }
    })).map((x) => true);
  }

  public create(name: string, key: string, type: string, projectKey: string): Observable<Feature> {
    return this.http.post(`${environment.api.uri}/api/features`, {
      name: name,
      key: key,
      type: type,
      projectKey: projectKey
    }).map((x) => this.mapFeature(x.json()));
  }

  public toggle(key: string): Observable<boolean> {
    return this.http.put(`${environment.api.uri}/api/features/toggle`, {
      key: key,
    }).map((x) => true);
  }

  private mapGroups(groups: any[]): FeatureGroup[] {
    return groups.map((x) => new FeatureGroup(x.key, x.name, x.createdTimestamp));
  }

  private mapOptions(options: any[]): Option[] {
    return options.map((x) => new Option(x.key, x.name, x.value));
  }

  private mapEnvironments(environments: any[]): Environment[] {
    return environments.map((x) => new Environment(x.key, x.name, this.mapGroups(x.groups), this.mapOptions(x.options), x.createdTimestamp));
  }

  private mapAssociatedProject(associatedProject: any): AssociatedProject {
    return new AssociatedProject(associatedProject.key, associatedProject.name, associatedProject.createdTimestamp);
  }

  private mapFeature(feature: any): Feature {
    const obj = new Feature(feature.key, feature.name, feature.type, this.mapEnvironments(feature.environments), this.mapAssociatedProject(feature.associatedProject), feature.createdTimestamp);

    obj.enabled = feature.enabled;

    return obj;
  }

}
