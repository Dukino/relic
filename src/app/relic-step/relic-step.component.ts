import { Component, Input, OnInit } from '@angular/core';

import * as data from '../data.json';

@Component({
  selector: 'app-relic-step',
  templateUrl: './relic-step.component.html',
  styleUrls: ['./relic-step.component.css'],
})
export class RelicStepComponent implements OnInit {
  steps: any = data[0].steps;
  @Input() step_id = '';
  @Input() expac = '';
  acquisition: any[] = [];
  methods: any[] = [];
  warning: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.acquisition = Object.values(
        this.steps[this.expac][this.step_id].acquisition
      );
    if(this.steps[this.expac][this.step_id].warning == "") {
        this.warning = false;
    }
  }
}
