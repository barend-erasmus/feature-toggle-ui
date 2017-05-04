// Imports models
import { Project } from './../models/project';

// Imports services
import { ProjectsService } from './../services/projects.service';

export class ProjectsCreateViewModel {
    public project: Project;

    constructor(private projectsService: ProjectsService) {
        this.project = new Project(null, null, null);
    }

    public onClick_Submit() {
        this.projectsService.create(this.project.name, this.project.key).subscribe((x) => {
            window.location.href = '/';
        });
    }
}