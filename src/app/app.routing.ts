import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './components/auth/auth-guard.service';
import {SchedulerContainerComponent} from './components/scheduler-container/scheduler-container.component';
import {NewsComponent} from './components/news/news.component';
import {CommunityComponent} from './components/community/community.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ExercisesComponent} from './components/exercises/exercises.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {GraphDisplayComponent} from './components/dashboard/graph-display/graph-display.component';
/* tslint:disable:max-line-length */
import {UsersGraphDetailsComponent} from './components/dashboard/graph-display/graph-drawer/graph-details/users-graph-details/users-graph-details.component';
import {EventsGraphDetailsComponent} from './components/dashboard/graph-display/graph-drawer/graph-details/events-graph-details/events-graph-details.component';
import {TownsGraphDetailsComponent} from './components/dashboard/graph-display/graph-drawer/graph-details/towns-graph-details/towns-graph-details.component';
import {GymsGraphDetailsComponent} from './components/dashboard/graph-display/graph-drawer/graph-details/gyms-graph-details/gyms-graph-details.component';
/* tslint:enable:max-line-length */
import {WorkoutGeneratorComponent} from './components/workout/workout-generator/workout-generator.component';
import {WorkoutCarouselComponent} from './components/workout-carousel/workout-carousel.component';
import {WorkoutComponent} from './components/workout/workout.component';
import {ChatComponent} from './components/chat/chat.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'graph', component: GraphDisplayComponent, children: [
      {path: 'users', component: UsersGraphDetailsComponent},
      {path: 'events', component: EventsGraphDetailsComponent},
      {path: 'towns', component: TownsGraphDetailsComponent},
      {path: 'gyms', component: GymsGraphDetailsComponent}
    ]
  },
  {path: 'community', component: CommunityComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'workout-generator', component: WorkoutGeneratorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'news', component: NewsComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'scheduler', component: SchedulerContainerComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'workout', component: WorkoutComponent},
  {path: 'workout-carousel', component: WorkoutCarouselComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
