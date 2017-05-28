export class FeatureGroup {
    constructor(public key: string, public name: string, public createdTimestamp: number) {

    }

    public isValid(): boolean {

        if (this.key === null) {
            return false;
        }

        return true;
    }
}
