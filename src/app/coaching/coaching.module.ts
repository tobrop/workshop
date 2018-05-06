import { UiComponentsModule } from './../ui-components/ui-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachingComponent } from './coaching.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    UiComponentsModule
  ],
  declarations: [CoachingComponent]
})
export class CoachingModule { }
