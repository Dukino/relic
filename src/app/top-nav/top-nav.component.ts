import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  none: boolean = true;
  relics: boolean = false;

  constructor() {}

  ngOnInit(): void {}

    removeOthers() {
        this.none = false;
        this.relics = false;
    }

  toggleRelics() {
    this.removeOthers();
    this.relics = true;
  }

  toggleNone() {
      this.removeOthers();
      this.none = true;
  }
}
