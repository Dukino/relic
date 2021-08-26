import { Component, Input, OnInit } from '@angular/core';

import * as data from '../data.json';

@Component({
  selector: 'app-relic-step',
  templateUrl: './relic-step.component.html',
  styleUrls: ['./relic-step.component.css'],
})
export class RelicStepComponent implements OnInit {
  steps: any = data[0].steps['shb'];
  @Input() step_id: string = '';

  constructor() {}

  ngOnInit(): void {}
}
