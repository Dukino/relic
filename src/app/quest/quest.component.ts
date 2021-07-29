import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css'],
})
export class QuestComponent implements OnInit {
  @Input() icon: string = '';
  @Input() isHeading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
