import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';
import { FriendsComponent } from './friends/friends.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProcessComponent } from './process/process.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationService } from './services/authentication.service'

const appRoutes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
  path: 'projects/:id',
  component: ProjectDetailComponent
  },
  {
  path: 'admin',
  component: AdminComponent
  },
  {
  path: 'profile/:id',
  component: ProfileComponent
  },
  {
  path: 'process',
  component: ProcessComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
