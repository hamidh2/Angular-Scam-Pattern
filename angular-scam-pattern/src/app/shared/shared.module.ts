import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarTitlePipe } from './pipes/avatart-title/avatar-title.pipe';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DateFormatterPipe } from './pipes/date-formatter/date-formatter.pipe';
import { EmptyContentComponent } from './components/empty-content/empty-content.component';
import { FeatureFlagDirective } from './directives/feature-flag/feature-flag.directive';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { NgModule } from '@angular/core';
import { ProductStatusPipe } from './pipes/product-status/product-status.pipe';
import { RandomColorDirective } from './directives/random-color/random-color.directive';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ConfirmDialogComponent,
    EmptyContentComponent,
    TimelineComponent,
    FeatureFlagDirective,
    RandomColorDirective,
    AvatarTitlePipe,
    DateFormatterPipe,
    ProductStatusPipe,
    ImageUploaderComponent,
  ],
  imports: [
    CommonModule,
    // With the traditional approach some modules can be added here as well
    // such as PrimeModule, TranslationModule, FontAwesomeModule & so on.
  ],
  exports: [
    AvatarComponent,
    ConfirmDialogComponent,
    EmptyContentComponent,
    TimelineComponent,
    FeatureFlagDirective,
    RandomColorDirective,
    AvatarTitlePipe,
    DateFormatterPipe,
    ProductStatusPipe,
    ImageUploaderComponent,

    // If we follow the traditional approach we need to export those modules that we imported
    // (PrimeModule, TranslationModule, FontAwesomeModule)
    // for the sake of having them in our target module
  ],
})
export class SharedModule {}
