import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0, "", "", new Date());

  //we will created addGoal event emitter object of type Goal that will emit an event to the parent component.
  @Output() addGoal = new EventEmitter<Goal>(); 

  //In the function below we use the emit method and pass in the new goal object we want to create
  submitGoal(){
    this.addGoal.emit(this.newGoal)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
