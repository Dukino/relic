import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: string[] = ['none', 'arr', 'hw', 'sb', 'shb', 'ew'];
  heroSelectedEvent = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  
}
