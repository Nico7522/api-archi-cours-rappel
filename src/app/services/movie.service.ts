import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Movie, MovieForm } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _url = 'https://localhost:7200/api';
  constructor(private _client: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this._client
      .get<Movie[]>(`${this._url}/movie`)
      .pipe(tap((_) => console.log('ok')));
  }

  createMovie(movie: MovieForm) {
    // let httpHeader: HttpHeaders = new HttpHeaders({
    //   authorization: 'bearer ' + localStorage.getItem('token'),
    // });
    return this._client.post(`${this._url}/movie`, { ...movie });
  }
}
