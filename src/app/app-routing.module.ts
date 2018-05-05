import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from './books/books.component';
import { OnlineCoursesComponent } from './online-courses/online-courses.component';
import { CoachingComponent } from './coaching/coaching.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navigationLinks } from './shared/navigation-links';
import { WorkshopsComponent } from './workshops/workshops.component';
import { VisionComponent } from './vision/vision.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: navigationLinks[0].path, component: AboutComponent},
  { path: navigationLinks[1].path, component: WorkshopsComponent},
  { path: navigationLinks[2].path, component: MentoringComponent},
  { path: navigationLinks[3].path, component: CoachingComponent},
  { path: navigationLinks[4].path, component: OnlineCoursesComponent},
  { path: navigationLinks[5].path, component: VisionComponent},
  { path: navigationLinks[6].path, component: BooksComponent},
  { path: navigationLinks[7].path, component: ContactComponent},

  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
