import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {
    @Input() iLvl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
