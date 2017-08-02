// Imports
import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

// Imports services
import { GroupsService } from './../services/groups.service';

// Imports view models
import { GroupsListViewModel } from './../view-models/groups-list-view-model';

@Component({
  selector: 'app-groups-list-route',
  templateUrl: './groups-list-route.component.html',
  styleUrls: ['./groups-list-route.component.css']
})
export class GroupsListRouteComponent implements OnInit {

  public model: GroupsListViewModel;
  public prefix: string = environment.prefix;

  constructor(private groupsService: GroupsService) { 
    this.model = new GroupsListViewModel(groupsService);
  }

  ngOnInit() {
    this.model.loadGroups();
  }

}
