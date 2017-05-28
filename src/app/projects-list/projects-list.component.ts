// Imports
import { Component, OnInit } from '@angular/core';

// Imports services
import { ProjectsService } from './../services/projects.service';

// Imports view models
import { ProjectsListViewModel } from './../view-models/projects-list-view-model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  public model: ProjectsListViewModel;

  constructor(private projectsService: ProjectsService) {
    this.model = new ProjectsListViewModel(this.projectsService);
  }

  ngOnInit() {
    this.model.loadProjects();
  }

}
