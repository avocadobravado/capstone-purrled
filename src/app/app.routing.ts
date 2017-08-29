import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';
import { FriendsComponent } from './friends/friends.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const appRoutes: Routes = [
  {
    path: '',
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
