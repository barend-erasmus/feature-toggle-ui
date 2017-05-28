// Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Imports services
import { GroupsService } from './../services/groups.service';

// Imports view models
import { GroupsEditViewModel } from './../view-models/groups-edit-view-model';

@Component({
  selector: 'app-groups-edit-route',
  templateUrl: './groups-edit-route.component.html',
  styleUrls: ['./groups-edit-route.component.css']
})
export class GroupsEditRouteComponent implements OnInit {

  public model: GroupsEditViewModel;

  constructor(private activatedRoute: ActivatedRoute, private groupsService: GroupsService) {
    this.model = new GroupsEditViewModel(this.groupsService);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      const key: string = params['key'];
      this.model.loadGroup(key);
    });
  }

}
