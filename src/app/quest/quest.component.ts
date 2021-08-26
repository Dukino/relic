import { Component, Input, OnInit } from '@angular/core';

import * as data from '../data.json';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css'],
})
export class QuestComponent implements OnInit {
  quests: any = data[0].quests;
  @Input() quest_id = '';
  @Input() expac = '';
  prev_quests: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.prev_quests = Object.values(
      this.quests[this.expac][this.quest_id].previous_quests
    );
  }
}
