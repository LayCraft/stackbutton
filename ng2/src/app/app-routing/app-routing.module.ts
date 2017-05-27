import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../_guards/auth.guard'; // For preventing un-authorized access to pages
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { StatusBoardComponent } from '../status-board/status-board.component';
import { EmptyStateComponent } from '../empty-state/empty-state.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { TabViewComponent } from '../tab-view/tab-view.component';
import { DownloadComponent } from '../download/download.component';
import { DefaultPageComponent } from '../default-page/default-page.component';
import { SplashPageComponent } from '../splash-page/splash-page.component';
import { InternalPageComponent } from '../internal-page/internal-page.component';
import { SplashTitleCardComponent } from '../splash-title-card/splash-title-card.component';

const appRoutes: Routes = [
  // Default page. TODO: Replace with page that simply checks for login token and directs from there
  { path: '', component: DefaultPageComponent },

  // TODO: This doesn't work when there is a children area. I'm using the vertical format so I can comment out parts of a directive.
  {
    path: 'splash-page',
    component: SplashPageComponent,
    children: [
      {
        path: '',
        component: SplashTitleCardComponent,
        outlet: 'splash'
      },
      {
        path: 'login',
        component: LoginComponent,
        outlet: 'splash'
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        outlet: 'splash'
      },
      {
        path: 'download',
        component: DownloadComponent,
        outlet: 'splash'
      }
    ]
  },
  {
    path: 'internal-page',
    component: InternalPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'status-board',
        component: StatusBoardComponent,
        outlet: 'internal'
      },
      {
        path: 'empty-state',
        component: EmptyStateComponent,
        outlet: 'internal'
      },
      {
        path: 'tab-view',
        component: TabViewComponent,
        outlet: 'internal'
      },
      {
        path: 'list-view',
        component: ListViewComponent,
        outlet: 'internal'
      },
      // TODO: Add profile and management
      /*
      {
        path: 'service-management',
        component: ServiceManagementComponent,
        outlet: 'internal'
      },
      {
        path: 'profile-page',
        component: ProfilePageComponent,
        outlet: 'internal'
      }
      */
    ]
  },

  // { path: 'login', component: LoginComponent, outlet: 'jumbotron'},
  // // Application pages
  // { path: 'landing', component: SplashPageComponent},
  //
  // { path: 'empty-state', component: EmptyStateComponent, canActivate: [AuthGuard]},
  // { path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuard] },
  // { path: 'status-board' , component: StatusBoardComponent, canActivate: [AuthGuard] },
  // { path: 'tab-view', component: TabViewComponent},
  // { path: 'list-view', component: ListViewComponent },

  // Redirect invalid paths to default page
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
