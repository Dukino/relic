import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroService]
})
export class HeroComponent implements OnInit {
    selectedHero: string = "";

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.heroSelectedEvent.subscribe(
        (hero: string) => {
            this.selectedHero = hero;
            console.log("Selected Hero" + this.selectedHero);
        }
    )
  }

}
