// Imports models
import { Group } from './../models/group';
import { Consumer } from './../models/consumer';

// Imports services
import { GroupsService } from './../services/groups.service';

export class GroupsEditViewModel {


    public group: Group;
    public addConsumer: Consumer;

    constructor(private groupsService: GroupsService) {
        this.group = new Group(null, null, null, null);
        this.addConsumer = new Consumer(null, null, null);
    }

    public loadGroup(key: string): void {
        this.groupsService.find(key).subscribe((x) => {
            this.group = x;
        });
    }

    public onClick_AddConsumer() {
        this.groupsService.addConsumers(this.group.key, [
            this.addConsumer.id
        ]).subscribe((x) => {
            this.addConsumer.id = null;
            this.loadGroup(this.group.key);
        });
    }

    public onClick_RemoveConsumer(key: string) {
        this.groupsService.removeConsumers(this.group.key, [
            key
        ]).subscribe((x) => {
            this.loadGroup(this.group.key);
        });
    }

}