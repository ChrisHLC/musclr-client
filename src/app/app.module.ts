import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NguCarouselModule} from '@ngu/carousel';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/navigation/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideNavigationListComponent} from './components/navigation/side-navigation-list/side-navigation-list.component';
import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './components/auth/auth.service';
import {AuthInterceptor} from './components/auth/auth.interceptor';
import {SchedulerComponent} from './components/scheduler-container/scheduler/scheduler.component';
import {SchedulerContainerComponent} from './components/scheduler-container/scheduler-container.component';
import {SchedulerDrawerComponent} from './components/scheduler-container/scheduler-drawer/scheduler-drawer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FooterComponent} from './components/navigation/footer/footer.component';
import {NewsComponent} from './components/news/news.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CommunityComponent} from './components/community/community.component';
import {SchedulerService} from './components/scheduler-container/scheduler.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ExercisesComponent} from './components/exercises/exercises.component';
import {SafePipe} from './components/exercises/safe.pipe';
import {DraggableDirective, ZoomableDirective} from './components/dashboard/graph-display/d3/directives';
import {ExerciseService} from './components/exercises/exercise.service';
import {Neo4jService} from './components/dashboard/graph-display/neo4j.service';
import {D3Service} from './components/dashboard/graph-display/d3';
import {GraphComponent} from './components/dashboard/graph-display/visuals/graph/graph.component';
import {LinkVisualComponent, NodeVisualComponent} from './components/dashboard/graph-display/visuals/shared';
import {GraphDisplayComponent} from './components/dashboard/graph-display/graph-display.component';
import {GraphDrawerComponent} from './components/dashboard/graph-display/graph-drawer/graph-drawer.component';
/* tslint:disable:max-line-length */
import {UsersGraphDetailsComponent} from './components/dashboard/graph-display/graph-drawer/graph-details/users-graph-details/users-graph-details.component';
import {EventsGraphDetailsComponent} from './components/dashboard/graph-display/graph-drawer/graph-details/events-graph-details/events-graph-details.component';
import {TownsGraphDetailsComponent} from './components/dashboard/graph-display/graph-drawer/graph-details/towns-graph-details/towns-graph-details.component';
import {GymsGraphDetailsComponent} from './components/dashboard/graph-display/graph-drawer/graph-details/gyms-graph-details/gyms-graph-details.component';
import {UsersGraphDetailsService} from './components/dashboard/graph-display/graph-drawer/graph-details/users-graph-details/users-graph-details.service';
/* tslint:enable:max-line-length */
import {WorkoutCarouselComponent} from './components/workout-carousel/workout-carousel.component';
import {WorkoutComponent} from './components/workout/workout.component';
import {UserCarouselComponent} from './components/community/user-carousel/user-carousel.component';
import {WorkoutGeneratorComponent} from './components/workout/workout-generator/workout-generator.component';
import {WorkoutFormComponent} from './components/workout/workout-form/workout-form.component';
import {WorkoutRoutineComponent} from './components/workout/workout-routine/workout-routine.component';
import {FriendItemComponent} from './components/scheduler-container/friend-item/friend-item.component';
import {MemberItemComponent} from './components/community/member-item/member-item.component';
import {CommunityService} from './components/community/community.service';
import {WorkoutService} from './components/workout/workout.service';
import {ChatComponent} from './components/chat/chat.component';
import {ChatService} from './services/chat.service';
import {RelationshipService} from './services/relationship.service';
import {ChatFriendsListComponent} from './components/chat/chat-friends-list/chat-friends-list.component';
import {ChatMessageFormComponent} from './components/chat/chat-message-form/chat-message-form.component';
import {ChatMessageItemComponent} from './components/chat/chat-message-item/chat-message-item.component';
import {ChatMessagesListComponent} from './components/chat/chat-messages-list/chat-messages-list.component';
import {UserService} from './services/user.service';
import { GraphLegendComponent } from './components/dashboard/graph-display/graph-legend/graph-legend.component';
import { WorkoutDivComponent } from './components/workout/workout-div/workout-div.component';
import {GraphLegendService} from './components/dashboard/graph-display/graph-legend/graph-legend.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavigationListComponent,
    LoginComponent,
    HomeComponent,
    SchedulerComponent,
    SchedulerContainerComponent,
    SchedulerDrawerComponent,
    FooterComponent,
    NewsComponent,
    CommunityComponent,
    DraggableDirective,
    ZoomableDirective,
    GraphComponent,
    LinkVisualComponent,
    NodeVisualComponent,
    GraphDisplayComponent,
    GraphDrawerComponent,
    ProfileComponent,
    ExercisesComponent,
    ProfileComponent,
    DashboardComponent,
    FriendItemComponent,
    SafePipe,
    UsersGraphDetailsComponent,
    EventsGraphDetailsComponent,
    TownsGraphDetailsComponent,
    GymsGraphDetailsComponent,
    WorkoutGeneratorComponent,
    WorkoutFormComponent,
    WorkoutRoutineComponent,
    WorkoutCarouselComponent,
    WorkoutComponent,
    UserCarouselComponent,
    MemberItemComponent,
    ChatComponent,
    ChatFriendsListComponent,
    ChatMessageFormComponent,
    ChatMessageItemComponent,
    ChatMessagesListComponent,
    WorkoutDivComponent,
    GraphLegendComponent,
  ],
  imports: [
    NguCarouselModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [
    AuthService,
    SchedulerService,
    D3Service,
    Neo4jService,
    ExerciseService,
    CommunityService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    UsersGraphDetailsService,
    WorkoutService,
    ChatService,
    RelationshipService,
    WorkoutService,
    UserService,
    GraphLegendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
