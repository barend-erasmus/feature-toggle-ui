// Imports models
import { Feature } from './../models/feature';
import { Project } from './../models/project';
import { AssociatedProject } from './../models/associated-project';
import { environment } from './../../environments/environment';

// Imports services
import { FeaturesService } from './../services/features.service';
import { ProjectsService } from './../services/projects.service';

export class FeaturesCreateViewModel {

    public feature: Feature;
    public projects: Project[];
    public validationMessages: string[];

    constructor(private featuresService: FeaturesService, private projectsService: ProjectsService) {
        this.feature = new Feature(null, null, null, [], new AssociatedProject(null, null, null), null, []);
    }

    public onClick_Submit() {
        if (this.validate()) {
            this.featuresService.create(this.feature.name, this.feature.key, this.feature.type, this.feature.associatedProject.key).subscribe((x) => {
                window.location.href = `${environment.prefix}/features`;
            });
        }
    }

    public loadProjects(): void {
        this.projectsService.list().subscribe((x) => {
            this.projects = x;
        });
    }

    public validate(): boolean {
        this.validationMessages = [];

        if (!this.feature.key) {
            this.validationMessages.push('Feature Key cannot be empty.');
        }

        if (!this.feature.name) {
            this.validationMessages.push('Feature Name cannot be empty.');
        }

        if (!this.feature.type) {
            this.validationMessages.push('Feature Type cannot be empty.');
        }

        if (!this.feature.associatedProject.key) {
            this.validationMessages.push('Project cannot be empty.');
        }

        return this.validationMessages.length === 0;
    }
}