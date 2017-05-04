// Imports modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Imports components
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

// Imports services
import { ProjectsService } from './services/projects.service';
import { HomeRouteComponent } from './home-route/home-route.component';
import { ProjectsCreateRouteComponent } from './projects-create-route/projects-create-route.component';

const router = RouterModule.forRoot([
  {
    component: HomeRouteComponent,
    path: '',
  },
  {
    component: ProjectsCreateRouteComponent,
    path: 'projects/create',
  },
]);

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    HomeRouteComponent,
    ProjectsCreateRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
