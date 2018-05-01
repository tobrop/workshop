import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { navigationLinks } from './ui-components/navigation/navigation-links';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: navigationLinks[0].path, component: AppComponent},
  { path: navigationLinks[1].path, component: AppComponent},
  { path: navigationLinks[2].path, component: AppComponent},
  { path: navigationLinks[3].path, component: AppComponent},
  { path: navigationLinks[4].path, component: AppComponent},
  { path: navigationLinks[5].path, component: AppComponent},
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
