import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shb-relic',
  templateUrl: './shb-relic.component.html',
  styleUrls: ['./shb-relic.component.css'],
})
export class ShbRelicComponent implements OnInit {
  step1Show: boolean = true;
  step2Show: boolean = true;
  step3Show: boolean = true;
  step4Show: boolean = true;
  step5Show: boolean = true;
  step6Show: boolean = true;
  step7Show: boolean = true;
  step8Show: boolean = true;
  step9Show: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  onToggleDisplay(section: number): void {
    switch (section) {
      case 1:
        this.step1Show = !this.step1Show;
        break;
      case 2:
        this.step2Show = !this.step2Show;
        break;
      case 3:
        this.step3Show = !this.step3Show;
        break;
      case 4:
        this.step4Show = !this.step4Show;
        break;
      case 5:
        this.step5Show = !this.step5Show;
        break;
      case 6:
        this.step6Show = !this.step6Show;
        break;
      case 7:
        this.step7Show = !this.step7Show;
        break;
      case 8:
        this.step8Show = !this.step8Show;
        break;
      case 9:
        this.step9Show = !this.step9Show;
        break;
    }
  }
}
