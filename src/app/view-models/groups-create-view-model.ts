// Imports models
import { Group } from './../models/group';

// Imports services
import { GroupsService } from './../services/groups.service';

export class GroupsCreateViewModel {

    public group: Group;
    public validationMessages: string[];

    constructor(private groupsService: GroupsService) {
        this.group = new Group(null, null, null, null);
    }

    public onClick_Submit() {
        if (this.validate()) {
            this.groupsService.create(this.group.name, this.group.key).subscribe((x) => {
                window.location.href = '/featuretoggle/groups';
            });
        }
    }

    public validate(): boolean {
        this.validationMessages = [];

        if (!this.group.key) {
            this.validationMessages.push('Group Key cannot be empty.');
        }

        if (!this.group.name) {
            this.validationMessages.push('Group Name cannot be empty.');
        }

        return this.validationMessages.length === 0;
    }
}