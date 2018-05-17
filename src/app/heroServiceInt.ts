import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';

export interface HeroServiceInt {

  getHeroes (): Observable<Hero[]>;

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> ;

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any>;

  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero>;

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero>;

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]>;
}
