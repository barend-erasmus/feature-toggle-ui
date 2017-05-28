// Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

// Imports services
import { FeaturesService } from './../services/features.service';
import { GroupsService } from './../services/groups.service';

// Imports view models
import { FeaturesEditViewModel } from './../view-models/features-edit-view-model';

@Component({
  selector: 'app-features-edit-route',
  templateUrl: './features-edit-route.component.html',
  styleUrls: ['./features-edit-route.component.css']
})
export class FeaturesEditRouteComponent implements OnInit {

  public model: FeaturesEditViewModel;

  constructor(private activatedRoute: ActivatedRoute, private featuresService: FeaturesService, private groupsService: GroupsService) {
    this.model = new FeaturesEditViewModel(this.featuresService, groupsService);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      const key: string = params['key'];
      this.model.loadFeature(key);
    });

    this.model.loadGroups();
  }

}
