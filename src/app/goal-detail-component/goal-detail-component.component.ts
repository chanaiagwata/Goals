import { Component, Input, OnInit } from '@angular/core';
import { Goal } from '../goal';
@Component({
  selector: 'app-goal-detail-component',
  templateUrl: './goal-detail-component.component.html',
  styleUrls: ['./goal-detail-component.component.css']
})
export class GoalDetailComponentComponent implements OnInit {

  @Input() goal!: Goal;
  constructor() { }

  ngOnInit(): void {
  }

}
