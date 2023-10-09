import { Component } from '@angular/core';
import { Exercise } from './exercise.model';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent {
  exercises: Exercise[] = [
    { name: 'Test0', imgUrl: 'Test2'},
    { name: 'Test1', imgUrl: 'Test2'},
    { name: 'Test2', imgUrl: 'Test2'},
    { name: 'Test3', imgUrl: 'Test2'},
  ];

  constructor(){}
}
