import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../models/hero';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  constructor() { }
}
