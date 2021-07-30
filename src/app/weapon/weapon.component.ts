import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.css'],
})
export class WeaponComponent implements OnInit {
  @Input() icon: string = '';

  constructor() {}

  ngOnInit(): void {}
}
