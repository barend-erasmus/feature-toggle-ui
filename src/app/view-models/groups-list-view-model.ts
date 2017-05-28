// Imports models
import { Feature } from './../models/feature';
import { Project } from './../models/project';
import { Group } from './../models/group';
import { Option } from './../models/option';
import { AssociatedProject } from './../models/associated-project';

// Imports services
import { FeaturesService } from './../services/features.service';
import { GroupsService } from './../services/groups.service';

export class GroupsListViewModel {

    public groups: Group[];


    constructor(private groupsService: GroupsService) {

    }

    public loadGroups(): void {
        this.groupsService.list().subscribe((x) => {
            this.groups = x;
        });
    }
}