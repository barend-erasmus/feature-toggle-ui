// Imports
import { environment } from './../../environments/environment';

// Imports models
import { Project } from './../models/project';

// Imports services
import { ProjectsService } from './../services/projects.service';

export class ProjectsCreateViewModel {

    public project: Project;
    public validationMessages: string[];

    constructor(private projectsService: ProjectsService) {
        this.project = new Project(null, null, null);
    }

    public onClick_Submit() {
        if (this.validate()) {
            this.projectsService.create(this.project.name, this.project.key).subscribe((x) => {
                window.location.href = `${environment.prefix}/`;
            });
        }
    }

    public validate(): boolean {
        this.validationMessages = [];

        if (!this.project.key) {
            this.validationMessages.push('Project Key cannot be empty.');
        }

        if (!this.project.name) {
            this.validationMessages.push('Project Name cannot be empty.');
        }

        return this.validationMessages.length === 0;
    }
}