import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
    providedIn: 'root'
})
export class CommentsService {
    constructor(private http: HttpClient) { }
    url: string = environment.backUrl;

    getCommentByID(id: any): Observable<any> {
        return this.http.get<any>(`${this.url}/comments/${id}`);
    }

    postComment(id: any, comment: any): Observable<any> {
        return this.http.post<any>(`${this.url}/comments/`, { idPokemon: id, pokemonComments: comment });
    }
}
