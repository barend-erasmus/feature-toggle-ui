// Imports models
import { Project } from './../models/project';

// Imports services
import { ProjectsService } from './../services/projects.service';

export class ProjectsListViewModel {

  public projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {

  }

  public loadProjects(): void {
    this.projectsService.list().subscribe((x) => {
      this.projects = x;
    });
  }
}