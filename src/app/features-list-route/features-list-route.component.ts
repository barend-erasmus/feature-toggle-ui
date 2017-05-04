// Imports
import { Component, OnInit } from '@angular/core';

// Imports services
import { FeaturesService } from './../services/features.service';

// Imports view models
import { FeaturesListViewModel } from './../view-models/features-list-view-model';

@Component({
  selector: 'app-features-list-route',
  templateUrl: './features-list-route.component.html',
  styleUrls: ['./features-list-route.component.css']
})
export class FeaturesListRouteComponent implements OnInit {

  public model: FeaturesListViewModel;

  constructor(private featuresService: FeaturesService) { 
    this.model = new FeaturesListViewModel(featuresService);
  }

  ngOnInit() {
    this.model.loadFeatures();
  }
}
