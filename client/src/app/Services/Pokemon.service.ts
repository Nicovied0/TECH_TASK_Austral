// pokemon.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }
  url: string = environment.backUrl

  getPokemonsList(): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon`);
  }

  getPokemons(pokeTo: any, limitPoke: any): Observable<any> {
    return this.http.get<any>(`${this.url}/pokemon?limitPoke=${limitPoke}&pokeTo=${pokeTo}`);
  }
}
