// Imports models
import { Feature } from './../models/feature';

// Imports services
import { FeaturesService } from './../services/features.service';

export class FeaturesListViewModel {
    public features: Feature[] = [];

    constructor(private featuresService: FeaturesService) {

    }

    public loadFeatures(): void {
        this.featuresService.list(null).subscribe((x) => {
            this.features = x;
        });
    }

    public onClick_Toggle(key: string): void {
        this.featuresService.toggle(key).subscribe(x => {
            this.loadFeatures();
        });
    }
}