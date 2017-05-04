// Imports
import { Component, OnInit } from '@angular/core';

// Imports services
import { ProjectsService } from './../services/projects.service';

// Imports view models
import { ProjectsCreateViewModel } from './../view-models/projects-create-view-model';

@Component({
  selector: 'app-projects-create-route',
  templateUrl: './projects-create-route.component.html',
  styleUrls: ['./projects-create-route.component.css']
})
export class ProjectsCreateRouteComponent implements OnInit {

  public model: ProjectsCreateViewModel;

  constructor(private projectsService: ProjectsService) {
    this.model = new ProjectsCreateViewModel(this.projectsService);
  }

  ngOnInit() {
  }
}
