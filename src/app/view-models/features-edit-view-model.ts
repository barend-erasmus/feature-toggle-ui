// Imports models
import { Feature } from './../models/feature';
import { Project } from './../models/project';
import { AssociatedProject } from './../models/associated-project';

// Imports services
import { FeaturesService } from './../services/features.service';

export class FeaturesEditViewModel {

    public feature: Feature;
    public projects: Project[];
    public validationMessages: string[];

    constructor(private featuresService: FeaturesService) {
        
    }


    public validate(): boolean {
        this.validationMessages = [];


        return this.validationMessages.length === 0;
    }
}