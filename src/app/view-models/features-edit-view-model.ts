// Imports models
import { Feature } from './../models/feature';
import { Project } from './../models/project';
import { Group } from './../models/group';
import { Option } from './../models/option';
import { AssociatedProject } from './../models/associated-project';

// Imports services
import { FeaturesService } from './../services/features.service';
import { GroupsService } from './../services/groups.service';

export class FeaturesEditViewModel {

    public feature: Feature;
    public projects: Project[];
    public groups: Group[];
    public addGroup: Group;
    public addOption: Option;
    public validationMessages: string[];
    public selectedEnvironment: string = 'development';

    constructor(private featuresService: FeaturesService, private groupsService: GroupsService) {
        this.feature = new Feature(null, null, null, [], new AssociatedProject(null, null, null), null);
        this.addGroup = new Group(null, null, [], null);
        this.addOption = new Option(null, null, null);
    }

    public loadFeature(key: string): void {
        this.featuresService.find(key).subscribe((x) => {
            this.feature = x;
        });
    }

    public loadGroups(): void {
        this.groupsService.list().subscribe((x) => {
            this.groups = x;
        });
    }

    public onClick_AddGroup(environmentKey: string) {
        this.featuresService.addGroups(this.feature.key, [
            this.addGroup.key
        ], environmentKey).subscribe((x) => {
            this.addGroup.key = null;
            this.loadFeature(this.feature.key);
        });
    }

    public onClick_RemoveGroup(key: string, environmentKey: string) {
        this.featuresService.removeGroups(this.feature.key, [
            key
        ], environmentKey).subscribe((x) => {
            this.loadFeature(this.feature.key);
        });
    }


    public onClick_AddOption(environmentKey: string) {
        this.featuresService.addOptions(this.feature.key, [
            this.addOption
        ], environmentKey).subscribe((x) => {
            this.addGroup.key = null;
            this.loadFeature(this.feature.key);
        });
    }

    public onClick_RemoveOption(key: string, environmentKey: string) {
        this.featuresService.removeOptions(this.feature.key, [
            key
        ], environmentKey).subscribe((x) => {
            this.loadFeature(this.feature.key);
        });
    }

    public validate(): boolean {
        this.validationMessages = [];


        return this.validationMessages.length === 0;
    }
}