import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../classes/hero';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];

	constructor(
		public hero: HeroService
	) { }

	ngOnInit() {
		this.getHeroes();
	}
	getHeroes(): void {
		this.hero.getHeroes().subscribe(heroes => this.heroes = heroes);
	}
}
