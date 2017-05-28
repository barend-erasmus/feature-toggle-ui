// Imports
import { Component, OnInit } from '@angular/core';

// Imports services
import { GroupsService } from './../services/groups.service';

// Imports view models
import { GroupsCreateViewModel } from './../view-models/groups-create-view-model';

@Component({
  selector: 'app-groups-create-route',
  templateUrl: './groups-create-route.component.html',
  styleUrls: ['./groups-create-route.component.css']
})
export class GroupsCreateRouteComponent implements OnInit {

   public model: GroupsCreateViewModel;

  constructor(private groupsService: GroupsService) {
    this.model = new GroupsCreateViewModel(this.groupsService);
  }

  ngOnInit() {
  }

}
