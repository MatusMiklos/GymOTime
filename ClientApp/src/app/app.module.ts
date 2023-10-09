import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExercisesModule } from './exercises/exercises.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, FetchDataComponent, NavbarComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ExercisesModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
