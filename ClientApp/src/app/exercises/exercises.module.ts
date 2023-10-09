import { NgModule } from "@angular/core";
import { ExercisesComponent } from "./exercises.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ExercisesComponent,

  ],
  imports:[
    MatGridListModule,
    SharedModule
  ],
  exports:[
    ExercisesComponent
  ]
})
export class ExercisesModule {

}
