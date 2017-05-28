// Imports
import { Component, OnInit } from '@angular/core';

// Imports services
import { FeaturesService } from './../services/features.service';
import { ProjectsService } from './../services/projects.service';

// Imports view models
import { FeaturesCreateViewModel } from './../view-models/features-create-view-model';

@Component({
  selector: 'app-features-create-route',
  templateUrl: './features-create-route.component.html',
  styleUrls: ['./features-create-route.component.css']
})
export class FeaturesCreateRouteComponent implements OnInit {

  public model: FeaturesCreateViewModel;

  constructor(private projectsService: ProjectsService, private featuresService: FeaturesService) {
    this.model = new FeaturesCreateViewModel(this.featuresService, this.projectsService);
  }

  ngOnInit() {
    this.model.loadProjects();
  }


}
