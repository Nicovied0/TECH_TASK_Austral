
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class PokemonIDService {
    constructor(private http: HttpClient) { }
    url: string = environment.backUrl

    getPokemonsID(id: any): Observable<any> {
        return this.http.get<any>(`${this.url}/pokemon/${id}`);
    }

}
