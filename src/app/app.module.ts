// Imports modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports components
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { ProjectsCreateRouteComponent } from './projects-create-route/projects-create-route.component';
import { FeaturesListRouteComponent } from './features-list-route/features-list-route.component';
import { FeaturesCreateRouteComponent } from './features-create-route/features-create-route.component';
import { FeaturesEditRouteComponent } from './features-edit-route/features-edit-route.component';

// Imports services
import { ProjectsService } from './services/projects.service';
import { FeaturesService } from './services/features.service';
import { GroupsService } from './services/groups.service';


const router = RouterModule.forRoot([
  {
    component: HomeRouteComponent,
    path: '',
  },
  {
    component: ProjectsCreateRouteComponent,
    path: 'projects/create',
  },
  {
    component: FeaturesListRouteComponent,
    path: 'features',
  },
  {
    component: FeaturesCreateRouteComponent,
    path: 'features/create',
  },
  {
    component: FeaturesEditRouteComponent,
    path: 'features/edit',
  },
]);

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    HomeRouteComponent,
    ProjectsCreateRouteComponent,
    FeaturesListRouteComponent,
    FeaturesCreateRouteComponent,
    FeaturesEditRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [
    ProjectsService,
    FeaturesService,
    GroupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
